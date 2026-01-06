import React, { useState } from 'react';
import { ViewState } from './types';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundGrid from './components/BackgroundGrid';
import GuiOverlay from './components/GuiOverlay';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Experience from './views/Experience';
import Contact from './views/Contact';
import Resources from './views/Resources';
import Admin from './views/Admin';

const AppContent: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (view) {
      case ViewState.PROJECTS:
        return <Projects />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.EXPERIENCE:
        return <Experience />;
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
      {/* Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Immersive Background */}
      <BackgroundGrid />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] z-0"></div>

      {/* Navigation Overlay */}
      <GuiOverlay currentView={view} onNavigate={setView} />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Main Content Area - with top padding for fixed navbar */}
      <main className="relative z-10 w-full h-full pt-14 md:pt-16 overflow-y-auto transition-opacity duration-500">
        {/* Page Transition Wrapper */}
        <PageTransition viewKey={view}>
          {renderView()}
        </PageTransition>
      </main>

      {/* Noise Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }}></div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;