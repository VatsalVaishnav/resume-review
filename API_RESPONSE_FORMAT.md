# API Response Format Documentation

## Overview

This document describes the API response format for the resume analysis endpoint.

## POST /api/analyze

### Request

**Method**: `POST`  
**Content-Type**: `multipart/form-data`

**Body**:
- `file`: File (PDF or DOCX, max 5MB)

### Success Response

**Status**: `200 OK`

**Response Body**:
```json
{
  "id": "abc123xyz",
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

### Error Responses

#### 400 Bad Request - No File
```json
{
  "error": "No file provided"
}
```

#### 400 Bad Request - Invalid File Type
```json
{
  "error": "Invalid file type. Please upload a PDF or DOCX file."
}
```

#### 400 Bad Request - Insufficient Text
```json
{
  "error": "Could not extract sufficient text from the resume. Please ensure the file is not corrupted."
}
```

#### 500 Internal Server Error - API Key Missing
```json
{
  "error": "Gemini API key not configured. Please set GEMINI_API_KEY environment variable."
}
```

#### 500 Internal Server Error - Analysis Failed
```json
{
  "error": "Failed to analyze resume with AI"
}
```

#### 500 Internal Server Error - Generic Error
```json
{
  "error": "An error occurred while analyzing the resume"
}
```

## GET /api/analyze?id={id}

### Request

**Method**: `GET`  
**Query Parameters**:
- `id`: Analysis ID (required)

### Success Response

**Status**: `200 OK`

**Response Body**: Same format as POST response, plus:
```json
{
  "id": "abc123xyz",
  "fileName": "resume.pdf",
  "analyzedAt": "2026-01-28T10:30:00.000Z",
  "score": 75,
  // ... other fields same as POST response
}
```

### Error Responses

#### 400 Bad Request - Missing ID
```json
{
  "error": "Analysis ID required"
}
```

#### 404 Not Found
```json
{
  "error": "Analysis not found"
}
```

## Response Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier for this analysis |
| `score` | number | Overall resume score (0-100) |
| `strengths` | string[] | Array of resume strengths |
| `weaknesses` | string[] | Array of resume weaknesses |
| `suggestions` | string[] | Array of actionable improvement suggestions |
| `missingKeywords` | string[] | Array of recommended keywords to add |
| `atsScore` | number | ATS compatibility score (0-100) |
| `keywordScore` | number | Keyword optimization score (0-100) |
| `formattingScore` | number | Formatting and structure score (0-100) |
| `experienceScore` | number | Experience clarity score (0-100) |
| `skillsScore` | number | Skills relevance score (0-100) |
| `summary` | string | Brief summary of resume quality |
| `fileName` | string? | Original file name (GET only) |
| `analyzedAt` | string? | ISO timestamp of analysis (GET only) |

## Score Interpretation

### Overall Score (score)
- **80-100**: Excellent - Resume is well-optimized
- **60-79**: Good - Minor improvements needed
- **40-59**: Fair - Several areas need improvement
- **0-39**: Needs Improvement - Significant changes required

### Category Scores
Each category score follows the same interpretation:
- **80-100**: Excellent
- **60-79**: Good
- **40-59**: Fair
- **0-39**: Needs Improvement

## Example Usage

### JavaScript/TypeScript

```typescript
// Upload and analyze
const formData = new FormData();
formData.append('file', file);

const response = await fetch('/api/analyze', {
  method: 'POST',
  body: formData,
});

const analysis = await response.json();
console.log(`Resume Score: ${analysis.score}`);

// Retrieve analysis later
const getResponse = await fetch(`/api/analyze?id=${analysis.id}`);
const savedAnalysis = await getResponse.json();
```

### cURL

```bash
# Upload and analyze
curl -X POST http://localhost:3000/api/analyze \
  -F "file=@resume.pdf"

# Retrieve analysis
curl http://localhost:3000/api/analyze?id=abc123xyz
```

## Notes

- Analysis results are cached in memory (last 100 analyses)
- Analysis IDs are generated using timestamp + random string
- File size limit: 5MB
- Supported formats: PDF, DOCX, DOC
- Analysis typically takes 10-30 seconds
