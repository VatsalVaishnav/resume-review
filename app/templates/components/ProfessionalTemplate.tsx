import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function ProfessionalTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-gray-800 font-sans min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 text-white p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase">{data.fullName}</h1>
                        <p className="text-slate-300 text-xl font-medium tracking-wide">{data.title}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <Mail size={14} />
                            <span>{data.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={14} />
                            <span>{data.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{data.location}</span>
                        </div>
                        {data.website && (
                            <div className="flex items-center gap-2">
                                <Globe size={14} />
                                <span>{data.website}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12">
                {/* Main Content */}
                <div className="md:col-span-8 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-900 pb-2 mb-4">
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {data.summary}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-900 pb-2 mb-4">
                            Work Experience
                        </h2>
                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="group">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                        <h3 className="text-lg font-bold text-slate-800">{exp.position}</h3>
                                        <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    </div>
                                    <h4 className="text-slate-700 font-semibold mb-2">{exp.company}</h4>
                                    <ul className="list-disc list-outside ml-4 text-gray-700 text-sm space-y-1">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider border-b-2 border-slate-900 pb-2 mb-4">
                            Education
                        </h2>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                                        <h3 className="text-lg font-bold text-slate-800">{edu.school}</h3>
                                        <span className="text-sm text-slate-500 italic">
                                            {edu.startDate} - {edu.endDate}
                                        </span>
                                    </div>
                                    <p className="text-slate-700 font-medium">{edu.degree}</p>
                                    {edu.description && (
                                        <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-4 bg-slate-50 p-6 rounded-lg h-fit space-y-8 border border-slate-100">
                    <section>
                        <h2 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                            Skills
                        </h2>
                        <div className="space-y-4">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h3 className="text-sm font-bold text-slate-700 mb-2 uppercase">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="text-xs font-medium bg-white border border-slate-200 text-slate-700 px-2 py-1 rounded shadow-sm">
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
