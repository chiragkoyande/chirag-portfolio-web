import React, { useState, useEffect } from 'react';
import { ResourceItem } from '../types';
import { INITIAL_RESOURCES } from '../constants';
import GlitchText from '../components/GlitchText';
import ShatteredCard from '../components/ShatteredCard';
import { Youtube, FileText, ExternalLink, Bookmark, Database } from 'lucide-react';

const Resources: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>(INITIAL_RESOURCES);

  // Load any local "Admin" added resources
  useEffect(() => {
    const saved = localStorage.getItem('chirag_resources');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setResources([...INITIAL_RESOURCES, ...parsed]);
      } catch (e) {
        console.error('Data corrupted');
      }
    }
  }, []);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
    }
    return null;
  };

  return (
    <div className="h-full w-full flex flex-col items-center pt-24 pb-64 px-4 overflow-y-auto">
      <div className="max-w-6xl w-full">
        <div className="flex items-end justify-between border-b border-white/10 pb-4 mb-8">
          <div>
            <GlitchText text="KNOWLEDGE_BASE" as="h2" className="text-3xl font-display font-bold text-white" />
            <p className="text-xs font-mono text-gray-400 mt-1">SHARED_INTELLIGENCE // LEARNING_RESOURCES</p>
          </div>
          <Database className="text-green-500 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res) => {
            const embedUrl = getEmbedUrl(res.url);

            return (
              <ShatteredCard key={res.id} className="h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    res.type === 'VIDEO' ? 'border-red-500/30 text-red-400 bg-red-900/10' :
                    'border-blue-500/30 text-blue-400 bg-blue-900/10'
                  }`}>
                    {res.type}
                  </div>
                  <Bookmark size={14} className="text-gray-600" />
                </div>

                {/* Video Embed or Link Preview */}
                <div className="mb-4 relative group/media overflow-hidden border border-white/10 bg-black aspect-video">
                  {res.type === 'VIDEO' && embedUrl ? (
                    <iframe 
                      src={embedUrl} 
                      className="w-full h-full grayscale opacity-80 group-hover/media:grayscale-0 group-hover/media:opacity-100 transition-all duration-500"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/50">
                       <FileText size={32} className="text-gray-600 group-hover/media:text-green-400 transition-colors" />
                    </div>
                  )}
                  {/* Overlay Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2 leading-tight group-hover:text-green-300 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs font-mono text-gray-500 mb-4 flex-1">
                  {res.description || 'No description data available.'}
                </p>

                <a 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2 bg-white/5 border border-white/10 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 text-gray-400 text-xs font-mono transition-all"
                >
                  <span className="uppercase">{res.type === 'VIDEO' ? 'WATCH_FEED' : 'ACCESS_DOC'}</span>
                  <ExternalLink size={12} />
                </a>
              </ShatteredCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;