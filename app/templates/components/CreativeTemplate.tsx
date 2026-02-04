import { ResumeData } from '../types';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export default function CreativeTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-gray-800 font-sans grid grid-cols-1 md:grid-cols-12 min-h-screen">
            {/* Left Column (Sidebar) */}
            <div className="md:col-span-4 bg-teal-700 text-white p-8 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold leading-tight">{data.fullName}</h1>
                    <p className="text-teal-200 text-lg font-medium">{data.title}</p>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                        <Mail size={16} className="text-teal-300" />
                        <span>{data.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-teal-300" />
                        <span>{data.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-teal-300" />
                        <span>{data.location}</span>
                    </div>
                    {data.website && (
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-teal-300" />
                            <span>{data.website}</span>
                        </div>
                    )}
                </div>

                <section>
                    <h3 className="text-teal-200 font-bold uppercase tracking-widest text-sm mb-4 border-b border-teal-600 pb-2">Skills</h3>
                    {data.skills.map((skillGroup, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold mb-2 text-white">{skillGroup.category}</p>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span key={i} className="bg-teal-800 bg-opacity-50 px-2 py-1 rounded text-xs text-white border border-teal-600">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            {/* Right Column (Main Content) */}
            <div className="md:col-span-8 p-12 bg-white space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 inline-block pb-1 mb-6">Profile</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{data.summary}</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 inline-block pb-1 mb-6">Experience</h2>
                    <div className="space-y-8">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="relative border-l-2 border-gray-200 pl-6 pb-2">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-500 border-4 border-white"></div>
                                <div className="flex flex-col mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{exp.position}</h3>
                                    <div className="flex justify-between items-center text-sm mt-1">
                                        <span className="text-teal-600 font-semibold">{exp.company}</span>
                                        <span className="text-gray-500">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                </div>
                                <ul className="list-disc list-outside ml-4 text-gray-600 space-y-1 mt-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-teal-500 inline-block pb-1 mb-6">Education</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {data.education.map((edu, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h3 className="font-bold text-gray-800 text-lg">{edu.school}</h3>
                                <div className="flex justify-between text-sm mt-1 mb-2">
                                    <span className="text-teal-600">{edu.degree}</span>
                                    <span className="text-gray-500">{edu.startDate} - {edu.endDate}</span>
                                </div>
                                {edu.description && <p className="text-gray-600 text-sm">{edu.description}</p>}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
