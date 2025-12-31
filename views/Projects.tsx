import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../constants';
import ShatteredCard from '../components/ShatteredCard';
import GlitchText from '../components/GlitchText';
import { Lock, Unlock, Eye, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching/decrypting delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center pt-24 pb-64 px-4 overflow-y-auto">
      <div className="w-full max-w-5xl mb-12 flex items-end justify-between border-b border-white/10 pb-4">
        <GlitchText text="ARCHIVED_PROJECTS" as="h2" className="text-3xl font-display font-bold text-white" />
        <span className="font-mono text-green-500 text-xs">DIR: /ROOT/WORK</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {PROJECTS_DATA.map((project) => (
          <ShatteredCard
            key={project.id}
            className="h-full"
            links={project.links}
            loading={loading}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                {project.status === 'SECURE' ? <Lock className="text-green-400" size={18} /> :
                  project.status === 'BREACHED' ? <Unlock className="text-red-500" size={18} /> :
                    <Eye className="text-yellow-400" size={18} />}
                <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${project.status === 'SECURE' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'BREACHED' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                  }`}>{project.status}</span>
              </div>
              <Shield size={16} className="text-gray-600" />
            </div>

            {project.image && (
              <div className="w-full h-40 mb-4 overflow-hidden border border-white/10 relative group-hover:border-green-500/30 transition-colors">
                <div className="absolute inset-0 bg-green-900/20 z-10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-all"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />

                {/* Tech overlay on image */}
                <div className="absolute bottom-0 left-0 w-full p-2 z-30 flex justify-between items-end">
                  <div className="h-[1px] w-full bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>
              </div>
            )}

            <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-green-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 font-mono leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono border border-purple-500/30 text-purple-300 px-2 py-1 uppercase tracking-wider hover:bg-purple-500/20 transition-colors cursor-crosshair">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ShatteredCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;