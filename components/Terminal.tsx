import React, { useState, useEffect, useRef } from 'react';
import { TerminalLog, ViewState } from '../types';
import { INITIAL_LOGS } from '../constants';
import { processCommand } from '../services/geminiService';
import { Terminal as TerminalIcon, Send, Wifi, Battery, ShieldAlert, ChevronDown, ChevronUp, Minus, Maximize2 } from 'lucide-react';

interface TerminalProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Terminal: React.FC<TerminalProps> = ({ currentView, onNavigate }) => {
  const [logs, setLogs] = useState<TerminalLog[]>(INITIAL_LOGS);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs, isExpanded]);

  // Auto-collapse logic: Keep expanded on HOME, collapse on others to reduce clutter
  useEffect(() => {
    if (currentView === ViewState.HOME) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [currentView]);

  // Keep focus on input when expanded
  useEffect(() => {
    if (isExpanded) {
      const handleClick = () => inputRef.current?.focus();
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isExpanded]);

  const addLog = (type: TerminalLog['type'], content: string) => {
    setLogs(prev => [...prev, {
      id: Math.random().toString(36).substr(2, 9),
      type,
      content,
      timestamp: Date.now()
    }]);
  };

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const cmd = input.trim();
    setInput('');
    addLog('input', `> ${cmd}`);
    setIsProcessing(true);

    // AI Processing
    try {
      addLog('system', 'ENCRYPTING PACKET... SENDING TO NEURAL NET...');
      const response = await processCommand(cmd);

      if (response.action === 'navigate' && response.target) {
        addLog('output', `>> ${response.message.toUpperCase()}`);
        setTimeout(() => {
          onNavigate(response.target as ViewState);
          addLog('system', `VIEWPORT SHIFT: ${response.target}`);
        }, 800);
      } else if (response.action === 'info') {
        // Handle multiline messages (like the help menu)
        const lines = response.message.split('\n');
        lines.forEach(line => addLog('output', `>> ${line}`));
      } else {
        addLog('error', `!! ${response.message}`);
      }
    } catch (err) {
      addLog('error', 'CRITICAL FAILURE IN COMMAND EXECUTION');
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-2 md:p-4 pointer-events-none flex flex-col items-center justify-end transition-all duration-300">
      <div className="max-w-4xl mx-auto w-full pointer-events-auto">
        {/* Hologram Base */}
        <div className={`relative bg-black/90 border-x border-t border-green-500/30 rounded-t-lg backdrop-blur-xl shadow-[0_-10px_40px_rgba(74,222,128,0.1)] overflow-hidden transition-all duration-500 ease-out ${isExpanded ? 'translate-y-0' : 'translate-y-[calc(100%-48px)] hover:translate-y-[calc(100%-56px)]'}`}>

          {/* Header Bar (Always Visible) */}
          <div
            className="flex items-center justify-between px-4 py-3 bg-green-900/20 border-b border-green-500/20 cursor-pointer group hover:bg-green-900/30 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center gap-3">
              {/* Pulse Indicator */}
              <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>

              <div className="flex items-center gap-2 text-xs text-green-400 font-mono">
                <TerminalIcon size={14} />
                <span className="hidden sm:inline">TERMINAL_V.2.0.4 :: {isExpanded ? 'ACTIVE' : 'IDLE'}</span>
                <span className="sm:hidden">TERM_V2</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-green-400/70">
              <div className="hidden sm:flex items-center gap-1"><Wifi size={12} /> ONLINE</div>
              <div className="hidden sm:flex items-center gap-1"><ShieldAlert size={12} /> SECURE</div>

              <button
                onClick={toggleExpand}
                className="p-1 hover:bg-green-500/20 rounded transition-colors text-green-400"
              >
                {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </button>
            </div>
          </div>

          {/* Collapsible Content Area */}
          <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'}`}>

            {/* Logs Area */}
            <div className="h-48 overflow-y-auto p-4 font-mono text-sm space-y-2 relative scroll-smooth">
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10 opacity-20"></div>

              {logs.map((log) => (
                <div key={log.id} className={`break-words ${log.type === 'input' ? 'text-white font-bold' :
                    log.type === 'error' ? 'text-red-500' :
                      log.type === 'system' ? 'text-purple-400 italic text-xs' :
                        'text-green-400'
                  }`}>
                  <span className="opacity-30 mr-2 text-xs">[{new Date(log.timestamp).toLocaleTimeString([], { hour12: false })}]</span>
                  <span className="whitespace-pre-wrap">{log.content}</span>
                </div>
              ))}
              {isProcessing && (
                <div className="text-green-500 animate-pulse">
                  Processing... <span className="inline-block w-2 h-4 bg-green-500 ml-1"></span>
                </div>
              )}
              <div ref={logsEndRef} />
            </div>

            {/* Hint for HR/Users */}
            <div className="px-4 pb-1 text-[10px] text-gray-500 font-mono uppercase tracking-wider border-t border-green-500/10 pt-2 flex justify-between items-center bg-black/40">
              <span>:: System Tip: Type <span className="text-green-400">"HELP"</span> or <span className="text-green-400">"HR"</span> for command protocols</span>
              <span className="animate-pulse text-green-500/50">_</span>
            </div>

            {/* Input Area */}
            <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-black/50 border-t border-green-500/10">
              <span className="text-green-500 mr-2 font-bold animate-pulse">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-green-100 placeholder-green-800 font-mono"
                placeholder="Inject command..."
                autoComplete="off"
              />
              <button type="submit" className="text-green-500 hover:text-green-300 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;