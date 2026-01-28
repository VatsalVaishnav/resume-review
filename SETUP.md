# Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
cd resume-review
npm install
```

### 2. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 3. Configure Environment Variables

Create a `.env.local` file in the `resume-review` directory:

```env
GEMINI_API_KEY=your_api_key_here
```

**Important**: Never commit your `.env.local` file to version control. It's already in `.gitignore`.

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing the Application

1. **Navigate to Landing Page**: Open http://localhost:3000
2. **Upload a Resume**: 
   - Click "Upload Your Resume"
   - Select a PDF or DOCX file (max 5MB)
   - Click "Analyze Resume"
3. **View Results**: Wait for analysis (10-30 seconds) and review the results

## Troubleshooting

### "Gemini API key not configured" Error

- Ensure `.env.local` exists in the project root
- Verify `GEMINI_API_KEY` is set correctly
- Restart the development server after adding environment variables

### "Failed to parse PDF/DOCX" Error

- Ensure the file is not corrupted
- Check file format (must be PDF or DOCX)
- Verify file size is under 5MB

### Import Errors

- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and restart: `rm -rf .next && npm run dev`

### Port Already in Use

- Change the port: `npm run dev -- -p 3001`
- Or kill the process using port 3000

## Production Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Add `GEMINI_API_KEY` in Vercel environment variables
4. Deploy

### Environment Variables in Production

Make sure to set `GEMINI_API_KEY` in your hosting platform's environment variables section.

## Dependencies Overview

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **Tailwind CSS 4**: Utility-first CSS framework
- **@google/generative-ai**: Gemini AI SDK
- **pdf-parse**: PDF text extraction
- **mammoth**: DOCX text extraction
- **recharts**: Data visualization
- **lucide-react**: Icon library

## File Size Limits

- Maximum file size: **5MB**
- Supported formats: **PDF, DOCX, DOC**

## API Rate Limits

Be aware of Gemini API rate limits:
- Free tier: Limited requests per minute
- Paid tier: Higher limits available

Check [Google AI Studio](https://makersuite.google.com/app/apikey) for current limits.
