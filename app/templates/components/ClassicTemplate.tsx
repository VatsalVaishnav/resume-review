import { ResumeData } from '../types';

interface TemplateProps {
    data: ResumeData;
}

export default function ClassicTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-gray-900 font-serif p-8 md:p-12 max-w-[210mm] mx-auto min-h-[297mm]">
            {/* Header */}
            <header className="text-center border-b-2 border-gray-300 pb-6 mb-8">
                <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">{data.fullName}</h1>
                <div className="text-sm text-gray-600 flex justify-center gap-4 flex-wrap">
                    <span>{data.location}</span>
                    <span>|</span>
                    <span>{data.phone}</span>
                    <span>|</span>
                    <span>{data.email}</span>
                    {data.website && (
                        <>
                            <span>|</span>
                            <span>{data.website}</span>
                        </>
                    )}
                </div>
            </header>

            {/* Summary */}
            <section className="mb-6">
                <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-3">Professional Summary</h2>
                <p className="text-justify leading-relaxed">{data.summary}</p>
            </section>

            {/* Experience */}
            <section className="mb-6">
                <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4">Experience</h2>
                <div className="space-y-5">
                    {data.experience.map((exp, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-end mb-1">
                                <h3 className="font-bold text-lg">{exp.company}</h3>
                                <span className="text-sm italic">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <p className="font-semibold italic mb-2">{exp.position}</p>
                            <ul className="list-disc ml-5 space-y-1">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4">Education</h2>
                <div className="space-y-3">
                    {data.education.map((edu, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold">{edu.school}</h3>
                                <span className="text-sm italic">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <p>{edu.degree}</p>
                            {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section>
                <h2 className="text-xl font-bold uppercase border-b border-gray-400 mb-4">Skills</h2>
                {data.skills.map((skillGroup, index) => (
                    <div key={index} className="mb-2">
                        <span className="font-bold mr-2">{skillGroup.category}:</span>
                        <span>{skillGroup.items.join(', ')}</span>
                    </div>
                ))}
            </section>
        </div>
    );
}
