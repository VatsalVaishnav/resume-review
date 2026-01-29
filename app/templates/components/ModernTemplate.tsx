import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function ModernTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-gray-800 font-sans leading-relaxed">
            {/* Header */}
            <header className="bg-slate-900 text-white p-8">
                <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{data.fullName}</h1>
                <p className="text-xl text-blue-300 mb-6">{data.title}</p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-1">
                        <Mail size={16} />
                        <span>{data.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Phone size={16} />
                        <span>{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{data.location}</span>
                    </div>
                    {data.website && (
                        <div className="flex items-center gap-1">
                            <Globe size={16} />
                            <span>{data.website}</span>
                        </div>
                    )}
                </div>
            </header>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Summary</h2>
                        <p className="text-gray-600">{data.summary}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Experience</h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className="text-xl font-bold text-slate-700">{exp.position}</h3>
                                        <span className="text-sm text-gray-500 bg-slate-100 px-2 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                                    <ul className="list-disc list-outside ml-5 text-gray-600 space-y-1">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Education</h2>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-lg font-bold text-slate-700">{edu.school}</h3>
                                        <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
                                    </div>
                                    <p className="text-gray-600">{edu.degree}</p>
                                    {edu.description && <p className="text-gray-500 text-sm mt-1">{edu.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4">Skills</h2>
                        <div className="space-y-4">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h3 className="font-semibold text-slate-700 mb-2">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
