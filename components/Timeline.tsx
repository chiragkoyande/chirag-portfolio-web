import React from 'react';
import GlitchText from './GlitchText';
import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';

interface TimelineItem {
    id: string;
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: 'education' | 'project' | 'certification' | 'milestone';
}

const timelineData: TimelineItem[] = [
    {
        id: '1',
        year: '2022',
        title: 'Started IT Engineering',
        subtitle: 'Bharati Vidyapeeth, Pune',
        description: 'Began my journey in Information Technology with a focus on secure software development.',
        type: 'education',
    },
    {
        id: '2',
        year: '2023',
        title: 'Linux Unhatched Certification',
        subtitle: 'Cisco Networking Academy',
        description: 'Completed foundational Linux administration and command-line proficiency.',
        type: 'certification',
    },
    {
        id: '3',
        year: '2023',
        title: 'Ethical Hacking & Pentesting',
        subtitle: 'Udemy Professional Course',
        description: 'Deep dive into penetration testing methodologies and security assessment.',
        type: 'certification',
    },
    {
        id: '4',
        year: '2024',
        title: 'Built LinkSniff',
        subtitle: 'Security Tool',
        description: 'Developed a forensic tool to detect phishing links in PDFs with heuristic risk scoring.',
        type: 'project',
    },
    {
        id: '5',
        year: '2024',
        title: 'Launched Opportune',
        subtitle: 'Full-Stack Platform',
        description: 'Created a real-time aggregator for hackathons and internships with 100+ daily listings.',
        type: 'project',
    },
    {
        id: '6',
        year: '2025',
        title: 'ISC2 CC Certification',
        subtitle: 'In Progress',
        description: 'Working towards Certified in Cybersecurity credential from ISC2.',
        type: 'certification',
    },
];

const typeIcons = {
    education: GraduationCap,
    project: Rocket,
    certification: Award,
    milestone: Briefcase,
};

const typeColors = {
    education: 'border-blue-500 bg-blue-500/10 text-blue-400',
    project: 'border-green-500 bg-green-500/10 text-green-400',
    certification: 'border-purple-500 bg-purple-500/10 text-purple-400',
    milestone: 'border-yellow-500 bg-yellow-500/10 text-yellow-400',
};

const Timeline: React.FC = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <GlitchText
                        text="JOURNEY_LOG"
                        as="h2"
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
                    />
                    <p className="text-gray-400 font-mono text-sm">
                        :: MILESTONES & ACHIEVEMENTS ::
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-purple-500 to-green-500 opacity-30" />

                    <div className="space-y-8">
                        {timelineData.map((item, index) => {
                            const Icon = typeIcons[item.type];
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={item.id}
                                    className={`relative flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`inline-block p-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg hover:border-green-500/30 transition-all duration-300 group`}>
                                            <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                                                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                                                    {item.year}
                                                </span>
                                                <span className={`text-xs font-mono px-2 py-0.5 rounded border ${typeColors[item.type]}`}>
                                                    {item.type.toUpperCase()}
                                                </span>
                                            </div>

                                            <h3 className="font-display font-bold text-white text-lg group-hover:text-green-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-mono text-gray-400 mb-2">
                                                {item.subtitle}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-green-500/50 bg-black flex items-center justify-center z-10">
                                        <Icon size={14} className="text-green-400" />
                                    </div>

                                    {/* Spacer for opposite side on desktop */}
                                    <div className="hidden md:block flex-1" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
