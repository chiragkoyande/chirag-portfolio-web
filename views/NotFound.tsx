import React from 'react';
import GlitchText from '../components/GlitchText';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
    onNavigateHome: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center relative z-10 px-4">
            {/* Glitch Effect Container */}
            <div className="relative mb-8">
                <div className="absolute inset-0 animate-pulse opacity-20">
                    <div className="text-[150px] md:text-[200px] font-display font-black text-red-500 leading-none">
                        404
                    </div>
                </div>
                <div className="text-[150px] md:text-[200px] font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 leading-none animate-pulse">
                    404
                </div>
            </div>

            {/* Error Icon */}
            <div className="w-16 h-16 mb-6 border-2 border-red-500/50 rounded-full flex items-center justify-center animate-bounce">
                <AlertTriangle className="text-red-500" size={32} />
            </div>

            {/* Error Message */}
            <GlitchText
                text="SECTOR_NOT_FOUND"
                as="h1"
                className="text-2xl md:text-3xl font-display font-bold text-white mb-4"
            />

            <div className="text-center font-mono text-sm text-gray-400 mb-8 max-w-md">
                <p className="mb-2">
                    <span className="text-red-400">&gt;&gt;</span> ERROR: The requested resource does not exist in this dimension.
                </p>
                <p className="text-gray-500">
                    The path you're looking for may have been moved, deleted, or never existed in the first place.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={onNavigateHome}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500/20 hover:border-green-400 transition-all rounded-lg font-mono text-sm group"
                >
                    <Home size={16} />
                    RETURN_TO_CORE
                </button>

                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-gray-400 hover:bg-white/10 hover:text-white transition-all rounded-lg font-mono text-sm group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    GO_BACK
                </button>
            </div>

            {/* Terminal Output Style */}
            <div className="mt-12 p-4 bg-black/60 border border-red-500/20 rounded-lg font-mono text-xs text-gray-500 max-w-lg w-full">
                <div className="flex items-center gap-2 mb-2 text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    SYSTEM_LOG
                </div>
                <pre className="text-red-400/60">
                    {`[ERROR] Route not found
[INFO] Attempted path: ${typeof window !== 'undefined' ? window.location.pathname : '/unknown'}
[INFO] Timestamp: ${new Date().toISOString()}
[SUGGESTION] Navigate to valid sector`}
                </pre>
            </div>
        </div>
    );
};

export default NotFound;
