"use client";

import { use, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { sampleResumeData } from "../data";
import { ResumeData } from "../types";
import ModernTemplate from "../components/ModernTemplate";
import ClassicTemplate from "../components/ClassicTemplate";
import MinimalTemplate from "../components/MinimalTemplate";
import ResumeEditor from "../components/ResumeEditor";

export default function TemplateView({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [resumeData, setResumeData] = useState<ResumeData>(sampleResumeData);
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        const printContent = printRef.current;
        if (printContent) {
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContent.innerHTML;
            window.print();
            document.body.innerHTML = originalContents;
            window.location.reload(); // Reload to restore event listeners
        }
    };

    const renderTemplate = () => {
        switch (slug) {
            case "modern":
                return <ModernTemplate data={resumeData} />;
            case "classic":
                return <ClassicTemplate data={resumeData} />;
            case "minimal":
                return <MinimalTemplate data={resumeData} />;
            default:
                return <div className="p-8 text-center text-red-500">Template not found</div>;
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
            {/* Navbar for Preview */}
            <div className="bg-white shadow-sm p-4 sticky top-0 z-10 border-b border-gray-200">
                <div className="max-w-full mx-auto flex justify-between items-center px-4">
                    <Link href="/templates" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Templates
                    </Link>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            <Printer className="w-4 h-4" />
                            Print / Save as PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area - Split View */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel - Editor */}
                <div className="w-1/3 min-w-[350px] max-w-[450px] p-4 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                    <ResumeEditor data={resumeData} onChange={setResumeData} />
                </div>

                {/* Right Panel - Preview */}
                <div className="flex-1 overflow-y-auto p-8 flex justify-center bg-gray-100">
                    <div className="w-full max-w-[210mm] origin-top transform scale-[0.9] lg:scale-100 transition-transform duration-200">
                        <div className="bg-white shadow-2xl min-h-[297mm]" ref={printRef}>
                            {renderTemplate()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
