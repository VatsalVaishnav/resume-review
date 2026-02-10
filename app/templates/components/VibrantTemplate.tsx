import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function VibrantTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 drop-shadow-sm">{data.fullName}</h1>
                        <p className="text-indigo-100 text-xl font-medium tracking-wide uppercase opacity-90">{data.title}</p>
                    </div>
                </div>

                {/* Contact Info Bar */}
                <div className="mt-8 flex flex-wrap gap-4 md:gap-8 text-sm md:text-base font-medium text-indigo-50 border-t border-indigo-400/30 pt-6">
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail size={18} />
                        <span>{data.email}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={18} />
                        <span>{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors">
                        <MapPin size={18} />
                        <span>{data.location}</span>
                    </div>
                    {data.website && (
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            <Globe size={18} />
                            <span>{data.website}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 max-w-7xl mx-auto">
                {/* Main Column */}
                <div className="md:col-span-8 space-y-10">
                    {/* Summary */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border border-indigo-50">
                        <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-3">
                            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                            Summary
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            {data.summary}
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border border-indigo-50">
                        <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                            Experience
                        </h2>
                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="relative pl-8 border-l-2 border-indigo-100 last:border-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-500"></div>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                        <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                                        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full whitespace-nowrap mt-1 md:mt-0">
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    </div>
                                    <h4 className="text-lg text-slate-600 font-medium mb-3">{exp.company}</h4>
                                    <ul className="space-y-2">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="text-slate-600 flex items-start gap-2 text-sm leading-relaxed">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-300 flex-shrink-0"></span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="md:col-span-4 space-y-8">
                    {/* Skills */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border border-purple-50 h-fit">
                        <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                            <span className="w-6 h-1 bg-purple-500 rounded-full"></span>
                            Skills
                        </h2>
                        <div className="space-y-6">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h3 className="text-sm font-bold text-purple-700 uppercase tracking-wider mb-3">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1.5 rounded-md border border-purple-100 hover:bg-purple-100 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="bg-white p-6 rounded-xl shadow-sm border border-purple-50">
                        <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                            <span className="w-6 h-1 bg-purple-500 rounded-full"></span>
                            Education
                        </h2>
                        <div className="space-y-6">
                            {data.education.map((edu, index) => (
                                <div key={index} className="group">
                                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-purple-700 transition-colors">{edu.school}</h3>
                                    <p className="text-purple-600 font-medium text-sm mt-1">{edu.degree}</p>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-slate-400 font-medium uppercase tracking-wide">
                                        <span>{edu.startDate}</span>
                                        <span className="w-3 h-[1px] bg-slate-300"></span>
                                        <span>{edu.endDate}</span>
                                    </div>
                                    {edu.description && (
                                        <p className="text-slate-500 text-sm mt-2 leading-relaxed italic border-l-2 border-purple-100 pl-3">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
