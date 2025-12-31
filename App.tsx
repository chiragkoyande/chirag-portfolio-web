import React, { useState } from 'react';
import { ViewState } from './types';
import BackgroundGrid from './components/BackgroundGrid';
import Terminal from './components/Terminal';
import GuiOverlay from './components/GuiOverlay';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';
import Resources from './views/Resources';
import Admin from './views/Admin';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (view) {
      case ViewState.PROJECTS:
        return <Projects />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.CONTACT:
        return <Contact />;
      case ViewState.RESOURCES:
        return <Resources />;
      case ViewState.ADMIN:
        return <Admin />;
      case ViewState.HOME:
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-white selection:bg-green-500 selection:text-black">
      {/* Immersive Background */}
      <BackgroundGrid />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] z-0"></div>

      {/* HR / GUI Override Layer */}
      <GuiOverlay currentView={view} onNavigate={setView} />

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full flex flex-col transition-opacity duration-500">
        {/* Top Navigation Hints (Visual Only) */}
        <div className="absolute top-0 left-0 w-full p-4 md:p-6 hidden md:flex justify-between items-start pointer-events-none opacity-50 z-20">
          <div className="flex flex-col gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <div className="h-24 w-[1px] bg-gradient-to-b from-green-500 to-transparent"></div>
          </div>
          <div className="text-xs font-mono text-right text-gray-500">
            SYSTEM_READY<br />
            WAITING_FOR_INJECTION
          </div>
        </div>

        {/* Dynamic View Rendering */}
        <div className="flex-1 w-full h-full relative">
          {renderView()}
        </div>
      </main>

      {/* Interactive Terminal (Navigation) */}
      <Terminal currentView={view} onNavigate={setView} />

      {/* Noise Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};

export default App;