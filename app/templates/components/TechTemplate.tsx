import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe, Terminal, Code, Cpu } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function TechTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-slate-900 text-slate-300 font-mono min-h-screen selection:bg-green-500 selection:text-slate-900">
            {/* Header / Terminal Top Bar */}
            <div className="bg-slate-800 p-2 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-slate-500 font-sans">user@resume: ~</div>
            </div>

            <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-12">
                {/* Header Section */}
                <header className="border-b border-slate-700 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                                <span className="text-green-600 mr-2">$</span>
                                {data.fullName}
                            </h1>
                            <p className="text-xl text-slate-400 font-medium pl-8">{data.title}</p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 text-sm text-slate-400">
                            <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                                <Mail size={14} />
                                <span>{data.email}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                                <Phone size={14} />
                                <span>{data.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                                <MapPin size={14} />
                                <span>{data.location}</span>
                            </div>
                            {data.website && (
                                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                                    <Globe size={14} />
                                    <span>{data.website}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Column */}
                    <aside className="md:col-span-4 space-y-10">
                        {/* Skills Section */}
                        <section>
                            <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
                                <Cpu size={18} />
                                <span>./skills</span>
                            </h3>
                            <div className="space-y-6">
                                {data.skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <p className="text-slate-200 font-bold text-sm mb-2 border-l-2 border-green-500 pl-2">
                                            {skillGroup.category}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, i) => (
                                                <span key={i} className="text-xs bg-slate-800 text-green-300 px-2 py-1 rounded border border-slate-700">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section>
                            <h3 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
                                <Code size={18} />
                                <span>./education</span>
                            </h3>
                            <div className="space-y-6">
                                {data.education.map((edu, index) => (
                                    <div key={index} className="relative pl-4 border-l border-slate-700">
                                        <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                                        <h4 className="text-slate-200 font-bold">{edu.school}</h4>
                                        <div className="text-sm text-green-500 mb-1">{edu.degree}</div>
                                        <div className="text-xs text-slate-500 font-mono mb-2">
                                            [{edu.startDate} - {edu.endDate}]
                                        </div>
                                        {edu.description && <p className="text-sm text-slate-400">{edu.description}</p>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </aside>

                    {/* Right Column */}
                    <main className="md:col-span-8 space-y-10">
                        {/* Profile / Summary */}
                        <section>
                            <h3 className="text-green-400 font-bold text-lg mb-4 border-b border-slate-700 pb-2">
                                README.md
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                                {data.summary}
                            </p>
                        </section>

                        {/* Experience Section */}
                        <section>
                            <h3 className="text-green-400 font-bold text-lg mb-6 border-b border-slate-700 pb-2">
                                ./experience_log
                            </h3>
                            <div className="space-y-8">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className="group">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                            <h4 className="text-xl font-bold text-slate-200 group-hover:text-green-300 transition-colors">
                                                {exp.position}
                                            </h4>
                                            <div className="text-xs text-slate-500 font-mono">
                                                <span className="text-green-500">{exp.startDate}</span> &gt;&gt; <span className="text-green-500">{exp.endDate}</span>
                                            </div>
                                        </div>
                                        <div className="text-green-500 font-medium mb-3">@ {exp.company}</div>

                                        <ul className="space-y-2">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                                    <span className="text-green-500 mt-1.5 text-xs">➜</span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t border-slate-700 text-center text-xs text-slate-600 font-mono">
                    <p>Generated with ResumeReview_v1.0</p>
                </footer>
            </div>
        </div>
    );
}
