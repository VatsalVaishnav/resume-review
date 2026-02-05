import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function ElegantTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-[#fdfbf7] text-[#2c2c2c] font-serif min-h-screen p-8 md:p-16 relative">
            {/* Border Ornament */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border double border-4 border-[#d4af37] pointer-events-none opacity-30"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <header className="text-center mb-12 border-b-2 border-[#d4af37] pb-8">
                    <h1 className="text-5xl font-normal tracking-wide mb-3 text-black">{data.fullName}</h1>
                    <p className="text-xl text-[#666] italic mb-6">{data.title}</p>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-[#444] font-sans">
                        <div className="flex items-center gap-1">
                            <Mail size={12} className="text-[#d4af37]" />
                            <span>{data.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone size={12} className="text-[#d4af37]" />
                            <span>{data.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={12} className="text-[#d4af37]" />
                            <span>{data.location}</span>
                        </div>
                        {data.website && (
                            <div className="flex items-center gap-1">
                                <Globe size={12} className="text-[#d4af37]" />
                                <span>{data.website}</span>
                            </div>
                        )}
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-12">

                    {/* Summary */}
                    <section className="text-center max-w-2xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-6 flex items-center justify-center gap-4">
                            <span className="h-px w-8 bg-[#d4af37]"></span>
                            Profile
                            <span className="h-px w-8 bg-[#d4af37]"></span>
                        </h2>
                        <p className="leading-loose text-[#444] text-justify">
                            {data.summary}
                        </p>
                    </section>

                    {/* Experience */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-8 text-center bg-[#fdfbf7] relative z-10">
                            Experience
                        </h2>

                        <div className="space-y-10 border-l border-[#e5e5e5] ml-4 pl-8 md:ml-0 md:pl-0 md:border-none">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="grid md:grid-cols-12 gap-4">
                                    <div className="md:col-span-3 text-right">
                                        <div className="font-sans text-sm text-[#888] font-medium tracking-wide">
                                            {exp.startDate} — {exp.endDate}
                                        </div>
                                    </div>
                                    <div className="md:col-span-9">
                                        <h3 className="text-xl font-bold text-black">{exp.position}</h3>
                                        <div className="text-[#d4af37] font-semibold italic mb-3">{exp.company}</div>
                                        <ul className="list-disc list-outside ml-4 text-[#555] space-y-2 leading-relaxed text-sm">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-8 text-center">
                            Education
                        </h2>
                        <div className="flex flex-col gap-6 items-center">
                            {data.education.map((edu, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-lg font-bold text-black">{edu.school}</h3>
                                    <p className="text-[#d4af37] italic">{edu.degree}</p>
                                    <p className="font-sans text-sm text-[#888] mt-1">{edu.startDate} — {edu.endDate}</p>
                                    {edu.description && <p className="text-sm text-[#555] mt-2 max-w-lg">{edu.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-8 text-center">
                            Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#d4af37] mb-3">{skillGroup.category}</h3>
                                    <p className="text-[#555] leading-relaxed">
                                        {skillGroup.items.join(' • ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
