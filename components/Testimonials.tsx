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
    avatar?: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Aniket Gawande',
        role: 'Founders\' Office | Growth, GTM & Ops',
        company: 'Startup Generalist',
        content: 'It was a pleasure connecting with you. Our conversation was insightful, and I wish you the best in your learning journey.',
        linkedinUrl: 'https://www.linkedin.com/in/aniket-gawande/',
        avatar: '/images/testimonials/aniket.jpg.jpeg',
    },
    {
        id: '2',
        name: 'Amit Kumar',
        role: 'Solution Architect | Pre-Sales Consultant',
        company: 'Cyber Security',
        content: 'Wishing you continued success and all the best for your future endeavors in the industry.',
        linkedinUrl: 'https://linkedin.com/in/amit-kumar-b5421b40',
        avatar: '/images/testimonials/amit.jpg.jpeg',
    },
    {
        id: '3',
        name: 'Vikram Mehta',
        role: 'Founder & CEO - Cy5.io',
        company: 'Ex-CISO MakeMyTrip/Goibibo',
        content: 'It is great to see promising cybersecurity talent emerging in the country. Keep pushing forward.',
        linkedinUrl: 'https://www.linkedin.com/in/vikram-mehta-69a91a1a/',
        avatar: '/images/testimonials/vikram.jpg.jpeg',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-transparent via-green-900/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <GlitchText
                        text="PEER_REVIEWS"
                        as="h2"
                        className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3"
                    />
                    <p className="text-gray-400 font-mono text-xs sm:text-sm">
                        :: FEEDBACK FROM THE NETWORK ::
                    </p>
                </div>

                {/* Clean vertical stack on mobile, grid on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="relative p-5 md:p-6 bg-black/60 border border-white/10 rounded-xl transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-4 right-4 text-green-500/20" size={24} />

                            {/* Photo Block */}
                            <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-xl overflow-hidden border-2 border-green-500/40 mb-4 shadow-lg shadow-green-500/10 active:scale-105 transition-transform duration-200">
                                {testimonial.avatar ? (
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                ) : null}
                                <div className={`w-full h-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-2xl ${testimonial.avatar ? 'hidden' : ''}`}>
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>

                            {/* Name & Role */}
                            <h4 className="font-display font-bold text-white text-lg mb-1">
                                {testimonial.name}
                            </h4>
                            <p className="text-xs font-mono text-gray-500 mb-4">
                                {testimonial.role} @ {testimonial.company}
                            </p>

                            {/* Testimonial Content */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                                "{testimonial.content}"
                            </p>

                            {/* LinkedIn Link */}
                            {testimonial.linkedinUrl && (
                                <a
                                    href={testimonial.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-400 active:text-blue-400 text-sm font-mono border border-white/10 px-4 py-2 rounded-full active:border-blue-400"
                                >
                                    <Linkedin size={14} />
                                    <span>View Profile</span>
                                </a>
                            )}
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
