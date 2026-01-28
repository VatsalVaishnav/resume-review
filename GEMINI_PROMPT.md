# Gemini AI Prompt Documentation

## Overview

The application uses Google Gemini AI (gemini-pro model) to analyze resumes and provide comprehensive feedback. This document outlines the prompt structure and evaluation criteria.

## Prompt Structure

The prompt sent to Gemini AI includes:

1. **Role Definition**: "You are an expert resume reviewer and career advisor"
2. **Resume Content**: The extracted text from the uploaded resume
3. **Output Format**: Detailed JSON structure specification
4. **Evaluation Criteria**: Five key dimensions for scoring

## Full Prompt Template

```
You are an expert resume reviewer and career advisor. Analyze the following resume and provide a comprehensive evaluation.

RESUME CONTENT:
{resume_text}

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

Provide specific, actionable feedback. Be constructive and professional. Return ONLY valid JSON, no additional text.
```

## Evaluation Criteria Details

### 1. ATS Friendliness (atsScore)
**What it measures:**
- Use of standard section headers (Experience, Education, Skills, etc.)
- Simple, clean formatting without complex tables or graphics
- Standard fonts and text-based content
- Proper file format compatibility
- No headers/footers that might confuse ATS systems
- Consistent date formats

**Scoring Guide:**
- 80-100: Excellent ATS compatibility, standard format
- 60-79: Good compatibility with minor issues
- 40-59: Some ATS compatibility issues
- 0-39: Poor ATS compatibility, needs significant reformatting

### 2. Keyword Optimization (keywordScore)
**What it measures:**
- Presence of industry-relevant keywords
- Use of action verbs (achieved, developed, implemented, etc.)
- Technical skills and tools mentioned
- Job-specific terminology
- Keyword density and relevance

**Scoring Guide:**
- 80-100: Excellent keyword usage, highly relevant
- 60-79: Good keyword coverage
- 40-59: Missing some important keywords
- 0-39: Poor keyword optimization, needs significant improvement

### 3. Formatting & Structure (formattingScore)
**What it measures:**
- Consistent formatting throughout
- Professional appearance
- Clear section organization
- Readability and visual hierarchy
- Proper spacing and alignment
- Appropriate length (typically 1-2 pages)

**Scoring Guide:**
- 80-100: Professional, well-formatted, easy to read
- 60-79: Generally good formatting with minor inconsistencies
- 40-59: Some formatting issues affecting readability
- 0-39: Poor formatting, needs significant improvement

### 4. Experience Clarity (experienceScore)
**What it measures:**
- Clear job descriptions
- Quantifiable achievements (numbers, percentages, metrics)
- Relevant experience for target roles
- Use of action verbs
- Chronological or reverse-chronological order
- Appropriate level of detail

**Scoring Guide:**
- 80-100: Clear, impactful experience descriptions with metrics
- 60-79: Good descriptions, some areas could be more specific
- 40-59: Vague descriptions, missing quantifiable achievements
- 0-39: Poor experience descriptions, needs significant improvement

### 5. Skills Relevance (skillsScore)
**What it measures:**
- Appropriate mix of technical and soft skills
- Skills relevant to target industry/role
- Proper categorization (technical, soft, languages, etc.)
- Not over-listing or under-listing skills
- Skills match experience descriptions

**Scoring Guide:**
- 80-100: Excellent skill selection, well-balanced
- 60-79: Good skills, minor gaps or redundancies
- 40-59: Missing important skills or includes irrelevant ones
- 0-39: Poor skill selection, needs significant improvement

## Response Format

The AI returns a JSON object with the following structure:

```json
{
  "score": 75,
  "strengths": [
    "Clear work experience with quantifiable achievements",
    "Well-organized sections with consistent formatting",
    "Relevant technical skills listed"
  ],
  "weaknesses": [
    "Missing industry-specific keywords",
    "Some job descriptions lack specific metrics",
    "Could benefit from more action verbs"
  ],
  "suggestions": [
    "Add more quantifiable achievements to experience section",
    "Include keywords from target job descriptions",
    "Consider adding a professional summary section"
  ],
  "missingKeywords": [
    "project management",
    "agile methodology",
    "cloud computing"
  ],
  "atsScore": 80,
  "keywordScore": 65,
  "formattingScore": 75,
  "experienceScore": 80,
  "skillsScore": 70,
  "summary": "This resume shows strong experience and formatting, but could benefit from better keyword optimization and more specific achievements."
}
```

## Prompt Engineering Best Practices

1. **Clear Instructions**: Specific format requirements
2. **Context**: Role definition helps AI understand the task
3. **Structured Output**: JSON format ensures parseable responses
4. **Scoring Guidelines**: Clear criteria for each dimension
5. **Actionable Feedback**: Emphasis on constructive suggestions

## Error Handling

The application handles:
- Invalid JSON responses (with fallback parsing)
- Missing fields (defaults to empty arrays/zero scores)
- Score validation (clamped to 0-100 range)
- Response parsing errors (with user-friendly error messages)

## Customization

To modify the analysis criteria:

1. Edit the prompt in `app/api/analyze/route.ts`
2. Adjust evaluation criteria descriptions
3. Modify scoring guidelines
4. Update response format if needed
5. Ensure frontend components handle new fields

## Model Information

- **Model**: `gemini-pro`
- **Provider**: Google Generative AI
- **Temperature**: Default (not explicitly set)
- **Max Tokens**: Default (not explicitly set)

## Cost Considerations

- Gemini API pricing varies by usage
- Free tier available with limits
- Each analysis uses one API call
- Response size typically 500-2000 tokens
