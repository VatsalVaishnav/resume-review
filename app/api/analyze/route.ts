import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import mammoth from "mammoth";
import pdfParse from "pdf-parse";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Store analysis results in memory (in production, use a database)
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
  const prompt = `You are an expert resume reviewer and career advisor. Analyze the following resume and provide a comprehensive evaluation.

RESUME CONTENT:
${resumeText}

Please analyze this resume and provide a detailed evaluation in the following JSON format:
{
  "score": <number between 0-100>,
  "strengths": [
    "<specific strength 1>",
    "<specific strength 2>",
    "<specific strength 3>"
  ],
  "weaknesses": [
    "<specific weakness 1>",
    "<specific weakness 2>",
    "<specific weakness 3>"
  ],
  "suggestions": [
    "<actionable suggestion 1>",
    "<actionable suggestion 2>",
    "<actionable suggestion 3>"
  ],
  "missingKeywords": [
    "<missing keyword 1>",
    "<missing keyword 2>"
  ],
  "atsScore": <number between 0-100>,
  "keywordScore": <number between 0-100>,
  "formattingScore": <number between 0-100>,
  "experienceScore": <number between 0-100>,
  "skillsScore": <number between 0-100>,
  "summary": "<brief 2-3 sentence summary of the resume's overall quality>"
}

Evaluation Criteria:
1. ATS Friendliness (atsScore): Check formatting, structure, use of standard sections, file compatibility
2. Keyword Optimization (keywordScore): Relevance of keywords, industry-specific terms, action verbs
3. Formatting & Structure (formattingScore): Consistency, readability, professional appearance, section organization
4. Experience Clarity (experienceScore): Clear job descriptions, quantifiable achievements, relevant experience
5. Skills Relevance (skillsScore): Appropriate skills listed, technical and soft skills balance

Provide specific, actionable feedback. Be constructive and professional. Return ONLY valid JSON, no additional text.`;

  // Try models in order of preference with fallback
  const modelsToTry = ["gemini-pro", "gemini-1.5-pro"];
  let lastError: Error | null = null;

  for (const modelName of modelsToTry) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

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
      if (errorMessage.includes("not found") || errorMessage.includes("404")) {
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
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured. Please set GEMINI_API_KEY environment variable." },
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

    // Analyze with Gemini AI
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
