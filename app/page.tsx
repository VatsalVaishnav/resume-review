"use client";

import Link from "next/link";
import { Upload, CheckCircle, Zap, Target, Shield, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-600" />
              ResumeAI
            </span>
          </div>
          <Link
            href="/upload"
            className={`px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              AI-Powered Resume Analyzer
            </h1>
          </div>
          <p className={`text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            Get instant, intelligent feedback on your resume. Optimize for ATS systems, 
            improve keyword relevance, and increase your chances of landing interviews.
          </p>
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
            <Link
              href="/upload"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 font-semibold"
            >
              <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Upload Your Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">ATS Optimization</h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure your resume passes Applicant Tracking Systems with optimized formatting and structure.
            </p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200" style={{ transitionDelay: '0.1s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">Keyword Analysis</h3>
            <p className="text-gray-600 leading-relaxed">
              Identify missing keywords and optimize your resume for specific job descriptions.
            </p>
          </div>
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200" style={{ transitionDelay: '0.2s' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">Smart Suggestions</h3>
            <p className="text-gray-600 leading-relaxed">
              Receive actionable recommendations to improve your resume's impact and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 bg-white/50 backdrop-blur-sm relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Upload Your Resume</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Upload your resume in PDF or DOCX format. Our system supports all standard resume formats.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">AI Analysis</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our advanced AI analyzes your resume for ATS compatibility, keyword optimization, 
                  formatting, and overall structure.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">Get Your Report</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Receive a comprehensive score and detailed feedback with actionable suggestions 
                  to improve your resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Why Choose ResumeAI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">Instant Feedback</h3>
              <p className="text-gray-600 leading-relaxed">Get comprehensive analysis in seconds, not days.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">ATS-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Optimize your resume to pass automated screening systems.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">Keyword Optimization</h3>
              <p className="text-gray-600 leading-relaxed">Identify and add missing keywords relevant to your target roles.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-pink-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">Actionable Insights</h3>
              <p className="text-gray-600 leading-relaxed">Receive specific, actionable recommendations to improve your resume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-block mb-6 animate-float">
              <TrendingUp className="w-20 h-20 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Improve Your Resume?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
              Join thousands of job seekers who have optimized their resumes with AI-powered insights.
            </p>
            <Link
              href="/upload"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-2xl font-semibold"
            >
              <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 py-20 md:py-28 bg-white/50 backdrop-blur-sm relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Upload Your Resume</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Upload your resume in PDF or DOCX format. Our system supports all standard resume formats.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">AI Analysis</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our advanced AI analyzes your resume for ATS compatibility, keyword optimization, 
                  formatting, and overall structure.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group hover:bg-white/50 p-6 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">Get Your Report</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Receive a comprehensive score and detailed feedback with actionable suggestions 
                  to improve your resume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Why Choose ResumeAI?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">Instant Feedback</h3>
              <p className="text-gray-600 leading-relaxed">Get comprehensive analysis in seconds, not days.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">ATS-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">Optimize your resume to pass automated screening systems.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors">Keyword Optimization</h3>
              <p className="text-gray-600 leading-relaxed">Identify and add missing keywords relevant to your target roles.</p>
            </div>
          </div>
          <div className="group flex gap-5 items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-7 h-7 text-pink-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors">Actionable Insights</h3>
              <p className="text-gray-600 leading-relaxed">Receive specific, actionable recommendations to improve your resume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-block mb-6 animate-float">
              <TrendingUp className="w-20 h-20 mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Improve Your Resume?</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
              Join thousands of job seekers who have optimized their resumes with AI-powered insights.
            </p>
            <Link
              href="/upload"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-2xl font-semibold"
            >
              <Upload className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-gray-200 relative z-10 bg-white/50 backdrop-blur-sm">
        <div className="text-center text-gray-600">
          <p className="mb-2 text-lg">© 2026 ResumeAI. All rights reserved.</p>
          <p className="text-sm opacity-75">Powered by Groq AI</p>
        </div>
      </footer>
    </div>
  );
}
