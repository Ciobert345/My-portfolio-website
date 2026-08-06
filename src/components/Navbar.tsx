import React, { useState, useEffect } from 'react';
import { User, GraduationCap, Layers, FolderGit2, Mail, Download, Sun, Moon, Menu, X } from 'lucide-react';
import { SectionId, ThemeMode } from '../types';
import { downloadCurriculumPDF } from "../utils/downloadCurriculumPDF";
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: SectionId; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'hero', label: 'About', icon: User },
  { id: 'timeline', label: 'Timeline', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contacts', label: 'Contact', icon: Mail },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // 1. Traccia lo scroll in tempo reale e aggiorna la sezione attiva nel genitore


  // 2. Gestione fluida della navigazione al click per evitare saltellamenti errati
  const handleScrollToSection = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      // Offset per bilanciare l'header su mobile o dare spazio in cima
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const isLight = theme === 'light';
  const navBg = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(36, 42, 48, 0.9)';
  const borderColor = isLight ? '#E6DFD3' : '#38424D';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  return (
    <>
      {/* Desktop Vertical Floating Right Navigation Bar */}
      <aside className="hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
        {/* Sostituisci questo blocco in Navbar.tsx */}
        <nav
          className="flex flex-col items-center p-2 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-300"
          style={{
            backgroundColor: navBg,
            borderColor: borderColor,
          }}
          aria-label="Floating Vertical Navigation"
        >
          {/* Logo / Monogram */}
          <button
            onClick={() => handleScrollToSection('hero')}
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs transition-transform cursor-pointer overflow-hidden"
            style={{ backgroundColor: accentColor }}
            title="Robert Ciobanu - Back to top"
          >
            <img
              src={isLight ? '/images/logoNavD.png' : '/images/logoNavL.png'}
              alt="R"
              className="w-6 h-6"
            />
          </button>

          <div className="w-6 h-[1px] opacity-20 bg-current my-3" />

          {/* Nav Items */}
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <div key={item.id} className="relative group flex justify-center">
                  <button
                    onClick={() => handleScrollToSection(item.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer relative ${isActive
                      ? 'shadow-md text-white font-bold scale-105'
                      : 'opacity-65 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    style={{
                      backgroundColor: isActive ? accentColor : 'transparent',
                    }}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>

                  {/* Floating Tooltip (Left side) */}
                  <div
                    className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl border text-white z-50"
                    style={{
                      backgroundColor: isLight ? '#2B2822' : '#1B1F23',
                      borderColor: '#ffffff20',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-6 h-[1px] opacity-20 bg-current my-3" />

          {/* Utilities: Theme Toggle & CV Download */}
          <div className="flex flex-col gap-2">
            {/* Theme Switcher */}
            <div className="relative group flex justify-center">
              <button
                onClick={onToggleTheme}
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                style={{ borderColor }}
                title={`Switch to ${isLight ? 'Dark' : 'Light'} theme`}
                aria-label="Toggle Theme"
              >
                {isLight ? (
                  <Moon className="w-4 h-4 text-[#2B2822]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#E0955F]" />
                )}
              </button>
              <div
                className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl border text-white z-50"
                style={{
                  backgroundColor: isLight ? '#2B2822' : '#1B1F23',
                  borderColor: '#ffffff20',
                }}
              >
                {isLight ? 'Dark Mode' : 'Light Mode'}
              </div>
            </div>

            {/* Download CV PDF */}
            <div className="relative group flex justify-center">
              <button
                onClick={downloadCurriculumPDF}
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                style={{ borderColor, color: accentColor }}
                title="Download CV PDF"
                aria-label="Download CV PDF"
              >
                <Download className="w-4 h-4" />
              </button>
              <div
                className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl border text-white z-50"
                style={{
                  backgroundColor: isLight ? '#2B2822' : '#1B1F23',
                  borderColor: '#ffffff20',
                }}
              >
                Download CV PDF
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Mobile Top Floating Bar */}
      <header className="md:hidden fixed top-3 left-4 right-4 z-50">
        <div
          className="rounded-2xl px-4 py-2.5 border shadow-lg backdrop-blur-xl flex items-center justify-between"
          style={{
            backgroundColor: navBg,
            borderColor: borderColor,
          }}
        >
          {/* Mobile Brand */}
          <button
            onClick={() => handleScrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer text-left"
          >
            <div
              className="w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center text-white shadow-xs"
              style={{ backgroundColor: accentColor }}
            >
              <img
                src={isLight ? '/images/logoNavD.png' : '/images/logoNavL.png'}
                alt="RC"
                className="w-8 h-8 rounded-xl object-contain shadow-xs"
              />
            </div>
            <span className="font-extrabold text-xs tracking-tight">Robert Ciobanu</span>
          </button>

          {/* Right Mobile Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-xl flex items-center justify-center border"
              style={{ borderColor }}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-3.5 h-3.5 text-[#2B2822]" /> : <Sun className="w-3.5 h-3.5 text-[#E0955F]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 rounded-xl flex items-center justify-center border cursor-pointer"
              style={{ borderColor }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 p-3 rounded-2xl border shadow-xl backdrop-blur-xl flex flex-col gap-2"
              style={{
                backgroundColor: isLight ? '#FFFFFF' : '#242A30',
                borderColor,
              }}
            >
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all text-left ${isActive ? 'text-white font-bold' : 'opacity-80'
                      }`}
                    style={{
                      backgroundColor: isActive ? accentColor : (isLight ? '#FAF6EE' : '#1E2328'),
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    {isActive && <span className="text-[10px] font-mono uppercase">Active</span>}
                  </button>
                );
              })}

              <div className="pt-2 border-t mt-1" style={{ borderColor }}>
                <button
                  onClick={() => {
                    downloadCurriculumPDF();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  style={{ backgroundColor: accentColor }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download CV PDF
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>

  );

};