import React, { useState } from 'react';
import GlitchText from '../components/GlitchText';
import ShatteredCard from '../components/ShatteredCard';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, Send, Loader2, CheckCircle, Wifi } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'IDLE' | 'ENCRYPTING' | 'TRANSMITTING' | 'SUCCESS'>('IDLE');
  const [log, setLog] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Start Simulation
    setStatus('ENCRYPTING');
    setLog('INITIATING PGP HANDSHAKE...');

    // Simulate Encryption Delay
    await new Promise(r => setTimeout(r, 800));
    setLog('PACKAGING PAYLOAD...');

    // Simulate Transmission preparation
    await new Promise(r => setTimeout(r, 800));
    setStatus('TRANSMITTING');
    setLog('ESTABLISHING MAILTO UPLINK...');

    // Construct Mailto Link
    // Using the specific email requested: chiragk.dev@gmail.com
    const subject = `[CYBER_UPLINK] Message from ${formState.name}`;
    const body = `SENDER_ID: ${formState.name}\nRETURN_PATH: ${formState.email}\n\n// PAYLOAD_START\n${formState.message}\n// PAYLOAD_END`;
    const mailtoLink = `mailto:chiragk.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger Mail Client
    window.location.href = mailtoLink;

    // Allow time for browser to handle the protocol handler
    await new Promise(r => setTimeout(r, 1500));

    // Success State
    setStatus('SUCCESS');
    setLog('PROTOCOL HANDOFF COMPLETE.');

    // Reset Form
    setFormState({ name: '', email: '', message: '' });

    // Reset back to Idle after delay
    setTimeout(() => {
      setStatus('IDLE');
      setLog('');
    }, 4000);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-start md:justify-center pt-8 md:pt-20 pb-32 md:pb-64 px-4 overflow-y-auto">
      <div className="max-w-2xl w-full">
        <div className="mb-6 md:mb-8 text-center">
          <GlitchText text="ESTABLISH_UPLINK" as="h2" className="text-2xl md:text-4xl font-display font-bold text-white" />
          <p className="font-mono text-green-500/60 mt-2 text-xs md:text-sm flex items-center justify-center gap-2">
            <Wifi size={14} className={status === 'TRANSMITTING' ? 'animate-ping' : ''} />
            SECURE CHANNELS {status === 'IDLE' ? 'OPEN' : 'BUSY'}
          </p>
        </div>

        <ShatteredCard className="w-full relative overflow-hidden">
          {/* Status Overlay */}
          {status !== 'IDLE' && (
            <div className="absolute inset-0 z-20 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-4 font-mono">
              {status === 'SUCCESS' ? (
                <CheckCircle size={48} className="text-green-500 animate-[bounce_1s_infinite]" />
              ) : (
                <Loader2 size={48} className="text-green-500 animate-spin" />
              )}

              <div className="text-green-400 text-sm tracking-widest">{log}</div>

              {/* Simulated Progress Bar */}
              {status !== 'SUCCESS' && (
                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 animate-[loading_2s_ease-in-out_infinite] w-full origin-left scale-x-0"></div>
                </div>
              )}
            </div>
          )}

          <div className="mb-6 text-center text-xs font-mono text-gray-500">
            ENCRYPTED TRANSMISSION FORM
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-mono text-purple-400">TARGET_ID (NAME)</label>
              <input
                type="text"
                required
                className="w-full bg-black/50 border border-green-500/30 p-3 text-white font-mono focus:border-green-400 focus:outline-none focus:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all disabled:opacity-50"
                value={formState.name}
                onChange={e => setFormState({ ...formState, name: e.target.value })}
                disabled={status !== 'IDLE'}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-purple-400">RETURN_ADDRESS (EMAIL)</label>
              <input
                type="email"
                required
                className="w-full bg-black/50 border border-green-500/30 p-3 text-white font-mono focus:border-green-400 focus:outline-none focus:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all disabled:opacity-50"
                value={formState.email}
                onChange={e => setFormState({ ...formState, email: e.target.value })}
                disabled={status !== 'IDLE'}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-purple-400">DATA_PAYLOAD (MESSAGE)</label>
              <textarea
                required
                rows={4}
                className="w-full bg-black/50 border border-green-500/30 p-3 text-white font-mono focus:border-green-400 focus:outline-none focus:shadow-[0_0_15px_rgba(74,222,128,0.2)] transition-all disabled:opacity-50 resize-none"
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                disabled={status !== 'IDLE'}
              />
            </div>

            <button
              type="submit"
              disabled={status !== 'IDLE'}
              className="w-full group relative px-6 py-3 bg-green-900/20 border border-green-500/50 overflow-hidden transition-all hover:bg-green-500/10 hover:border-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity">
                <div className="w-[200%] h-[200%] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00ff00_10px,#00ff00_20px)] animate-[spin_4s_linear_infinite]"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center gap-2 text-green-400 font-display font-bold tracking-wider group-hover:text-green-300">
                <Send size={18} />
                <span>INJECT_PACKET</span>
              </div>
            </button>

            {/* Social Links Moved to Bottom of Form */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-black/40 border border-white/10 hover:border-green-500 hover:bg-green-500/10 text-gray-300 hover:text-green-400 transition-all group rounded-sm"
              >
                <Github size={16} />
                <span className="text-[10px] font-mono tracking-wider">GITHUB</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-black/40 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 text-gray-300 hover:text-blue-400 transition-all group rounded-sm"
              >
                <Linkedin size={16} />
                <span className="text-[10px] font-mono tracking-wider">LINKEDIN</span>
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-black/40 border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 text-gray-300 hover:text-purple-400 transition-all group rounded-sm"
              >
                <Mail size={16} />
                <span className="text-[10px] font-mono tracking-wider">EMAIL</span>
              </a>
            </div>
          </form>
        </ShatteredCard>
      </div>
    </div>
  );
};

export default Contact;