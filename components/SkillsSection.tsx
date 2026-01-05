import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';
import { Terminal, ChevronRight } from 'lucide-react';

interface SkillCategory {
    name: string;
    color: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: 'FRONTEND',
        color: 'text-green-400',
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
        name: 'BACKEND',
        color: 'text-purple-400',
        skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
    },
    {
        name: 'SECURITY',
        color: 'text-red-400',
        skills: ['Penetration Testing', 'SIEM', 'Log Analysis', 'Network Security', 'Forensics'],
    },
    {
        name: 'TOOLS',
        color: 'text-blue-400',
        skills: ['Git', 'GitHub', 'Linux', 'Bash', 'Docker', 'VS Code'],
    },
];

const TypingSkills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [displayedSkills, setDisplayedSkills] = useState<string[]>([]);
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        // Reset when category changes
        setDisplayedSkills([]);
        setCurrentSkillIndex(0);
        setCurrentCharIndex(0);
        setIsTyping(true);
    }, [activeCategory]);

    useEffect(() => {
        if (!isTyping) return;

        const category = skillCategories[activeCategory];
        const skills = category.skills;

        if (currentSkillIndex >= skills.length) {
            setIsTyping(false);
            return;
        }

        const currentSkill = skills[currentSkillIndex];

        if (currentCharIndex < currentSkill.length) {
            // Type next character
            const timer = setTimeout(() => {
                setDisplayedSkills(prev => {
                    const newSkills = [...prev];
                    if (newSkills[currentSkillIndex]) {
                        newSkills[currentSkillIndex] = currentSkill.slice(0, currentCharIndex + 1);
                    } else {
                        newSkills[currentSkillIndex] = currentSkill.slice(0, currentCharIndex + 1);
                    }
                    return newSkills;
                });
                setCurrentCharIndex(prev => prev + 1);
            }, 50 + Math.random() * 30); // Randomized typing speed for realism

            return () => clearTimeout(timer);
        } else {
            // Move to next skill
            const timer = setTimeout(() => {
                setCurrentSkillIndex(prev => prev + 1);
                setCurrentCharIndex(0);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [activeCategory, currentSkillIndex, currentCharIndex, isTyping]);

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Terminal className="text-green-400" size={28} />
                        <GlitchText
                            text="SKILL_SET"
                            as="h2"
                            className="text-3xl md:text-4xl font-display font-bold text-white"
                        />
                    </div>
                    <p className="text-gray-500 font-mono text-sm">
                        :: SELECT CATEGORY TO INITIALIZE ::
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {skillCategories.map((category, index) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(index)}
                            className={`px-4 py-2 font-mono text-xs tracking-wider border transition-all duration-300 ${activeCategory === index
                                    ? `${category.color} bg-white/10 border-current shadow-[0_0_20px_rgba(255,255,255,0.1)]`
                                    : 'text-gray-500 border-gray-700 hover:border-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Terminal Display */}
                <div className="bg-black/80 border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-green-500/20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <span className="ml-4 text-xs font-mono text-gray-500">
                            skills --category {skillCategories[activeCategory].name.toLowerCase()}
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 min-h-[280px] font-mono">
                        {/* Command prompt */}
                        <div className="flex items-center gap-2 text-sm mb-4">
                            <span className="text-green-400">chirag@portfolio</span>
                            <span className="text-gray-500">:</span>
                            <span className="text-blue-400">~</span>
                            <span className="text-gray-500">$</span>
                            <span className="text-white ml-2">load {skillCategories[activeCategory].name.toLowerCase()}_skills</span>
                        </div>

                        {/* Loading indicator */}
                        <div className="text-gray-500 text-xs mb-4">
                            [INFO] Loading {skillCategories[activeCategory].name} module...
                        </div>

                        {/* Skills Output */}
                        <div className="space-y-2">
                            {skillCategories[activeCategory].skills.map((skill, index) => (
                                <div
                                    key={skill}
                                    className={`flex items-center gap-3 transition-all duration-300 ${index <= currentSkillIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <ChevronRight
                                        size={14}
                                        className={skillCategories[activeCategory].color}
                                    />
                                    <span className={`${skillCategories[activeCategory].color} text-sm`}>
                                        {displayedSkills[index] || ''}
                                        {index === currentSkillIndex && isTyping && (
                                            <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Completion message */}
                        {!isTyping && (
                            <div className="mt-6 text-xs text-gray-500 animate-fadeSlideIn">
                                <span className="text-green-400">[SUCCESS]</span> {skillCategories[activeCategory].skills.length} skills loaded.
                            </div>
                        )}

                        {/* Blinking cursor at bottom */}
                        {!isTyping && (
                            <div className="flex items-center gap-2 text-sm mt-4">
                                <span className="text-green-400">chirag@portfolio</span>
                                <span className="text-gray-500">:</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-gray-500">$</span>
                                <span className="inline-block w-2 h-4 bg-green-400 ml-2 animate-pulse"></span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Hint */}
                <p className="text-center text-xs font-mono text-gray-600 mt-6">
                    Click a category to see skills load in real-time
                </p>
            </div>
        </section>
    );
};

export default TypingSkills;
