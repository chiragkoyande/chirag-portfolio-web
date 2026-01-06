import React from 'react';
import { ViewState } from '../types';
import { LayoutGrid, User, Briefcase, Mail, FileText, ChevronRight, Github, Database, Sun, Moon, Zap } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

interface GuiOverlayProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const GuiOverlay: React.FC<GuiOverlayProps> = ({ currentView, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();

  // CV Download Logic
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Chirag_Koyande_Resume.pdf';
    link.download = 'Chirag_Koyande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const navItems = [
    { id: ViewState.HOME, label: 'Home', icon: LayoutGrid },
    { id: ViewState.ABOUT, label: 'About', icon: User },
    { id: ViewState.EXPERIENCE, label: 'Experience', icon: Zap },
    { id: ViewState.PROJECTS, label: 'Projects', icon: Briefcase },
    { id: ViewState.RESOURCES, label: 'Resources', icon: Database },
    { id: ViewState.CONTACT, label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <nav className="bg-black/80 backdrop-blur-xl border-b border-green-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-display font-bold text-sm md:text-base text-white tracking-wider">
                CHIRAG<span className="text-green-400">_K</span>
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${currentView === item.id
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-medium tracking-wide">
                    <item.icon size={14} className={currentView === item.id ? 'animate-pulse' : ''} />
                    <span>{item.label}</span>
                  </div>

                  {/* Active Indicator */}
                  {currentView === item.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-green-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-1 overflow-x-auto max-w-[60vw] scrollbar-hide">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2 rounded-lg transition-all ${currentView === item.id
                    ? 'text-green-400 bg-green-500/10'
                    : 'text-gray-500 hover:text-white'
                    }`}
                >
                  <item.icon size={18} />
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Resume Button */}
              <button
                onClick={handleDownloadCV}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 transition-all rounded-lg group"
              >
                <FileText size={14} />
                <span className="text-xs font-mono font-medium">Resume</span>
                <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </button>

              {/* Mobile Resume Button */}
              <button
                onClick={handleDownloadCV}
                className="sm:hidden p-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <FileText size={18} />
              </button>

              {/* GitHub Link */}
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default GuiOverlay;