import React from 'react';
import { ShatterProps } from '../types';
import { Github, ExternalLink, Play, Loader2 } from 'lucide-react';

const ShatteredCard: React.FC<ShatterProps> = ({ children, className = '', intensity = 'med', links, loading = false }) => {
  // Simulate jagged edges via clip-path
  const clipPathStyle = {
    clipPath: 'polygon(0% 10px, 10px 0%, 90% 0%, 100% 20px, 100% 100%, 95% 100%, 0% 100%)'
  };

  // CSS Variables for theming
  const themeStyles = {
    '--card-border': 'rgba(255, 255, 255, 0.1)',
    '--card-border-hover': 'rgba(34, 197, 94, 0.5)',
    '--card-shadow-hover': 'rgba(74, 222, 128, 0.1)',
    '--shard-color-1': 'rgba(34, 197, 94, 0.3)',
    '--shard-color-2': 'rgba(168, 85, 247, 0.3)',
  } as React.CSSProperties;

  return (
    <div className={`relative group ${className}`} style={themeStyles}>
      {/* Background shards (decorative) */}
      <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[color:var(--shard-color-1)] transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[color:var(--shard-color-2)] transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

      {/* Main Container */}
      <div 
        className="relative bg-black/80 border border-[color:var(--card-border)] backdrop-blur-sm p-6 transition-all duration-300 group-hover:border-[color:var(--card-border-hover)] group-hover:shadow-[0_0_30px_var(--card-shadow-hover)] flex flex-col h-full"
        style={clipPathStyle}
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent bg-[length:100%_4px] pointer-events-none opacity-20"></div>
        
        {loading ? (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[200px] gap-6 animate-pulse">
            {/* Hex/Radar Loader */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-green-500/20 rounded-full animate-[spin_3s_linear_infinite]"></div>
              <div className="absolute inset-0 border-t-2 border-green-500 rounded-full animate-[spin_1s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-purple-500/30 rotate-45"></div>
              <Loader2 size={24} className="text-green-400 animate-spin" />
            </div>

            {/* Status Text */}
            <div className="space-y-1 text-center w-full max-w-[80%]">
              <div className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-green-400 tracking-widest">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                DECRYPTING_DATA
              </div>
              <div className="h-1 w-full bg-green-900/30 rounded-full overflow-hidden mt-2">
                 <div className="h-full bg-green-500/50 w-full origin-left animate-[pulse_1s_ease-in-out_infinite]"></div>
              </div>
              <div className="flex justify-between text-[8px] font-mono text-gray-500 pt-1">
                <span>SECTOR: 0x4A</span>
                <span>VERIFYING...</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1">
              {children}
            </div>

            {/* Action Links Footer */}
            {links && (
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                {links.github ? (
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-green-400 transition-colors group/link">
                    <Github size={14} />
                    <span className="relative">
                       SOURCE_CODE
                       <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 group-hover/link:w-full transition-all"></span>
                    </span>
                  </a>
                ) : (
                  <div></div> /* Spacer if no github link */
                )}
                
                {links.demo && (
                  <a 
                    href={links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/btn relative flex items-center gap-2 px-4 py-2 bg-cyan-950/30 border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
                  >
                    {/* Button Scanline Animation */}
                    <div className="absolute inset-0 w-full h-full bg-cyan-400/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    
                    <div className="relative z-10 flex items-center gap-2">
                      <Play size={12} className="text-cyan-400 fill-cyan-400/20 group-hover/btn:fill-cyan-400 transition-colors" />
                      <span className="text-xs font-bold font-mono text-cyan-400 group-hover/btn:text-cyan-300 tracking-wider">LIVE_PREVIEW</span>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-500/50 group-hover/btn:border-cyan-400 transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-500/50 group-hover/btn:border-cyan-400 transition-colors"></div>
                  </a>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShatteredCard;