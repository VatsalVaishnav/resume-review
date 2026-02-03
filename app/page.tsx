"use client";

import Link from "next/link";
import { Upload, CheckCircle, Target, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">R</div>
            <span className="text-xl font-bold tracking-tight text-gray-900">ResumeAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/templates" className="hover:text-blue-600 transition-colors">Resume Templates</Link>
            <Link href="/examples" className="hover:text-blue-600 transition-colors">Resume Examples</Link>
            <Link href="/builder" className="hover:text-blue-600 transition-colors">Resume Builder</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">Log In</Link>
            <Link
              href="/upload"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Check My Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center max-w-5xl">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-4 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold tracking-wide uppercase">
            Free Resume Checker
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
            Is your resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">good enough?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A free and fast AI resume checker doing 16 crucial checks to ensure your resume is ready to perform and get you interview callbacks.
          </p>
        </div>

        {/* Upload Box / Drop Zone Look */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/upload" className="block group">
            <div className="border-3 border-dashed border-gray-200 rounded-3xl bg-gray-50 p-12 hover:border-blue-400 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Upload className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10">Drop your resume here</h3>
              <p className="text-gray-500 relative z-10">or choose a file. PDF & DOCX only. Max 2MB.</p>
              <div className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 group-hover:shadow-blue-300 group-hover:-translate-y-1 transition-all relative z-10">
                Upload Resume
              </div>
            </div>
          </Link>
          <p className="mt-6 text-sm text-gray-400">
            By uploading you agree to our <span className="underline decoration-dotted cursor-pointer hover:text-gray-600">Terms of Service</span> and <span className="underline decoration-dotted cursor-pointer hover:text-gray-600">Privacy Policy</span>.
          </p>
        </div>
      </section>

      {/* Trust Badges / Social Proof */}
      <div className="border-y border-gray-100 bg-gray-50/50 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text placeholders for logos as per instruction to use simple assets */}
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2">Google</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2">Spotify</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2">Amazon</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2">Tesla</div>
            <div className="text-xl font-bold text-gray-400 flex items-center gap-2">Microsoft</div>
          </div>
        </div>
      </div>

      {/* Two Tier System Section */}
      <section className="py-24 bg-white container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ResumeAI's Checker forms its ATS score with a two-tier system
          </h2>
          <p className="text-gray-600 text-lg">
            We analyze both how well machines can read your resume and how well humans can understand your value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ATS Parse Rate</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The proportion of content we can interpret. If we can't read it, the ATS can't either. We check file formats, fonts, and structure to ensure maximum deliverability.
            </p>
            <ul className="space-y-3">
              {['File Format Check', 'Text Extractability', 'Section Detection'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Quality</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              What our checker identifies. We look for the qualitative aspects that hiring managers care about: impact, clarity, and relevance.
            </p>
            <ul className="space-y-3">
              {['Keyword Optimization', 'Impact Quantification', 'Active Voice Usage'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-600/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our AI-powered resume checker goes beyond typos and punctuation
            </h2>
            <p className="text-gray-300 text-lg">
              We verify 16 crucial data points across 5 distinct categories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Column 1 */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-blue-400 border-b border-gray-800 pb-4">Content</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> ATS parse rate</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Repetition</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Spelling & grammar</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Quantifying impact</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-purple-400 border-b border-gray-800 pb-4">Format</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> File format & size</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Resume length</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Bullet points</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-pink-400 border-b border-gray-800 pb-4">Skills</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Hard skills</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Soft skills</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Skill matching</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-yellow-400 border-b border-gray-800 pb-4">Sections</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Contact info</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Essential sections</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Personal summary</li>
              </ul>
            </div>
            {/* Column 5 */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-red-400 border-b border-gray-800 pb-4">Style</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Design consistency</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Active voice</li>
                <li className="flex items-start gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Buzzword removed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section 1 */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 w-full">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-x-8 top-12 bottom-0 bg-white rounded-t-xl shadow-2xl p-6 border border-gray-100">
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-32 bg-blue-50/50 rounded-xl border border-blue-100 p-4">
                      <div className="flex gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-blue-700">AI Suggestion</span>
                      </div>
                      <div className="h-2 bg-blue-200 rounded w-full mb-2"></div>
                      <div className="h-2 bg-blue-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Rewrite your resume with AI</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get your resume rewritten by the world’s best AI engine in combination with tailored prompts and a fine-tuned model based on your resume and the job ad you’re applying for.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Receive content suggestions based on current sections.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Generate a resume summary personalized to you.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Omit buzzwords, filler words, and irrelevant content.</p>
                </li>
              </ul>
              <Link href="/upload" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all hover:text-blue-700">
                Try AI Rewriter <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section 2 (Reverse Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="flex-1 w-full">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-sm relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="font-bold text-gray-900">ATS Compatibility</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">High</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Keywords</span>
                        <span className="font-bold text-gray-900">92%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[92%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Formatting</span>
                        <span className="font-bold text-gray-900">100%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Job Match</span>
                        <span className="font-bold text-gray-900">85%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[85%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Get an ATS understanding check</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We’ve reverse-engineered the most popular applicant tracking systems currently used and we look for signs of ATS compatibility to ensure your resume gets seen.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Check for skills and keywords connected to the job.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Validate readable contact information and file type.</p>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm font-bold shrink-0">✓</div>
                  <p className="text-gray-700">Get instant suggestions on how to improve.</p>
                </li>
              </ul>
              <Link href="/upload" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all hover:text-purple-700">
                Check ATS Score <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get your resume score now!</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12">
            Upload your resume and you’ll get a personalized email with an actionable tasklist.
          </p>
          <Link
            href="/upload"
            className="inline-block px-10 py-5 bg-white text-blue-700 text-xl font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all shadow-xl"
          >
            Upload Your Resume (PDF/DOCX)
          </Link>
          <p className="mt-8 italic opacity-80 max-w-2xl mx-auto">
            &quot;ResumeAI has changed my life: One week & four interviews later, I will be making 150% more doing the job I chose.&quot;
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
            <span className="text-2xl font-bold text-white">ResumeAI</span>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-12 text-sm text-left max-w-4xl mx-auto">
            <div>
              <h5 className="text-white font-bold mb-4">Product</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white">Resume Checker</Link></li>
                <li><Link href="#" className="hover:text-white">Resume Builder</Link></li>
                <li><Link href="#" className="hover:text-white">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Resources</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white">Resume Examples</Link></li>
                <li><Link href="#" className="hover:text-white">Cover Letter Examples</Link></li>
                <li><Link href="#" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Support</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Company</h5>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Affiliates</Link></li>
              </ul>
            </div>
          </div>
          <p>© 2026 ResumeAI. Powered by Groq AI.</p>
        </div>
      </footer>
    </div>
  );
}
