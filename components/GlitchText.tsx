import React, { useState, useEffect, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  speed?: number;
  enableHover?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  as: Tag = 'span', 
  className = '', 
  speed = 40,
  enableHover = true,
  intensity = 'medium'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  // Cyberpunk/Tech character set
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&[]{}<>/\\|^~*-_=+';

  // Config based on intensity
  const settings = {
    low: { probability: 0.05, interval: 150 },
    medium: { probability: 0.2, interval: 70 },
    high: { probability: 0.5, interval: 40 }
  }[intensity];

  // Initial Reveal Animation (Decrypt effect)
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    
    let iterations = 0;
    
    intervalRef.current = window.setInterval(() => {
      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );

      if (iterations >= text.length) {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      iterations += 1 / 3;
    }, speed);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [text, speed, intensity]);

  // Combined active state
  const isActive = isHovered || isFocused;

  // Glitch Loop (Hover or Focus)
  useEffect(() => {
    if (!enableHover || !isActive) {
      // Only reset to original text if not active and not currently executing initial reveal
      if (!isActive && !intervalRef.current) setDisplayText(text); 
      return;
    }

    const glitchInterval = window.setInterval(() => {
      setDisplayText(text.split('').map((char, i) => {
        // Preserve spaces usually
        if (char === ' ') return ' ';
        
        // Randomly swap characters based on intensity probability
        if (Math.random() < settings.probability) {
           return chars[Math.floor(Math.random() * chars.length)];
        }
        return char;
      }).join(''));
    }, settings.interval);

    return () => window.clearInterval(glitchInterval);
  }, [isActive, text, enableHover, settings.probability, settings.interval]);

  const handleMouseEnter = () => {
    // Stop reveal animation if it's still running so glitch loop takes over
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Tag 
      className={`relative inline-block ${className} group cursor-default select-none outline-none focus:outline-none`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <span className="relative z-10">{displayText}</span>
      
      {/* Red Glitch Layer */}
      <span 
        className={`absolute top-0 left-0 -ml-[1px] text-red-500 mix-blend-screen pointer-events-none transition-opacity duration-100 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          clipPath: 'inset(40% 0 61% 0)', 
          transform: isActive ? 'translate(-2px, 0)' : 'none' 
        }}
      >
        {displayText}
      </span>

      {/* Cyan Glitch Layer */}
      <span 
        className={`absolute top-0 left-0 ml-[1px] text-cyan-500 mix-blend-screen pointer-events-none transition-opacity duration-100 delay-75 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          clipPath: 'inset(10% 0 60% 0)',
          transform: isActive ? 'translate(2px, 0)' : 'none'
        }}
      >
        {displayText}
      </span>
    </Tag>
  );
};

export default GlitchText;