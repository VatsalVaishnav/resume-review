import { NextRequest, NextResponse } from "next/server"; 
import Groq from "groq-sdk"; 
import mammoth from "mammoth";  
import pdfParse from "pdf-parse";
 
// Initialize Groq AI
const groq = new Groq({ 
  apiKey: process.env.GROQ_API_KEY || "",  
});
  
//  Store analysis results in memory (in production, use a database)
const analysisCache = new Map<string, any>();
 
function generateId(): string {  
  return Date.now().toString(36) + Math.random().toString(36).substr(2); 
} 
 
async function extractTextFromPDF(buffer: Buffer): Promise<string> {
  try {
    const data = await pdfParse(buffer);
    return data.text; 
  } catch (error) {
    throw new Error("Failed to parse PDF file");
  }
} 
 
async function extractTextFromDOCX(buffer: Buffer): Promise<string> {
  try {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    throw new Error("Failed to parse DOCX file"); 
  }
}
 
async function analyzeResumeWithAI(resumeText: string): Promise<any> { 
  const prompt = `You are a professional ATS resume evaluator, HR expert, and career coach.

You will be given extracted text from a PDF uploaded by a user.

IMPORTANT VALIDATION RULES (MUST FOLLOW):
1. First, determine whether the provided text is a REAL resume.
2. If the content is NOT a resume (random text, blank, invoice, book, certificate, unrelated PDF, garbage text, or very short content under 150 words):
   - Set ALL scores to 0
   - Return the message: "Please upload a valid resume PDF"
   - Do NOT analyze further
3. Do NOT assume or invent information that is not present in the resume.
4. Be strict, realistic, and ATS-focused.
5. Output ONLY valid JSON. No markdown, no explanation, no extra text.

RESUME TEXT:
{{resumeText}}

------------------------------------
ANALYSIS INSTRUCTIONS (ONLY IF VALID RESUME):

Evaluate the resume based on:
- ATS compatibility
- Keyword optimization
- Formatting & structure
- Experience quality
- Skills relevance

SCORING RULES:
- Scores must reflect actual resume quality
- Missing sections (summary, skills, experience, education) must reduce scores
- No resume is perfect — avoid giving 95+ unless truly exceptional
- Freshers with no experience should score lower in experienceScore
- Poor formatting or paragraphs instead of bullets should reduce formattingScore

------------------------------------
REQUIRED JSON RESPONSE FORMAT:

{
  "isValidResume": true | false,
  "message": "<short validation message>",
  "overallScore": <number 0-100>,

  "sectionScores": {
    "atsScore": <number 0-100>,
    "keywordScore": <number 0-100>,
    "formattingScore": <number 0-100>,
    "experienceScore": <number 0-100>,
    "skillsScore": <number 0-100>
  },

  "strengths": [
    "<clear, resume-based strength>",
    "<clear, resume-based strength>",
    "<clear, resume-based strength>"
  ],

  "weaknesses": [
    "<specific weakness found in resume>",
    "<specific weakness found in resume>",
    "<specific weakness found in resume>"
  ],

  "suggestions": [
    "<very actionable improvement>",
    "<very actionable improvement>",
    "<very actionable improvement>"
  ],

  "missingKeywords": [
    "<important missing keyword>",
    "<important missing keyword>",
    "<important missing keyword>"
  ],

  "summary": "<2–3 sentence professional evaluation of the resume>"
}

------------------------------------
IF INVALID RESUME, RETURN EXACTLY THIS STRUCTURE:

{
  "isValidResume": false,
  "message": "Please upload a valid resume PDF",
  "overallScore": 0,
  "sectionScores": {
    "atsScore": 0,
    "keywordScore": 0,
    "formattingScore": 0,
    "experienceScore": 0,
    "skillsScore": 0
  },
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "missingKeywords": [],
  "summary": ""
}
`;

  // Using llama-3.1-8b-instant - fast and efficient model
  const modelsToTry = ["llama-3.1-8b-instant"];
  let lastError: Error | null = null;
  
  for (const modelName of modelsToTry) {
    try {
      const chatCompletion = await groq.chat.completions.create({  
        messages: [
          { 
            role: "user",
            content: prompt, 
          },
        ], 
        model: modelName,
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }, // Request JSON response
      });

      const text = chatCompletion.choices[0]?.message?.content || "";

      if (!text) {
        throw new Error("Empty response from Groq API");
      }

      // Extract JSON from response (handle cases where AI adds markdown formatting)
      let jsonText = text.trim();
      if (jsonText.startsWith("```json")) { 
        jsonText = jsonText.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      } else if (jsonText.startsWith("```")) { 
        jsonText = jsonText.replace(/```\n?/g, "");
      }

      // Try to find JSON object in the response if it's not pure JSON
      const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        jsonText = jsonMatch[0];
      }

      let analysis;
      try {
        analysis = JSON.parse(jsonText);
      } catch (parseError) {
        console.error("JSON Parse Error:", parseError);
        console.error("Response text:", text.substring(0, 500));
        throw new Error(`Failed to parse AI response as JSON. Response: ${text.substring(0, 200)}`);
      }

      // Validate and ensure all required fields exist
      return {
        score: Math.max(0, Math.min(100, analysis.score || 0)),
        strengths: analysis.strengths || [],
        weaknesses: analysis.weaknesses || [],
        suggestions: analysis.suggestions || [],
        missingKeywords: analysis.missingKeywords || [],
        atsScore: Math.max(0, Math.min(100, analysis.atsScore || 0)),
        keywordScore: Math.max(0, Math.min(100, analysis.keywordScore || 0)),
        formattingScore: Math.max(0, Math.min(100, analysis.formattingScore || 0)),
        experienceScore: Math.max(0, Math.min(100, analysis.experienceScore || 0)),
        skillsScore: Math.max(0, Math.min(100, analysis.skillsScore || 0)),
        summary: analysis.summary || "Resume analysis completed.",
      };
    } catch (error) {
      // If this is a model not found error, try next model
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("not found") || errorMessage.includes("404") || errorMessage.includes("model")) {
        console.warn(`Model ${modelName} not available, trying next model...`);
        lastError = error instanceof Error ? error : new Error(errorMessage);
        continue;
      }
      // For other errors, throw immediately
      throw error;
    }
  }

  // If we get here, all models failed
  const errorMessage = lastError instanceof Error ? lastError.message : "All models failed";
  throw new Error(`Failed to analyze resume with AI: ${errorMessage}`);
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key not configured. Please set GROQ_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const fileType = file.type;
    const fileName = file.name.toLowerCase();
    const isPDF = fileType === "application/pdf" || fileName.endsWith(".pdf");
    const isDOCX =
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileName.endsWith(".docx") ||
      fileName.endsWith(".doc");

    if (!isPDF && !isDOCX) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a PDF or DOCX file." },
        { status: 400 }
      );
    }

    // Read file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text based on file type
    let resumeText: string;
    if (isPDF) {
      resumeText = await extractTextFromPDF(buffer);
    } else {
      resumeText = await extractTextFromDOCX(buffer);
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return NextResponse.json(
        { error: "Could not extract sufficient text from the resume. Please ensure the file is not corrupted." },
        { status: 400 }
      );
    }

    // Analyze with Groq AI
    const analysis = await analyzeResumeWithAI(resumeText);

    // Store analysis with unique ID
    const analysisId = generateId();
    analysisCache.set(analysisId, {
      ...analysis,
      id: analysisId,
      fileName: file.name,
      analyzedAt: new Date().toISOString(),
    });

    // Clean up old entries (keep last 100)
    if (analysisCache.size > 100) {
      const firstKey = analysisCache.keys().next().value;
      if (firstKey) {
        analysisCache.delete(firstKey);
      }
    }

    return NextResponse.json({
      id: analysisId,
      ...analysis,
    });
  } catch (error) {
    console.error("Analysis Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred while analyzing the resume",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve analysis results
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Analysis ID required" },
      { status: 400 }
    );
  }

  const analysis = analysisCache.get(id);
  if (!analysis) {
    return NextResponse.json(
      { error: "Analysis not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(analysis);
}
