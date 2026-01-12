import React from 'react';
import NeuralCore from '../components/NeuralCore';
import GlitchText from '../components/GlitchText';
import { ArrowRight, FileText, Mail, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface HomeProps {
  onNavigate?: (view: string) => void;
}

const Home: React.FC<HomeProps> = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/chiragk_cv.pdf';
    link.download = 'Chirag_Koyande_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative z-10 px-4">
      {/* 3D Core Visualization */}
      <div className="scale-75 md:scale-100 transition-transform duration-700">
        <NeuralCore />
      </div>

      {/* Main Typography */}
      <div className="mt-12 text-center space-y-6 relative">
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

        <GlitchText
          text="CHIRAG_KOYANDE"
          as="h1"
          className="text-3xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-mono tracking-widest text-gray-400">
          <span className="hover:text-green-400 transition-colors cursor-default">BUILDER</span>
          <span className="hidden md:block text-green-500/50 text-[10px]">+</span>
          <span className="hover:text-purple-400 transition-colors cursor-default">BREAKER</span>
          <span className="hidden md:block text-green-500/50 text-[10px]">///</span>
          <span className="hover:text-white transition-colors cursor-default">HYBRID_ENGINEER</span>
        </div>

        {/* Tagline */}
        <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base font-mono leading-relaxed">
          Full-Stack Developer × Security Engineer. Building production-grade systems and hardening them against real threats.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all rounded-lg font-mono text-sm group"
          >
            <FileText size={16} />
            <span>Download Resume</span>
            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </button>

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all rounded-lg font-mono text-sm"
          >
            <Mail size={16} />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Decorative Corner Stats */}
      <div className="absolute top-24 right-6 hidden lg:block text-right">
        <div className="p-4 border-r-2 border-green-500/20 text-[10px] font-mono text-green-400/60 space-y-1">
          <p>LOC: <span className="text-green-400">PUNE/MUMBAI</span></p>
          <p>ROLE: <span className="text-purple-400">STUDENT_ENG</span></p>
          <p>STATUS: <span className="animate-pulse text-green-400">OPEN_TO_WORK</span></p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-green-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;