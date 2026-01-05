import React from 'react';
import GlitchText from './GlitchText';
import ShatteredCard from './ShatteredCard';
import { FileText, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Building a Phishing Detection Tool from Scratch',
        excerpt: 'A deep dive into how I built LinkSniff - a Python-based tool that analyzes PDFs for embedded malicious links using heuristic risk scoring.',
        date: '2024-12-15',
        readTime: '8 min',
        tags: ['Security', 'Python', 'Forensics'],
        slug: 'building-phishing-detection-tool',
    },
    {
        id: '2',
        title: 'DevSecOps: Why Developers Should Think Like Attackers',
        excerpt: 'Understanding the attacker mindset helps you build more secure applications. Here\'s how I approach security in my full-stack projects.',
        date: '2024-11-28',
        readTime: '6 min',
        tags: ['DevSecOps', 'Security', 'Best Practices'],
        slug: 'devsecops-attacker-mindset',
    },
    {
        id: '3',
        title: 'Real-Time Data Aggregation with Supabase Edge Functions',
        excerpt: 'How I reduced data fetch latency by 40% in Opportune using distributed edge functions and smart caching strategies.',
        date: '2024-10-10',
        readTime: '10 min',
        tags: ['Supabase', 'Performance', 'Backend'],
        slug: 'realtime-aggregation-supabase',
    },
];

const BlogSection: React.FC = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <GlitchText
                            text="TECH_LOGS"
                            as="h2"
                            className="text-3xl md:text-4xl font-display font-bold text-white mb-2"
                        />
                        <p className="text-gray-400 font-mono text-sm">
                            :: INSIGHTS & WRITE-UPS ::
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm transition-colors group">
                        VIEW_ALL
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <ShatteredCard key={post.id} intensity="low" className="group cursor-pointer">
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                <div className="flex items-center gap-1">
                                    <FileText size={12} />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-green-400 transition-colors leading-tight">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded"
                                    >
                                        <Tag size={8} />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </ShatteredCard>
                    ))}
                </div>

                <div className="text-center mt-8 md:hidden">
                    <button className="flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm transition-colors group mx-auto">
                        VIEW_ALL_POSTS
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
