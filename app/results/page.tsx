"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Target,
  FileText,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface AnalysisResult {
  id: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  missingKeywords: string[];
  atsScore: number;
  keywordScore: number;
  formattingScore: number;
  experienceScore: number;
  skillsScore: number;
  summary: string;
  fileName?: string;
  analyzedAt?: string;
}

const COLORS = {
  excellent: "#10b981",
  good: "#3b82f6",
  fair: "#f59e0b",
  poor: "#ef4444",
};

function getScoreColor(score: number): string {
  if (score >= 80) return COLORS.excellent;
  if (score >= 60) return COLORS.good;
  if (score >= 40) return COLORS.fair;
  return COLORS.poor;
}

function getScoreLabel(score: number): string {
  if (score >= 80) return "Excellent";
  if (score >= 60) return "Good";
  if (score >= 40) return "Fair";
  return "Needs Improvement";
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      setError("No analysis ID provided");
      setLoading(false);
      return;
    }

    fetch(`/api/analyze?id=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch analysis results");
        }
        return res.json();
      })
      .then((data) => {
        setAnalysis(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Failed to load analysis results");
        setLoading(false);
      });
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading your analysis...</p>
        </div>
      </div>
    );
  }

  if (error || !analysis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Error</h2>
          <p className="text-gray-600 mb-6">{error || "Analysis not found"}</p>
          <Link
            href="/upload"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload Another Resume
          </Link>
        </div>
      </div>
    );
  }

  const scoreData = [
    { name: "ATS Score", value: analysis.atsScore },
    { name: "Keyword Score", value: analysis.keywordScore },
    { name: "Formatting Score", value: analysis.formattingScore },
    { name: "Experience Score", value: analysis.experienceScore },
    { name: "Skills Score", value: analysis.skillsScore },
  ];

  const pieData = [
    { name: "Score", value: analysis.score },
    { name: "Remaining", value: 100 - analysis.score },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            ResumeAI
          </Link>
          <div className="flex gap-4">
            <Link
              href="/upload"
              className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Upload Another
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume Analysis Results
          </h1>
          {analysis.fileName && (
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              {analysis.fileName}
            </p>
          )}
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Overall Resume Score</h2>
              <p className="text-gray-600 mb-4">{analysis.summary}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`px-4 py-2 rounded-full text-white font-semibold ${getScoreColor(analysis.score)}`}
                >
                  {getScoreLabel(analysis.score)}
                </span>
              </div>
            </div>
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    <Cell fill={getScoreColor(analysis.score)} />
                    <Cell fill="#e5e7eb" />
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold" style={{ color: getScoreColor(analysis.score) }}>
                    {analysis.score}
                  </div>
                  <div className="text-sm text-gray-500">out of 100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { label: "ATS Friendliness", score: analysis.atsScore },
            { label: "Keyword Optimization", score: analysis.keywordScore },
            { label: "Formatting & Structure", score: analysis.formattingScore },
            { label: "Experience Clarity", score: analysis.experienceScore },
            { label: "Skills Relevance", score: analysis.skillsScore },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">{item.label}</h3>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Score</span>
                  <span className="font-semibold" style={{ color: getScoreColor(item.score) }}>
                    {item.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all"
                    style={{
                      width: `${item.score}%`,
                      backgroundColor: getScoreColor(item.score),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strengths */}
        {analysis.strengths.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">What's Good</h2>
            </div>
            <ul className="space-y-3">
              {analysis.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Weaknesses */}
        {analysis.weaknesses.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">What Needs Improvement</h2>
            </div>
            <ul className="space-y-3">
              {analysis.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Suggestions */}
        {analysis.suggestions.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-800">Suggested Changes</h2>
            </div>
            <ul className="space-y-3">
              {analysis.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Missing Keywords */}
        {analysis.missingKeywords.length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Missing Keywords</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Consider adding these keywords to improve your resume's visibility:
            </p>
            <div className="flex flex-wrap gap-2">
              {analysis.missingKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 mb-8">
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            Analyze Another Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
