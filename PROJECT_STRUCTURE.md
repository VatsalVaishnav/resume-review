# Project Structure

## Overview

This document outlines the structure and organization of the AI-Powered Resume Analyzer application.

## Directory Structure

```
resume-review/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   └── analyze/
│   │       └── route.ts         # Resume analysis API endpoint
│   ├── upload/
│   │   └── page.tsx             # Resume upload page component
│   ├── results/
│   │   └── page.tsx             # Results dashboard page
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Landing page component
│   └── globals.css              # Global styles and Tailwind imports
├── public/                       # Static assets
│   ├── favicon.ico
│   └── [other static files]
├── .env.local                    # Environment variables (not in git)
├── .gitignore                    # Git ignore rules
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## Key Files

### Frontend Components

#### `app/page.tsx` - Landing Page
- **Purpose**: Main landing page with hero section, features, and call-to-action
- **Components**: 
  - Hero section with CTA button
  - Features grid (3 cards)
  - How it works section (3 steps)
  - Benefits section
  - Footer
- **Styling**: Tailwind CSS with gradient backgrounds

#### `app/upload/page.tsx` - Upload Page
- **Purpose**: Resume upload interface with validation
- **Features**:
  - Drag-and-drop file upload
  - File type validation (PDF, DOCX)
  - File size validation (5MB max)
  - Upload progress indicator
  - Error handling and display
- **State Management**: React useState hooks
- **Navigation**: Uses Next.js router for redirect to results

#### `app/results/page.tsx` - Results Dashboard
- **Purpose**: Display comprehensive resume analysis results
- **Features**:
  - Overall score visualization (circular chart using Recharts)
  - Category scores (5 metrics with progress bars)
  - Strengths section
  - Weaknesses section
  - Suggestions section
  - Missing keywords display
- **Data Fetching**: Client-side fetch from API route
- **Visualization**: Recharts PieChart for score display

### Backend API

#### `app/api/analyze/route.ts` - Analysis API
- **Endpoints**:
  - `POST /api/analyze`: Upload and analyze resume
  - `GET /api/analyze?id={id}`: Retrieve analysis results
- **Functionality**:
  - File upload handling (FormData)
  - PDF parsing using `pdf-parse`
  - DOCX parsing using `mammoth`
  - Text extraction from resume files
  - Gemini AI integration for analysis
  - Result caching (in-memory Map)
- **Error Handling**: Comprehensive try-catch with meaningful error messages
- **Validation**: File type and size validation

### Configuration Files

#### `package.json`
- **Dependencies**:
  - `next`: Next.js framework
  - `react`, `react-dom`: React library
  - `@google/generative-ai`: Gemini AI SDK
  - `pdf-parse`: PDF text extraction
  - `mammoth`: DOCX text extraction
  - `recharts`: Data visualization
  - `lucide-react`: Icon library
- **Dev Dependencies**:
  - TypeScript and type definitions
  - Tailwind CSS
  - ESLint

#### `tsconfig.json`
- TypeScript configuration for Next.js
- Path aliases configured (`@/*`)

#### `next.config.ts`
- Next.js configuration (minimal, using defaults)

## Data Flow

1. **Upload Flow**:
   ```
   User → Upload Page → File Validation → POST /api/analyze → 
   File Parsing → Text Extraction → Gemini AI Analysis → 
   Store Results → Return Analysis ID → Redirect to Results Page
   ```

2. **Results Flow**:
   ```
   Results Page → GET /api/analyze?id={id} → Retrieve Cached Results → 
   Display Analysis → Show Scores, Strengths, Weaknesses, Suggestions
   ```

## API Response Format

### Analysis Response
```typescript
{
  id: string;
  score: number;              // 0-100 overall score
  strengths: string[];        // Array of strengths
  weaknesses: string[];       // Array of weaknesses
  suggestions: string[];      // Array of actionable suggestions
  missingKeywords: string[];  // Array of missing keywords
  atsScore: number;           // 0-100 ATS compatibility score
  keywordScore: number;       // 0-100 keyword optimization score
  formattingScore: number;   // 0-100 formatting score
  experienceScore: number;    // 0-100 experience clarity score
  skillsScore: number;        // 0-100 skills relevance score
  summary: string;            // Brief summary text
  fileName?: string;          // Original file name
  analyzedAt?: string;        // ISO timestamp
}
```

## Gemini AI Prompt Structure

The AI prompt includes:
- Resume content (extracted text)
- Evaluation criteria (5 categories)
- JSON response format specification
- Instructions for scoring (0-100)
- Guidance for actionable feedback

## State Management

- **Client-side**: React useState hooks
- **Server-side**: In-memory Map for caching (production should use database)
- **No global state management**: Simple component-level state

## Styling Approach

- **Framework**: Tailwind CSS 4
- **Design System**: 
  - Color scheme: Blue/Purple gradients
  - Typography: Geist Sans and Geist Mono fonts
  - Components: Custom components with Tailwind utilities
  - Responsive: Mobile-first approach with breakpoints

## Error Handling Strategy

1. **Client-side**: 
   - Form validation
   - File type/size checks
   - User-friendly error messages
   - Loading states

2. **Server-side**:
   - API error responses with status codes
   - Try-catch blocks around critical operations
   - Meaningful error messages
   - Fallback values for missing data

## Performance Considerations

- **Caching**: Analysis results cached in memory (last 100)
- **File Size Limit**: 5MB maximum
- **Lazy Loading**: Components loaded on demand
- **Optimization**: Next.js automatic optimizations (image, font, etc.)

## Security Considerations

- **API Key**: Stored in environment variables
- **File Validation**: Type and size checks
- **Error Messages**: Don't expose sensitive information
- **Input Sanitization**: File content extraction only

## Future Improvements

- Database integration for persistent storage
- User authentication
- File storage (S3, etc.)
- Rate limiting
- Analytics tracking
- Export functionality
