import React from 'react';
import { ViewState } from '../../types';
import { FileText, ChevronRight, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';
import useScrollDirection from '../../hooks/useScrollDirection';
import DesktopNav from './DesktopNav';
import MobileBottomNav from './MobileBottomNav';

interface NavbarProps {
    currentView: ViewState;
    onNavigate: (view: ViewState) => void;
}

/**
 * Modern responsive navbar:
 * - Desktop: Top glassmorphism navbar with pill navigation
 * - Mobile: Bottom tab bar (like Instagram/Twitter) - no hamburger!
 */
const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
    const { direction, isAtTop } = useScrollDirection(15);

    // CV Download Logic
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Chirag_Koyande_Resume.pdf';
        link.download = 'Chirag_Koyande_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Determine navbar visibility based on scroll (desktop only)
    const isNavHidden = direction === 'down';

    return (
        <>
            {/* ============= DESKTOP TOP NAVBAR ============= */}
            <header
                className={`hidden md:block fixed top-0 left-0 w-full z-40 transition-all duration-300 will-change-transform
          ${isNavHidden ? '-translate-y-full' : 'translate-y-0'}
          ${isAtTop ? 'py-3' : 'py-2'}`}
            >
                <nav
                    className={`mx-auto max-w-7xl px-6 transition-all duration-300
            ${isAtTop ? '' : 'glass-nav mx-6 rounded-2xl'}`}
                >
                    {/* Noise texture overlay */}
                    {!isAtTop && (
                        <div className="absolute inset-0 rounded-2xl opacity-[0.015] pointer-events-none noise-texture" />
                    )}

                    <div className="relative flex items-center justify-between h-16">
                        {/* Logo / Brand */}
                        <div
                            className="flex items-center gap-3 group cursor-pointer"
                            onClick={() => onNavigate(ViewState.HOME)}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <span className="text-green-400 font-bold text-lg">C</span>
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse border-2 border-black" />
                            </div>
                            <div>
                                <span className="font-display font-bold text-sm text-white tracking-wider">
                                    CHIRAG<span className="text-green-400">_K</span>
                                </span>
                                <div className="text-[10px] text-gray-500 font-mono">Builder + Breaker</div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <DesktopNav currentView={currentView} onNavigate={onNavigate} />

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">

                            {/* Resume Button */}
                            <button
                                onClick={handleDownloadCV}
                                className="flex items-center gap-2 px-4 py-2.5 
                  bg-gradient-to-r from-green-500/10 to-cyan-500/10 
                  border border-green-500/30 
                  text-green-400 hover:text-green-300
                  hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10
                  transition-all duration-300 rounded-xl group"
                            >
                                <FileText size={14} />
                                <span className="text-xs font-medium">Resume</span>
                                <ChevronRight
                                    size={12}
                                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                />
                            </button>

                            {/* GitHub Link */}
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl 
                  bg-white/5 border border-white/10 
                  text-gray-400 hover:text-white hover:bg-white/10
                  transition-all duration-300"
                                aria-label="GitHub Profile"
                            >
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

            {/* ============= MOBILE TOP BAR (minimal) ============= */}
            <header className="md:hidden fixed top-0 left-0 w-full z-40 pt-safe-top">
                <div className="flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-xl border-b border-white/5">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => onNavigate(ViewState.HOME)}
                    >
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 border border-green-500/30 flex items-center justify-center">
                                <span className="text-green-400 font-bold">C</span>
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse border border-black" />
                        </div>
                        <span className="font-display font-bold text-sm text-white tracking-wider">
                            CHIRAG<span className="text-green-400">_K</span>
                        </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-2">
                        {/* Resume */}
                        <button
                            onClick={handleDownloadCV}
                            className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 transition-all"
                            aria-label="Download Resume"
                        >
                            <FileText size={18} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ============= MOBILE BOTTOM NAV ============= */}
            <MobileBottomNav currentView={currentView} onNavigate={onNavigate} />
        </>
    );
};

export default Navbar;
