import React from 'react';

const NeuralCore: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center pointer-events-none perspective-1000">
      {/* Outer Ring */}
      <div className="absolute w-full h-full border-2 border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite] shadow-[0_0_50px_rgba(168,85,247,0.2)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]" />
      </div>

      {/* Middle Ring - Tilted */}
      <div className="absolute w-[80%] h-[80%] border border-green-400/30 rounded-full animate-[spin_7s_linear_infinite_reverse] rotate-x-45 border-dashed"></div>

      {/* Inner Ring - Tilted axis */}
      <div className="absolute w-[60%] h-[60%] border-4 border-purple-600/10 rounded-full animate-[spin_5s_linear_infinite] rotate-y-45 border-t-purple-500 border-b-transparent"></div>

      {/* The Core */}
      <div className="absolute w-20 h-20 md:w-32 md:h-32 bg-black rounded-lg transform rotate-45 animate-pulse shadow-[0_0_100px_rgba(50,255,100,0.3)] flex items-center justify-center overflow-hidden border border-green-500/50 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-green-900/40"></div>
        
        {/* Liquid Metal simulation */}
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent animate-[spin_3s_linear_infinite] opacity-50"></div>
        
        <div className="relative z-10 text-xs font-mono text-green-400 opacity-80 whitespace-pre leading-none">
          {`0101
1010
0011`}
        </div>
      </div>
      
      {/* Data streams */}
      <div className="absolute inset-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] border border-green-500/20 rounded-full opacity-20"></div>
    </div>
  );
};

export default NeuralCore;
