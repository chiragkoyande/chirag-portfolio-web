import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-display font-bold text-sm text-white tracking-wider">
                            CHIRAG<span className="text-green-400">_K</span>
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span>© {currentYear}</span>
                        <span className="text-gray-600">|</span>
                        <span className="flex items-center gap-1">
                            Built with <Heart size={12} className="text-red-500" /> by Chirag
                        </span>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6 text-xs font-mono text-gray-600">
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Home</span>
                    <span className="hover:text-green-400 cursor-pointer transition-colors">About</span>
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Projects</span>
                    <span className="hover:text-green-400 cursor-pointer transition-colors">Contact</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
