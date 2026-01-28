# AI-Powered Resume Analyzer

A modern, responsive web application that uses Groq AI to analyze resumes and provide comprehensive feedback on ATS compatibility, keyword optimization, formatting, and overall quality.

## Features

- 🚀 **AI-Powered Analysis**: Uses Groq AI (Llama models) for intelligent resume evaluation
- 📄 **Multi-Format Support**: Upload resumes in PDF or DOCX format
- 📊 **Comprehensive Scoring**: Get scores for ATS friendliness, keywords, formatting, experience, and skills
- 💡 **Actionable Insights**: Receive specific suggestions to improve your resume
- 🎨 **Modern UI**: Beautiful, responsive design built with Next.js and Tailwind CSS
- ⚡ **Fast & Efficient**: Quick analysis with real-time feedback

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: Next.js API Routes
- **AI**: Groq AI (Llama 3 models)
- **Resume Parsing**: 
  - `pdf-parse` for PDF files
  - `mammoth` for DOCX files
- **Visualization**: Recharts for score visualization
- **Icons**: Lucide React

## Project Structure

```
resume-review/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # API route for resume analysis
│   ├── upload/
│   │   └── page.tsx              # Resume upload page
│   ├── results/
│   │   └── page.tsx              # Results dashboard
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Groq API key ([Get one here](https://console.groq.com/keys))

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**:
   
   Create a `.env.local` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**:
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Landing Page**: View features and information about the resume analyzer
2. **Upload Resume**: Click "Upload Your Resume" and select a PDF or DOCX file (max 5MB)
3. **Analysis**: Wait for AI analysis (typically 10-30 seconds)
4. **View Results**: Review your resume score, strengths, weaknesses, and actionable suggestions

## API Endpoints

### POST `/api/analyze`

Upload and analyze a resume file.

**Request**:
- Method: `POST`
- Body: `FormData` with `file` field (PDF or DOCX)

**Response**:
```json
{
  "id": "analysis_id",
  "score": 75,
  "strengths": ["...", "..."],
  "weaknesses": ["...", "..."],
  "suggestions": ["...", "..."],
  "missingKeywords": ["...", "..."],
  "atsScore": 80,
  "keywordScore": 70,
  "formattingScore": 75,
  "experienceScore": 80,
  "skillsScore": 70,
  "summary": "Brief summary of resume quality"
}
```

### GET `/api/analyze?id={analysis_id}`

Retrieve previously generated analysis results.

## Gemini AI Prompt

The application uses a comprehensive prompt to analyze resumes across multiple dimensions:

- **ATS Friendliness**: Formatting, structure, standard sections
- **Keyword Optimization**: Relevance, industry terms, action verbs
- **Formatting & Structure**: Consistency, readability, organization
- **Experience Clarity**: Job descriptions, quantifiable achievements
- **Skills Relevance**: Technical and soft skills balance

The AI returns structured JSON with scores (0-100) and detailed feedback for each category.

## Key Components

### Landing Page (`app/page.tsx`)
- Hero section with call-to-action
- Features showcase
- How it works section
- Benefits and footer

### Upload Page (`app/upload/page.tsx`)
- Drag-and-drop file upload
- File validation (type and size)
- Upload progress indicator
- Error handling

### Results Page (`app/results/page.tsx`)
- Overall score visualization (circular chart)
- Detailed category scores
- Strengths and weaknesses lists
- Actionable suggestions
- Missing keywords display

### API Route (`app/api/analyze/route.ts`)
- File parsing (PDF/DOCX)
- Text extraction
- Gemini AI integration
- Analysis result caching

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | Yes |

## Error Handling

The application includes comprehensive error handling for:
- Invalid file types
- File size limits (5MB max)
- API failures
- Network errors
- Missing API keys

## Performance Considerations

- Analysis results are cached in memory (last 100 analyses)
- File size limit: 5MB
- Responsive design for mobile devices
- Loading states for better UX

## Future Enhancements

- Database integration for persistent storage
- User authentication and saved analyses
- Comparison with job descriptions
- Export analysis reports as PDF
- Multiple resume versions management

## License

This project is open source and available for personal and commercial use.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on the repository.
