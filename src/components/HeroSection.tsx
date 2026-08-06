import React from 'react';
import { ROBERT_INFO } from '../data/portfolioData';
import { ThemeMode, SectionId } from '../types';
import { MapPin, Mail, Github, ArrowRight, Download, GraduationCap, Award, Terminal, Code2, Globe } from 'lucide-react';
import { downloadCurriculumPDF } from "../utils/downloadCurriculumPDF";import robertProfileImg from '../assets/images/user.jpg';
import { motion } from 'motion/react';

interface HeroSectionProps {
  theme: ThemeMode;
  onNavigate: (section: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme, onNavigate }) => {
  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFFFF' : '#242A30';
  const cardAltBg = isLight ? '#FAF6EE' : '#1E2328';
  const borderColor = isLight ? '#E6DFD3' : '#38424D';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  const infoItems = [
    {
      icon: GraduationCap,
      label: 'Instruzione',
      title: 'Scienze Informatiche',
      subtitle: 'Università degli Studi di Trento',
      hasGlobe: false,
      offset: 'lg:translate-x-0',
    },
    {
      icon: Award,
      label: 'Diploma di Maturità',
      title: '85/100',
      subtitle: 'ITT G. Chilesotti (Informatica)',
      hasGlobe: false,
      offset: 'lg:translate-x-6',
    },
    {
      icon: Terminal,
      label: 'Focus & Languages',
      title: 'Reti, C, C++, Java, Web, Databases',
      subtitle: 'Italian • English • Romanian',
      hasGlobe: true,
      offset: 'lg:-translate-x-2',
    },
  ];

  return (
    <section
      id="hero"
      className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-10 relative overflow-hidden max-w-full"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">

        {/* Watermark tipografico protetto da overflow */}
        <div
          aria-hidden
          className="pointer-events-none select-none absolute right-0 top-16 sm:top-8 text-[5rem] sm:text-[9rem] lg:text-[11rem] font-extrabold leading-none tracking-tighter opacity-[0.045] dark:opacity-[0.07] z-0 overflow-hidden max-w-full"
          style={{ color: accentColor }}
        >
          RC
        </div>

        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-8 sm:mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            Schio, Italia
          </div>

          <a
            href={ROBERT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-xl text-xs font-mono opacity-75 border flex items-center gap-1.5 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </motion.div>

        {/* Stage principale */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-3 order-1 mx-auto lg:mx-0 w-full max-w-[220px] lg:max-w-none lg:-mr-10 lg:z-20"
          >
            <div className="relative">
              <div
                className="absolute -top-2 -left-2 w-full aspect-[3/4] rounded-2xl border hidden sm:block"
                style={{ borderColor: accentColor + '35' }}
              />
              <div
                className="relative aspect-[3/4] rounded-2xl border shadow-xs group overflow-hidden"
                style={{ borderColor, backgroundColor: cardAltBg }}
              >
                <img
                  src={robertProfileImg}
                  alt="Robert Ciobanu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono opacity-60 px-0.5">
              <span className="font-bold">UniTrento</span>
              <span style={{ color: accentColor }}>01</span>
            </div>
          </motion.div>

          {/* Contenuto centrale */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 order-2 flex flex-col justify-center lg:pl-2 lg:-ml-4 xl:ml-0 space-y-6 min-w-0"
          >
            <div className="flex gap-4">
              <div
                className="w-1 shrink-0 rounded-full self-stretch min-h-[120px] hidden sm:block"
                style={{ backgroundColor: accentColor }}
              />
              <div className="space-y-3 min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
                  Scienze informatiche
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[0.95] break-words">
                  Robert
                  <span className="block" style={{ color: accentColor }}>
                    Ciobanu
                  </span>
                </h1>
                <p className="text-sm sm:text-base font-bold opacity-80 max-w-sm pt-1">
                  Studente Università di Trento
                </p>
                <p className="text-xs sm:text-sm leading-relaxed opacity-75 max-w-sm">
                  Studente di scienze informatiche con la passione per lo sviluppo software, la sistemistica e nella gestione di infrastrutture. Appassionato di programmazione, sviluppo web e tecnologie emergenti.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:pl-5">
              <motion.button
                onClick={() => onNavigate('projects')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-xs flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                style={{ backgroundColor: accentColor }}
              >
                <Code2 className="w-3.5 h-3.5" />
                Progetti
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.button
                onClick={downloadCurriculumPDF}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-1.5 cursor-pointer"
                style={{ backgroundColor: cardBg, borderColor }}
              >
                <Download className="w-3.5 h-3.5 opacity-80" />
                CV PDF
              </motion.button>

              <motion.a
                href={`mailto:${ROBERT_INFO.email}`}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-1.5 cursor-pointer"
                style={{ backgroundColor: cardBg, borderColor }}
              >
                <Mail className="w-3.5 h-3.5 opacity-80" style={{ color: accentColor }} />
                Contatti
              </motion.a>
            </div>
          </motion.div>

          {/* Info sfalsate */}
          <div className="lg:col-span-3 xl:col-span-4 order-3 relative flex flex-col gap-3 lg:pt-6">
            <div
              className="hidden lg:block absolute left-3 top-8 bottom-8 w-px opacity-40"
              style={{ backgroundColor: borderColor }}
            />

            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.14 + index * 0.07,
                    type: 'spring',
                    stiffness: 400,
                    damping: 28,
                  }}
                  className={`relative p-3.5 rounded-2xl border shadow-xs flex items-start gap-3 transition-colors hover:border-amber-500/40 ${item.offset}`}
                  style={{ backgroundColor: cardBg, borderColor }}
                >
                  <div
                    className="hidden lg:flex absolute -left-[7px] top-5 w-3.5 h-3.5 rounded-full border-2 items-center justify-center"
                    style={{ backgroundColor: cardBg, borderColor: accentColor }}
                  >
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                  </div>

                  <div
                    className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center border shadow-2xs"
                    style={{ backgroundColor: cardAltBg, borderColor, color: accentColor }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider opacity-60">{item.label}</div>
                    <div className="text-xs font-bold mt-0.5 leading-snug">{item.title}</div>
                    <div className="text-[11px] opacity-75 flex items-center gap-1 mt-0.5">
                      {item.hasGlobe && <Globe className="w-3 h-3 text-amber-500 shrink-0" />}
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="relative z-10 mt-10 pt-4 border-t flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono uppercase tracking-widest opacity-50"
          style={{ borderColor }}
        >
          <span className="ml-auto hidden sm:inline" style={{ color: accentColor }}>
            Portfolio 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
};