import { ResumeData, Experience, Education, Skill } from '../types';
import { Plus, Trash, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface EditorProps {
    data: ResumeData;
    onChange: (data: ResumeData) => void;
}

export default function ResumeEditor({ data, onChange }: EditorProps) {
    const [expandedSection, setExpandedSection] = useState<string | null>('personal');

    const handleChange = (field: keyof ResumeData, value: string) => {
        onChange({ ...data, [field]: value });
    };

    const handleArrayChange = <T,>(
        section: keyof ResumeData,
        index: number,
        field: keyof T,
        value: string | string[]
    ) => {
        const newArray = [...(data[section] as T[])];
        newArray[index] = { ...newArray[index], [field]: value };
        onChange({ ...data, [section]: newArray });
    };

    const addItem = (section: 'experience' | 'education' | 'skills') => {
        const emptyItem =
            section === 'experience'
                ? { company: '', position: '', startDate: '', endDate: '', description: [''] }
                : section === 'education'
                    ? { school: '', degree: '', startDate: '', endDate: '', description: '' }
                    : { category: '', items: [''] };

        onChange({ ...data, [section]: [...data[section], emptyItem] });
    };

    const removeItem = (section: 'experience' | 'education' | 'skills', index: number) => {
        const newArray = [...data[section]];
        newArray.splice(index, 1);
        onChange({ ...data, [section]: newArray });
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-bold text-gray-800">Resume Editor</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Personal Info */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection('personal')}
                        className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <span className="font-medium text-gray-700">Personal Information</span>
                        {expandedSection === 'personal' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSection === 'personal' && (
                        <div className="p-4 space-y-3 bg-white">
                            <div>
                                <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Full Name</label>
                                <input
                                    type="text"
                                    value={data.fullName}
                                    onChange={(e) => handleChange('fullName', e.target.value)}
                                    className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                            <div>
                                <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Job Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => handleChange('title', e.target.value)}
                                    className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                    />
                                </div>
                                <div>
                                    <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Phone</label>
                                    <input
                                        type="text"
                                        value={data.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Location</label>
                                <input
                                    type="text"
                                    value={data.location}
                                    onChange={(e) => handleChange('location', e.target.value)}
                                    className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                            <div>
                                <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Website</label>
                                <input
                                    type="text"
                                    value={data.website || ''}
                                    onChange={(e) => handleChange('website', e.target.value)}
                                    className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                            <div>
                                <label className="text-block text-xs font-semibold uppercase tracking-wider mb-1">Summary</label>
                                <textarea
                                    value={data.summary}
                                    onChange={(e) => handleChange('summary', e.target.value)}
                                    rows={4}
                                    className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Experience */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection('experience')}
                        className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <span className="font-medium text-gray-700">Experience</span>
                        {expandedSection === 'experience' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSection === 'experience' && (
                        <div className="p-4 space-y-6 bg-white">
                            {data.experience.map((exp, index) => (
                                <div key={index} className="p-3 border border-gray-200 rounded-lg relative group">
                                    <button
                                        onClick={() => removeItem('experience', index)}
                                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash size={16} />
                                    </button>
                                    <div className="space-y-3">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Company Name"
                                                value={exp.company}
                                                onChange={(e) => handleArrayChange<Experience>('experience', index, 'company', e.target.value)}
                                                className="w-full font-medium text-black border-b border-transparent focus:border-blue-500 outline-none text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Position"
                                                value={exp.position}
                                                onChange={(e) => handleArrayChange<Experience>('experience', index, 'position', e.target.value)}
                                                className="w-full text-black border-b border-transparent focus:border-blue-500 outline-none text-sm"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Start Date"
                                                value={exp.startDate}
                                                onChange={(e) => handleArrayChange<Experience>('experience', index, 'startDate', e.target.value)}
                                                className="w-1/2 text-xs text-black border-b border-transparent focus:border-blue-500 outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="End Date"
                                                value={exp.endDate}
                                                onChange={(e) => handleArrayChange<Experience>('experience', index, 'endDate', e.target.value)}
                                                className="w-1/2 text-xs text-black border-b border-transparent focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="Description (one item per line or separator)"
                                                value={exp.description.join('\n')}
                                                onChange={(e) => handleArrayChange<Experience>('experience', index, 'description', e.target.value.split('\n'))}
                                                rows={3}
                                                className="w-full text-xs text-black p-2 border border-gray-200 rounded focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => addItem('experience')}
                                className="w-full py-2 flex items-center justify-center gap-2 text-blue-600 border border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                            >
                                <Plus size={16} /> Add Experience
                            </button>
                        </div>
                    )}
                </div>

                {/* Education */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection('education')}
                        className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <span className="font-medium text-gray-700">Education</span>
                        {expandedSection === 'education' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSection === 'education' && (
                        <div className="p-4 space-y-6 bg-white">
                            {data.education.map((edu, index) => (
                                <div key={index} className="p-3 border border-gray-200 rounded-lg relative group">
                                    <button
                                        onClick={() => removeItem('education', index)}
                                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash size={16} />
                                    </button>
                                    <div className="space-y-3">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="School"
                                                value={edu.school}
                                                onChange={(e) => handleArrayChange<Education>('education', index, 'school', e.target.value)}
                                                className="w-full font-medium text-black border-b border-transparent focus:border-blue-500 outline-none text-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Degree"
                                                value={edu.degree}
                                                onChange={(e) => handleArrayChange<Education>('education', index, 'degree', e.target.value)}
                                                className="w-full text-black border-b border-transparent focus:border-blue-500 outline-none text-sm"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Start Date"
                                                value={edu.startDate}
                                                onChange={(e) => handleArrayChange<Education>('education', index, 'startDate', e.target.value)}
                                                className="w-1/2 text-xs text-black border-b border-transparent focus:border-blue-500 outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="End Date"
                                                value={edu.endDate}
                                                onChange={(e) => handleArrayChange<Education>('education', index, 'endDate', e.target.value)}
                                                className="w-1/2 text-xs text-black border-b border-transparent focus:border-blue-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => addItem('education')}
                                className="w-full py-2 flex items-center justify-center gap-2 text-blue-600 border border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                            >
                                <Plus size={16} /> Add Education
                            </button>
                        </div>
                    )}
                </div>

                {/* Skills */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => toggleSection('skills')}
                        className="w-full flex justify-between items-center p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                        <span className="font-medium text-gray-700">Skills</span>
                        {expandedSection === 'skills' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expandedSection === 'skills' && (
                        <div className="p-4 space-y-6 bg-white">
                            {data.skills.map((skillGroup, index) => (
                                <div key={index} className="p-3 border border-gray-200 rounded-lg relative group">
                                    <button
                                        onClick={() => removeItem('skills', index)}
                                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash size={16} />
                                    </button>
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Category Name"
                                            value={skillGroup.category}
                                            onChange={(e) => handleArrayChange<Skill>('skills', index, 'category', e.target.value)}
                                            className="w-full font-medium text-black border-b border-transparent focus:border-blue-500 outline-none text-sm"
                                        />
                                        <textarea
                                            placeholder="Skills (comma separated)"
                                            value={skillGroup.items.join(', ')}
                                            onChange={(e) => handleArrayChange<Skill>('skills', index, 'items', e.target.value.split(',').map(s => s.trim()))}
                                            rows={2}
                                            className="w-full text-xs text-black p-2 border border-gray-200 rounded focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                </div>
                            ))}
                            <button
                                onClick={() => addItem('skills')}
                                className="w-full py-2 flex items-center justify-center gap-2 text-blue-600 border border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                            >
                                <Plus size={16} /> Add Skill Category
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
