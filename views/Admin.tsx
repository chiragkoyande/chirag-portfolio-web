import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import { ResourceItem } from '../types';
import { Lock, Unlock, Upload, Plus, Trash, AlertTriangle } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Resource Form State
  const [newItem, setNewItem] = useState<Partial<ResourceItem>>({ type: 'VIDEO' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'jod@2572') { 
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('ACCESS_DENIED // INVALID_CREDENTIALS');
      setPassword('');
    }
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.title || !newItem.url) return;

    const resource: ResourceItem = {
      id: Math.random().toString(36).substr(2, 9),
      title: newItem.title,
      url: newItem.url,
      type: newItem.type as 'VIDEO' | 'ARTICLE',
      description: newItem.description || '',
      dateAdded: Date.now()
    };

    // Save to LocalStorage (Simulation of Backend)
    const existing = localStorage.getItem('chirag_resources');
    const parsed = existing ? JSON.parse(existing) : [];
    const updated = [...parsed, resource];
    localStorage.setItem('chirag_resources', JSON.stringify(updated));

    alert('RESOURCE_INJECTED_SUCCESSFULLY');
    setNewItem({ type: 'VIDEO', title: '', url: '', description: '' });
  };

  const handleClearData = () => {
    if (window.confirm('WARNING: THIS WILL WIPE ALL LOCALLY STORED RESOURCES. CONFIRM?')) {
      localStorage.removeItem('chirag_resources');
      alert('MEMORY_WIPED');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-full w-full flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-black border border-red-500/30 p-8 shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
          
          <div className="text-center mb-8">
            <Lock size={48} className="mx-auto text-red-500 mb-4 animate-bounce" />
            <GlitchText text="RESTRICTED_ACCESS" as="h1" className="text-2xl font-display font-bold text-red-500" />
            <p className="text-xs font-mono text-red-400/60 mt-2">ROOT PRIVILEGES REQUIRED</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 relative z-10">
            <input 
              type="password" 
              placeholder="ENTER_ROOT_KEY"
              className="w-full bg-black border border-red-500/30 p-3 text-red-500 font-mono focus:border-red-500 focus:outline-none placeholder-red-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <div className="text-red-500 text-xs font-mono animate-pulse">{error}</div>}
            
            <button className="w-full bg-red-900/20 border border-red-500/50 text-red-500 font-bold py-3 hover:bg-red-500 hover:text-black transition-all">
              AUTHENTICATE
            </button>
          </form>

          {/* Background Noise */}
          <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] opacity-5 pointer-events-none mix-blend-screen bg-cover"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col items-center pt-24 pb-64 px-4 overflow-y-auto">
      <div className="max-w-4xl w-full">
        <div className="flex items-center justify-between mb-8 border-b border-green-500/30 pb-4">
          <div className="flex items-center gap-3">
            <Unlock className="text-green-500" />
            <div>
              <h2 className="text-2xl font-display font-bold text-green-500">ADMIN_CONSOLE</h2>
              <p className="text-xs font-mono text-green-500/50">WRITE_ACCESS_GRANTED</p>
            </div>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs text-red-500 hover:underline">TERMINATE_SESSION</button>
        </div>

        <div className="bg-black/50 border border-green-500/20 p-6 backdrop-blur-md">
           <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
             <Plus size={16} /> UPLOAD_NEW_RESOURCE
           </h3>

           <form onSubmit={handleAddResource} className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                 <label className="text-xs text-green-500/70 font-mono mb-1 block">RESOURCE_TITLE</label>
                 <input 
                   type="text" 
                   required
                   className="w-full bg-black/80 border border-gray-700 p-2 text-white text-sm focus:border-green-500 focus:outline-none"
                   value={newItem.title}
                   onChange={e => setNewItem({...newItem, title: e.target.value})}
                 />
               </div>
               <div>
                 <label className="text-xs text-green-500/70 font-mono mb-1 block">DATA_TYPE</label>
                 <select 
                   className="w-full bg-black/80 border border-gray-700 p-2 text-white text-sm focus:border-green-500 focus:outline-none"
                   value={newItem.type}
                   onChange={e => setNewItem({...newItem, type: e.target.value as any})}
                 >
                   <option value="VIDEO">VIDEO (YOUTUBE)</option>
                   <option value="ARTICLE">ARTICLE / DOC</option>
                   <option value="NOTE">TEXT NOTE</option>
                 </select>
               </div>
             </div>

             <div>
                <label className="text-xs text-green-500/70 font-mono mb-1 block">SOURCE_URL</label>
                <input 
                  type="url" 
                  required
                  className="w-full bg-black/80 border border-gray-700 p-2 text-white text-sm focus:border-green-500 focus:outline-none font-mono text-xs"
                  placeholder="https://..."
                  value={newItem.url}
                  onChange={e => setNewItem({...newItem, url: e.target.value})}
                />
             </div>

             <div>
                <label className="text-xs text-green-500/70 font-mono mb-1 block">METADATA_DESCRIPTION</label>
                <textarea 
                   className="w-full bg-black/80 border border-gray-700 p-2 text-white text-sm focus:border-green-500 focus:outline-none resize-none h-24"
                   value={newItem.description}
                   onChange={e => setNewItem({...newItem, description: e.target.value})}
                />
             </div>

             <div className="flex justify-between items-center pt-4">
                <button 
                  type="button" 
                  onClick={handleClearData}
                  className="flex items-center gap-2 text-xs text-red-500 hover:text-red-400 border border-transparent hover:border-red-900 px-3 py-1 transition-all"
                >
                  <AlertTriangle size={12} /> PURGE_LOCAL_DB
                </button>

                <button 
                  type="submit"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-black font-bold px-6 py-2 text-sm transition-all"
                >
                  <Upload size={16} /> INJECT_DATA
                </button>
             </div>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;