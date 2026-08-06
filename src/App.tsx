import React, { useState, useEffect, useRef } from 'react';
import { ThemeMode, SectionId } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactsSection } from './components/ContactsSection';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const isProgrammaticScroll = useRef(false);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Sync dark class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Smooth Navigation Handler con blocco temporaneo dell'observer
  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    isProgrammaticScroll.current = true;

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const isMobile = window.innerWidth < 768;
        const offset = isMobile ? 70 : 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }

    // Riabilita l'observer automatico dopo che lo scroll smooth è terminato
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
  };
  

  // IntersectionObserver Unico per rilevare la sezione visibile
  useEffect(() => {
    const sections: SectionId[] = ['hero', 'timeline', 'skills', 'projects', 'contacts'];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen w-full max-w-full transition-colors duration-300 relative selection:bg-[#C97B4A] selection:text-white dark:selection:bg-[#E0955F] overflow-x-hidden"
      style={{
        backgroundColor: theme === 'light' ? '#F5F1E8' : '#1B1F23',
        color: theme === 'light' ? '#2B2822' : '#E8E6E1',
      }}
    >
      {/* Container decorativo per i Glows con overflow nascosto per non rompere il viewport mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -left-20 -top-20 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] bg-[#E0955F] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.08] dark:opacity-[0.12]" />
        <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#C97B4A] dark:bg-[#E0955F] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.05] dark:opacity-[0.10]" />
      </div>

      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="w-full max-w-full relative z-10 pt-16 md:pt-6 md:pr-16 lg:pr-20 pb-12 overflow-x-hidden">
        <HeroSection theme={theme} onNavigate={handleNavigate} />
        <TimelineSection theme={theme} />
        <SkillsSection theme={theme} />
        <ProjectsSection theme={theme} />
        <ContactsSection theme={theme} />
      </main>
    </div>
  );
}