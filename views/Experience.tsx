import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import ShatteredCard from '../components/ShatteredCard';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Code, Shield, Terminal, ChevronRight, Cpu, Zap, Clock, Target } from 'lucide-react';

const Experience: React.FC = () => {
    const [activeExp, setActiveExp] = useState<string>(EXPERIENCE_DATA[0]?.id || '');

    return (
        <div className="h-full w-full flex flex-col items-center pt-24 pb-64 px-4 overflow-y-auto">
            <div className="max-w-6xl w-full flex flex-col gap-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-purple-500/20 border border-green-500/30 flex items-center justify-center rotate-45">
                                <Briefcase className="text-green-400 -rotate-45" size={24} />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 animate-ping rounded-full" />
                        </div>
                        <div>
                            <GlitchText text="MISSION_LOG" as="h2" className="text-3xl font-display font-bold text-white" />
                            <p className="text-xs font-mono text-gray-500 mt-1">// EXPERIENCE_TIMELINE_v2.4</p>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="flex items-center gap-4 bg-black/50 border border-white/10 px-4 py-2">
                        <div className="flex items-center gap-2 text-xs font-mono">
                            <Code size={14} className="text-green-400" />
                            <span className="text-gray-400">BUILDER:</span>
                            <span className="text-green-400 font-bold">1</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <div className="flex items-center gap-2 text-xs font-mono">
                            <Shield size={14} className="text-purple-400" />
                            <span className="text-gray-400">BREAKER:</span>
                            <span className="text-purple-400 font-bold">1</span>
                        </div>
                    </div>
                </div>

                {/* Main Timeline Container */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-purple-500/50 to-transparent hidden md:block" />

                    {/* Experience Cards */}
                    <div className="flex flex-col gap-12">
                        {EXPERIENCE_DATA.map((exp, index) => {
                            const isBuilder = exp.type === 'BUILDER';
                            const isActive = activeExp === exp.id;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={exp.id}
                                    className={`relative flex flex-col md:flex-row items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                    onClick={() => setActiveExp(exp.id)}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20 hidden md:block">
                                        <div className={`relative w-16 h-16 flex items-center justify-center cursor-pointer transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'
                                            }`}>
                                            {/* Rotating Border */}
                                            <div className={`absolute inset-0 border-2 ${isBuilder ? 'border-green-500/50' : 'border-purple-500/50'
                                                } rotate-45 animate-[spin_8s_linear_infinite]`} />

                                            {/* Inner Diamond */}
                                            <div className={`absolute inset-2 ${isBuilder ? 'bg-green-900/30' : 'bg-purple-900/30'
                                                } rotate-45`} />

                                            {/* Icon */}
                                            <div className={`relative z-10 ${isBuilder ? 'text-green-400' : 'text-purple-400'
                                                }`}>
                                                {isBuilder ? <Code size={24} /> : <Shield size={24} />}
                                            </div>

                                            {/* Active Pulse */}
                                            {isActive && (
                                                <div className={`absolute inset-0 ${isBuilder ? 'bg-green-500/20' : 'bg-purple-500/20'
                                                    } rotate-45 animate-ping`} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                                        <ShatteredCard
                                            className={`cursor-pointer transition-all duration-500 ${isActive ? 'ring-1 ring-offset-4 ring-offset-black' : ''
                                                } ${isActive && isBuilder ? 'ring-green-500/50' : ''} ${isActive && !isBuilder ? 'ring-purple-500/50' : ''}`}
                                        >
                                            {/* Card Header */}
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`text-[10px] font-mono px-2 py-0.5 border ${isBuilder
                                                                ? 'border-green-500/50 text-green-400 bg-green-500/10'
                                                                : 'border-purple-500/50 text-purple-400 bg-purple-500/10'
                                                            }`}>
                                                            {exp.type}_MODE
                                                        </span>
                                                        <span className={`text-[10px] font-mono px-2 py-0.5 border ${exp.status === 'ACTIVE'
                                                                ? 'border-cyan-500/50 text-cyan-400'
                                                                : 'border-gray-500/50 text-gray-400'
                                                            }`}>
                                                            {exp.status}
                                                        </span>
                                                    </div>
                                                    <h3 className={`text-xl font-display font-bold ${isBuilder ? 'text-green-400' : 'text-purple-400'
                                                        }`}>
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sm font-mono text-gray-400 mt-1 flex items-center gap-2">
                                                        <Target size={12} />
                                                        {exp.company}
                                                    </p>
                                                </div>

                                                {/* Duration Badge */}
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                                        <Clock size={12} />
                                                        {exp.duration}
                                                    </div>
                                                    {/* Mobile Type Icon */}
                                                    <div className={`md:hidden mt-2 w-10 h-10 flex items-center justify-center border ${isBuilder ? 'border-green-500/30 bg-green-500/10' : 'border-purple-500/30 bg-purple-500/10'
                                                        }`}>
                                                        {isBuilder ? <Code size={18} className="text-green-400" /> : <Shield size={18} className="text-purple-400" />}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="space-y-2 mb-4">
                                                {exp.description.map((desc, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-sm font-mono text-gray-300">
                                                        <ChevronRight size={14} className={`mt-0.5 flex-shrink-0 ${isBuilder ? 'text-green-500' : 'text-purple-500'
                                                            }`} />
                                                        <span>{desc}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tools/Tech Stack */}
                                            <div className="pt-4 border-t border-white/10">
                                                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                                                    <Cpu size={12} />
                                                    <span>TOOLS_UTILIZED</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tools.map((tool, i) => (
                                                        <span
                                                            key={i}
                                                            className={`text-[10px] font-mono px-2 py-1 border transition-all duration-300 hover:scale-105 ${isBuilder
                                                                    ? 'border-green-500/30 text-green-300 bg-green-500/5 hover:bg-green-500/10 hover:border-green-400'
                                                                    : 'border-purple-500/30 text-purple-300 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-400'
                                                                }`}
                                                        >
                                                            {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Active Indicator Bar */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${isActive
                                                    ? (isBuilder ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-purple-500 to-purple-400')
                                                    : 'bg-transparent'
                                                }`} />
                                        </ShatteredCard>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-[calc(50%-4rem)]" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Stats */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                        <Zap size={14} className="text-yellow-400" />
                        <span>CONTINUOUS_LEARNING: </span>
                        <span className="text-green-400 font-bold">ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                        <Terminal size={14} className="text-cyan-400" />
                        <span>SKILL_ACQUISITION: </span>
                        <span className="text-cyan-400 font-bold">IN_PROGRESS</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;
