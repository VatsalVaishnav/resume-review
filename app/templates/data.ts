import { ResumeData } from './types';

export const sampleResumeData: ResumeData = {
    fullName: "Alex Morgan",
    title: "Senior Software Engineer",
    email: "alex.morgan@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "linkedin.com/in/alexmorgan",
    summary: "Results-oriented Senior Software Engineer with 8+ years of experience in full-stack development. Proven track record of delivering scalable web applications and leading engineering teams. Expert in React, Node.js, and cloud architecture.",
    education: [
        {
            school: "University of Technology",
            degree: "Master of Science in Computer Science",
            startDate: "2016",
            endDate: "2018",
            description: "Specialized in Artificial Intelligence and Distributed Systems"
        },
        {
            school: "State University",
            degree: "Bachelor of Science in Computer Engineering",
            startDate: "2012",
            endDate: "2016"
        }
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            position: "Senior Software Engineer",
            startDate: "2021",
            endDate: "Present",
            description: [
                "Led a team of 5 engineers to rebuild the core legacy application using Next.js and Microservices, improving performance by 40%.",
                "Implemented CI/CD pipelines reducing deployment time by 60%.",
                "Mentored junior developers and established code quality standards."
            ]
        },
        {
            company: "Innovative Startups Co.",
            position: "Full Stack Developer",
            startDate: "2018",
            endDate: "2021",
            description: [
                "Developed and launched 3 major B2B SaaS products serving 10k+ users.",
                "Integrated third-party APIs including Stripe, Twilio, and AWS services.",
                "Optimized database queries reducing latency by 30%."
            ]
        }
    ],
    skills: [
        {
            category: "Technical",
            items: ["JavaScript/TypeScript", "React", "Next.js", "Node.js", "Python", "AWS", "Docker"]
        },
        {
            category: "Soft Skills",
            items: ["Leadership", "Communication", "Problem Solving", "Agile Methodology"]
        }
    ]
};
