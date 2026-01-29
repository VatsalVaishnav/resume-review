"use client";

import { use, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { sampleResumeData } from "../data";
import ModernTemplate from "../components/ModernTemplate";
import ClassicTemplate from "../components/ClassicTemplate";
import MinimalTemplate from "../components/MinimalTemplate";

export default function TemplateView({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
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
                return <ModernTemplate data={sampleResumeData} />;
            case "classic":
                return <ClassicTemplate data={sampleResumeData} />;
            case "minimal":
                return <MinimalTemplate data={sampleResumeData} />;
            default:
                return <div className="p-8 text-center text-red-500">Template not found</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar for Preview */}
            <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link href="/templates" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Templates
                    </Link>
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Printer className="w-4 h-4" />
                            Print / Save as PDF
                        </button>
                    </div>
                </div>
            </div>

            {/* Template Viewport */}
            <div className="p-8 overflow-auto">
                <div className="max-w-[210mm] mx-auto bg-white shadow-2xl min-h-[297mm]" ref={printRef}>
                    {renderTemplate()}
                </div>
            </div>
        </div>
    );
}
