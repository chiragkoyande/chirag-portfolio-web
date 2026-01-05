import React from 'react';
import GlitchText from './GlitchText';
import { Quote, Linkedin } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Professor Mentor',
        role: 'Faculty Advisor',
        company: 'Bharati Vidyapeeth',
        content: 'Chirag demonstrates exceptional understanding of both development and security concepts. His projects show maturity beyond his years.',
    },
    {
        id: '2',
        name: 'Hackathon Teammate',
        role: 'Backend Developer',
        company: 'Tech Community',
        content: 'Working with Chirag on Opportune was incredible. His attention to security while building features made our product robust from day one.',
    },
    {
        id: '3',
        name: 'Open Source Contributor',
        role: 'Security Researcher',
        company: 'GitHub Community',
        content: 'The LinkSniff tool shows real understanding of phishing detection. Clean code and well-documented. Keep building!',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-gradient-to-b from-transparent via-green-900/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <GlitchText
                        text="PEER_REVIEWS"
                        as="h2"
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
                    />
                    <p className="text-gray-400 font-mono text-sm">
                        :: FEEDBACK FROM THE NETWORK ::
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg hover:border-green-500/30 transition-all duration-300 group"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-4 right-4 text-green-500/20 group-hover:text-green-500/40 transition-colors" size={32} />

                            {/* Content */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <div>
                                    <h4 className="font-display font-bold text-white text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs font-mono text-gray-500">
                                        {testimonial.role} @ {testimonial.company}
                                    </p>
                                </div>
                                {testimonial.linkedinUrl && (
                                    <a
                                        href={testimonial.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-blue-400 transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs font-mono text-gray-600 mt-8">
                    * Want to add your testimonial? <span className="text-green-400">Connect with me on LinkedIn</span>
                </p>
            </div>
        </section>
    );
};

export default Testimonials;
