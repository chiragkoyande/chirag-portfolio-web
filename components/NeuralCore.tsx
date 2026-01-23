import React from 'react';

const NeuralCore: React.FC = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 flex items-center justify-center pointer-events-none">
      {/* Outer Ring - slower on mobile */}
      <div className="absolute w-full h-full border-2 border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite] md:animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(168,85,247,0.15)] md:shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
      </div>

      {/* Middle Ring - hidden on mobile for performance */}
      <div className="hidden md:block absolute w-[80%] h-[80%] border border-green-400/30 rounded-full animate-[spin_7s_linear_infinite_reverse] border-dashed"></div>

      {/* Inner Ring - simplified on mobile */}
      <div className="absolute w-[60%] h-[60%] border-2 md:border-4 border-purple-600/10 rounded-full animate-[spin_8s_linear_infinite] md:animate-[spin_5s_linear_infinite] border-t-purple-500/50 md:border-t-purple-500 border-b-transparent"></div>

      {/* The Core */}
      <div className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-black rounded-lg transform rotate-45 shadow-[0_0_60px_rgba(50,255,100,0.2)] md:shadow-[0_0_100px_rgba(50,255,100,0.3)] flex items-center justify-center overflow-hidden border border-green-500/50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-green-900/40"></div>

        {/* Liquid Metal simulation - hidden on mobile */}
        <div className="hidden md:block absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent animate-[spin_3s_linear_infinite] opacity-50"></div>

        <div className="relative z-10 text-[8px] md:text-xs font-mono text-green-400 opacity-80 whitespace-pre leading-none">
          {`0101
1010
0011`}
        </div>
      </div>

      {/* Data streams - simplified on mobile */}
      <div className="hidden md:block absolute inset-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] border border-green-500/20 rounded-full opacity-20"></div>
    </div>
  );
};

export default NeuralCore;
