import React, { useState, useEffect } from 'react';
import { DynamicIsland } from './components/DynamicIsland';
import { Background } from './components/Background';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track scrolling to update the active section in Dynamic Island
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20">
      <Background />
      
      <DynamicIsland activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative z-10 flex flex-col w-full">
        <Home scrollToSection={scrollToSection} />
        <Projects />
        <About />
      </main>

      <footer className="py-8 text-center text-zinc-600 text-[10px] font-medium relative z-10">
        <p>© {new Date().getFullYear()} Silver. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;