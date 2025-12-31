import React, { useState } from 'react';
import { ViewState } from '../types';
import { LayoutGrid, User, Briefcase, Mail, FileText, Power, MousePointer2, ChevronRight, Github, Info, Database } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface GuiOverlayProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const GuiOverlay: React.FC<GuiOverlayProps> = ({ currentView, onNavigate }) => {
  const [isActive, setIsActive] = useState(false);

  // Updated CV Download Logic matching About.tsx
  const handleDownloadCV = () => {
    // Trigger download of the static PDF file
    const link = document.createElement('a');
    link.href = '/Chirag_Koyande_Resume.pdf';
    link.download = 'Chirag_Koyande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* 
         ========================================
         TOGGLE SWITCH (Top Right)
         ========================================
      */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex flex-col items-end">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`group relative flex items-center justify-center w-auto pl-2 pr-8 py-2 md:pl-4 md:pr-12 md:py-3 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
            }`}
        >
          {/* Background Shape */}
          <div className={`absolute inset-0 skew-x-[-20deg] border transition-all duration-300 ${isActive
            ? 'bg-green-900/80 border-green-400 shadow-[0_0_15px_rgba(74,222,128,0.4)]'
            : 'bg-black/60 border-gray-600 group-hover:border-green-500/50'
            }`}></div>

          {/* Label Content */}
          <div className="relative z-10 flex flex-col items-end leading-none mr-1 md:mr-2">
            <span className={`text-[8px] md:text-[10px] font-display font-bold tracking-widest ${isActive ? 'text-green-300' : 'text-gray-400 group-hover:text-green-400'
              }`}>
              {isActive ? 'OVERRIDE' : 'MENU'}
            </span>
            <span className="text-[6px] md:text-[8px] font-mono opacity-60 text-gray-500 hidden sm:block">
              {isActive ? 'HR_ACTIVE' : 'NON_TECH'}
            </span>
          </div>

          {/* Icon */}
          <div className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isActive ? 'text-green-400' : 'text-gray-500 group-hover:text-green-400'
            }`}>
            <Power size={16} className="md:w-[18px] md:h-[18px]" />
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500 opacity-50"></div>
        </button>

        {/* Helper Tip for Non-Tech Users */}
        <div className={`mt-2 mr-1 md:mt-3 md:mr-2 transition-all duration-500 flex-col items-end hidden md:flex ${isActive ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-[1px] w-6 bg-green-500/30"></div>
            <div className="text-[9px] font-mono text-green-400/80 uppercase tracking-widest flex items-center gap-1">
              <Info size={10} />
              <span>Navigation Tip</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-gray-500 text-right leading-relaxed max-w-[200px]">
            <span className="text-gray-300">Non-Tech?</span> Click button for Menu.<br />
            <span className="text-gray-300">Devs?</span> Use Terminal below.
          </div>
        </div>
      </div>

      {/* 
         ========================================
         HOLOGRAPHIC HUD MENU (Top Center)
         ========================================
      */}
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-center pt-14 md:pt-8 pointer-events-none transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
          }`}
      >
        <div className="pointer-events-auto relative group">

          {/* HUD Glass Background with Clip Path */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md border border-green-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }}>
          </div>

          {/* Animated Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

          {/* Navigation Items Container */}
          <div className="relative px-3 py-2 md:px-12 md:py-4 flex items-center gap-1 md:gap-6 overflow-x-auto max-w-[95vw]">

            {/* View Buttons */}
            {[
              { id: ViewState.HOME, label: 'CORE', icon: LayoutGrid },
              { id: ViewState.ABOUT, label: 'IDENTITY', icon: User },
              { id: ViewState.PROJECTS, label: 'MODULES', icon: Briefcase },
              { id: ViewState.RESOURCES, label: 'RESOURCES', icon: Database }, // Added Resources
              { id: ViewState.CONTACT, label: 'SIGNAL', icon: Mail },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-2 py-1 md:px-4 md:py-2 group/btn overflow-hidden transition-all flex-shrink-0 ${currentView === item.id ? 'text-green-400' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {/* Button Hover Glitch Background */}
                <div className={`absolute inset-0 bg-green-500/10 skew-x-[-12deg] transition-transform duration-300 ${currentView === item.id ? 'scale-100' : 'scale-0 group-hover/btn:scale-100'
                  }`}></div>

                <div className="relative flex items-center gap-1 md:gap-2 font-display text-[10px] md:text-xs font-bold tracking-wider">
                  <item.icon size={12} className={`md:w-[14px] md:h-[14px] ${currentView === item.id ? 'animate-pulse' : ''}`} />
                  <span className="hidden sm:inline">{item.label}</span>
                </div>

                {/* Active Indicator Dot */}
                {currentView === item.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_#4ade80]"></div>
                )}
              </button>
            ))}

            {/* Separator */}
            <div className="h-4 md:h-6 w-[1px] bg-white/10 skew-x-[-12deg] mx-1 md:mx-2 flex-shrink-0"></div>

            {/* Resume Button */}
            <button
              onClick={handleDownloadCV}
              className="relative px-3 py-1 md:px-6 md:py-2 bg-purple-900/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white transition-all group/cv overflow-hidden skew-x-[-12deg] flex-shrink-0"
            >
              <div className="skew-x-[12deg] flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-bold font-mono">
                <FileText size={12} className="md:w-[14px] md:h-[14px]" />
                <span className="hidden sm:inline">DOWNLOAD_RESUME</span>
                <span className="sm:hidden">CV</span>
                <ChevronRight size={10} className="hidden md:block opacity-0 -translate-x-2 group-hover/cv:opacity-100 group-hover/cv:translate-x-0 transition-all" />
              </div>
            </button>

            {/* GitHub Social Link */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Decorative HUD Elements */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-green-500/20"></div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500/20"></div>
        </div>
      </div>

      {/* 
         ========================================
         VISUAL FEEDBACK (Bottom Right)
         ========================================
      */}
      {isActive && (
        <div className="fixed bottom-24 right-6 z-40 pointer-events-none flex flex-col items-end gap-1">
          <div className="flex items-center gap-2 text-green-500/60 font-mono text-[10px] animate-pulse">
            <MousePointer2 size={12} />
            <span>NAVIGATION_ASSIST_ENABLED</span>
          </div>
          <div className="w-32 h-[1px] bg-gradient-to-l from-green-500/50 to-transparent"></div>
        </div>
      )}
    </>
  );
};

export default GuiOverlay;