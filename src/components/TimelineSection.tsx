import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { GraduationCap, Briefcase, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface TimelineSectionProps {
  theme: ThemeMode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ theme }) => {
  const [filter, setFilter] = useState<'all' | 'education' | 'pcto'>('all');

  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFFFF' : '#242A30';
  const cardAltBg = isLight ? '#FAF6EE' : '#1E2328';
  const borderColor = isLight ? '#E6DFD3' : '#38424D';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="timeline" className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8 relative">
      {/* Contenitore ridotto a max-w-5xl per allinearsi alla larghezza della sezione Skills */}
      <div className="max-w-5xl mx-auto w-full space-y-4">

        {/* Header Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="border-b pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full min-w-0"
          style={{ borderColor }}
        >
          <div className="flex flex-col xs:flex-row xs:items-center gap-1.5 sm:gap-3 min-w-0">
            <div className="text-[11px] font-mono uppercase tracking-widest flex items-center gap-1.5 shrink-0" style={{ color: accentColor }}>
              <Sparkles className="w-3 h-3" />
              Timeline
            </div>
            <span className="text-xs opacity-30 hidden xs:inline">|</span>

            {/* Titolo forzato ad andare a capo pulito se non c'è spazio */}
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
              Istruzione e percorso
            </h2>
          </div>

          {/* Container Filtri */}
          <div className="flex items-center gap-1 p-0.5 rounded-xl border overflow-x-auto no-scrollbar max-w-full shrink-0 self-start sm:self-auto" style={{ backgroundColor: cardBg, borderColor }}>
            {(['all', 'education', 'pcto'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${filter === t ? 'text-white shadow-xs' : 'opacity-70 hover:opacity-100'
                  }`}
                style={{ backgroundColor: filter === t ? accentColor : 'transparent' }}
              >
                {t === 'all' ? 'Tutti' : t === 'pcto' ? 'Esperienze' : 'Istruzione'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Orizzontale Compatta */}
        <div className="relative pt-1">
          {/* Tracciato connettivo */}
          <div
            className="absolute top-[18px] left-4 right-4 h-0.5 opacity-25 hidden md:block"
            style={{ backgroundColor: borderColor }}
          />

          <div className="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none snap-x snap-mandatory">
            {filteredItems.map((item, idx) => {
              const isEdu = item.type === 'education';
              const IconComponent = isEdu ? GraduationCap : Briefcase;
              const mainTag = item.keySkills?.[0] || item.coursework?.[0];

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="min-w-[250px] sm:min-w-[270px] md:min-w-0 flex-1 flex flex-col snap-start relative group"
                >
                  {/* Nodo connettivo */}
                  <div className="hidden md:flex items-center justify-center mb-2 relative z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: cardBg, borderColor: accentColor }}
                    >
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                    </div>
                  </div>

                  {/* Card Compatta */}
                  <div
                    className="p-3.5 rounded-xl border flex-1 flex flex-col justify-between transition-all shadow-2xs hover:border-amber-500/40"
                    style={{ backgroundColor: cardBg, borderColor }}
                  >
                    <div className="space-y-2">
                      {/* Header Card: Anno + Badge Tipologia */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono font-bold" style={{ color: accentColor }}>
                          {item.year}
                        </span>
                        <div
                          className="px-1.5 py-0.5 rounded border text-[9px] font-mono flex items-center gap-1 opacity-75"
                          style={{ backgroundColor: cardAltBg, borderColor }}
                        >
                          <IconComponent className="w-2.5 h-2.5" />
                          <span>{item.type === 'education' ? 'Edu' : 'PCTO'}</span>
                        </div>
                      </div>

                      {/* Titoli */}
                      <div>
                        <h3 className="text-xs font-bold tracking-tight leading-tight">{item.title}</h3>
                        <div className="text-[11px] font-medium opacity-80 mt-0.5">{item.institution}</div>
                        <div className="text-[9px] font-mono opacity-50 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-2.5 h-2.5 shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Descrizione breve */}
                      <p className="text-[11px] leading-snug opacity-75 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer pulito */}
                    {mainTag && (
                      <div className="pt-2 mt-2 border-t flex justify-end" style={{ borderColor }}>
                        <span
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded font-semibold opacity-75"
                          style={{ backgroundColor: cardAltBg }}
                        >
                          #{mainTag}
                        </span>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};