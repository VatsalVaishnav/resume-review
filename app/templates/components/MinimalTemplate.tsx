import { ResumeData } from '../types';

interface TemplateProps {
    data: ResumeData;
}

export default function MinimalTemplate({ data }: TemplateProps) {
    return (
        <div className="w-full bg-white text-gray-800 font-sans p-8 md:p-12">
            <div className="border-l-4 border-black pl-6 mb-12">
                <h1 className="text-4xl font-light mb-2">{data.fullName}</h1>
                <p className="text-xl text-gray-500 tracking-wide uppercase">{data.title}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Left Column (Contact & Skills) */}
                <div className="md:col-span-1 space-y-8">
                    <section>
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                            {data.website && <p>{data.website}</p>}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Skills</h3>
                        {data.skills.map((skillGroup, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-medium mb-1 text-sm text-gray-500">{skillGroup.category}</p>
                                <ul className="space-y-1 text-sm">
                                    {skillGroup.items.map((skill, i) => (
                                        <li key={i}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    <section>
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Education</h3>
                        <div className="space-y-4">
                            {data.education.map((edu, index) => (
                                <div key={index} className="text-sm">
                                    <p className="font-bold">{edu.school}</p>
                                    <p className="text-gray-500">{edu.degree}</p>
                                    <p className="text-gray-400 text-xs">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column (Experience & Summary) */}
                <div className="md:col-span-3 space-y-10">
                    <section>
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-4 text-gray-400">Profile</h3>
                        <p className="text-lg leading-relaxed">{data.summary}</p>
                    </section>

                    <section>
                        <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-400">Experience</h3>
                        <div className="space-y-8">
                            {data.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                        <h4 className="text-lg font-bold">{exp.position}</h4>
                                        <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <p className="text-md font-medium mb-3">{exp.company}</p>
                                    <p className="text-gray-600 space-y-1 text-sm leading-relaxed">
                                        {exp.description.join(' ')}
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
