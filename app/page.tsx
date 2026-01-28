import Link from "next/link";
import { Upload, CheckCircle, Zap, Target, Shield, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ResumeAI
          </div>
          <Link
            href="/upload"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-Powered Resume Analyzer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Get instant, intelligent feedback on your resume. Optimize for ATS systems, 
            improve keyword relevance, and increase your chances of landing interviews.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            <Upload className="w-5 h-5" />
            Upload Your Resume
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">ATS Optimization</h3>
            <p className="text-gray-600">
              Ensure your resume passes Applicant Tracking Systems with optimized formatting and structure.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Keyword Analysis</h3>
            <p className="text-gray-600">
              Identify missing keywords and optimize your resume for specific job descriptions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Suggestions</h3>
            <p className="text-gray-600">
              Receive actionable recommendations to improve your resume's impact and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Upload Your Resume</h3>
                <p className="text-gray-600 text-lg">
                  Upload your resume in PDF or DOCX format. Our system supports all standard resume formats.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">AI Analysis</h3>
                <p className="text-gray-600 text-lg">
                  Our advanced AI analyzes your resume for ATS compatibility, keyword optimization, 
                  formatting, and overall structure.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Get Your Report</h3>
                <p className="text-gray-600 text-lg">
                  Receive a comprehensive score and detailed feedback with actionable suggestions 
                  to improve your resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose ResumeAI?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Feedback</h3>
              <p className="text-gray-600">Get comprehensive analysis in seconds, not days.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">ATS-Friendly</h3>
              <p className="text-gray-600">Optimize your resume to pass automated screening systems.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Keyword Optimization</h3>
              <p className="text-gray-600">Identify and add missing keywords relevant to your target roles.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Actionable Insights</h3>
              <p className="text-gray-600">Receive specific, actionable recommendations to improve your resume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Ready to Improve Your Resume?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who have optimized their resumes with AI-powered insights.
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            <Upload className="w-5 h-5" />
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="mb-2">© 2026 ResumeAI. All rights reserved.</p>
          <p className="text-sm">Powered by Google Gemini AI</p>
        </div>
      </footer>
    </div>
  );
}
