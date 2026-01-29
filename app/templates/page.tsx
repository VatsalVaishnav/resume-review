import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const templates = [
    {
        id: "modern",
        name: "Modern Professional",
        description: "A sleek, two-column layout perfect for tech and creative roles.",
        color: "bg-blue-600",
    },
    {
        id: "classic",
        name: "Classic Elegant",
        description: "Traditional layout suitable for corporate and academic positions.",
        color: "bg-slate-800",
    },
    {
        id: "minimal",
        name: "Clean Minimalist",
        description: "Simple and distraction-free design that focuses on content.",
        color: "bg-gray-900",
    },
];

export default function TemplatesPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-600 mb-8 hover:text-blue-600 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
                <p className="text-xl text-gray-600 mb-12">Choose a professional template to get started.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
                            <div className={`h-48 ${template.color} flex items-center justify-center p-6`}>
                                <span className="text-white text-2xl font-bold opacity-90">{template.name}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                                <p className="text-gray-600 mb-6 flex-1">{template.description}</p>
                                <Link
                                    href={`/templates/${template.id}`}
                                    className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                >
                                    View Template
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
