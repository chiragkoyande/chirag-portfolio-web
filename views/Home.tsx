import React from 'react';
import NeuralCore from '../components/NeuralCore';
import GlitchText from '../components/GlitchText';

const Home: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center relative z-10 pb-48 md:pb-32">
      {/* 3D Core Visualization */}
      <div className="scale-75 md:scale-100 transition-transform duration-700">
        <NeuralCore />
      </div>

      {/* Main Typography */}
      <div className="mt-16 text-center space-y-6 relative">
        {/* Decorative lines behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

        <GlitchText
          text="CHIRAG_KOYANDE"
          as="h1"
          className="text-3xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] px-4"
        />

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-sm md:text-base font-mono tracking-widest text-gray-400">
          <span className="hover:text-green-400 transition-colors cursor-default">BUILDER</span>
          <span className="hidden md:block text-green-500/50 text-[10px]">+</span>
          <span className="hover:text-purple-400 transition-colors cursor-default">BREAKER</span>
          <span className="hidden md:block text-green-500/50 text-[10px]">///</span>
          <span className="hover:text-white transition-colors cursor-default">HYBRID_ENGINEER</span>
        </div>
      </div>

      {/* Decorative Corner Stats */}
      <div className="absolute top-32 right-10 hidden lg:block text-right">
        <div className="p-4 border-r-2 border-green-500/20 text-[10px] font-mono text-green-400/60 space-y-1">
          <p>LOC: <span className="text-green-400">PUNE/MUMBAI</span></p>
          <p>ROLE: <span className="text-purple-400">STUDENT_ENG</span></p>
          <p>STATUS: <span className="animate-pulse">OPEN_TO_WORK</span></p>
        </div>
      </div>
    </div>
  );
};

export default Home;