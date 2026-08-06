import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { ThemeMode } from '../types';
import {
  Code2,
  Terminal,
  Server,
  Database,
  Box,
  Video,
  Cpu,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  ChevronDown,
} from 'lucide-react';

interface SkillsSectionProps {
  theme: ThemeMode;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Code: Code2,
  Terminal: Terminal,
  Server: Server,
  Database: Database,
  Box: Box,
  Video: Video,
  Cpu: Cpu,
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
  const [extractedIdx, setExtractedIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(null);

  const isLight = theme === 'light';

  const cardBg = isLight ? '#FFFFFF' : '#1E232A';
  const cardAltBg = isLight ? '#F9F7F2' : '#16191E';
  const cabinetBg = isLight ? '#FAF8F4' : '#121417';
  const borderColor = isLight ? '#E8E2D5' : '#2A3038';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return (
    <section id="skills" className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full space-y-4 sm:space-y-5">
        {/* Header Sezione Responsive */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 min-w-0" style={{ borderColor }}>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest flex items-center gap-1.5" style={{ color: accentColor }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Skills</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight mt-0.5">Competenze per Categoria</h2>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:min-w-[220px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
              <input
                type="text"
                placeholder="Cerca skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-xl border text-xs outline-none font-mono transition-all focus:ring-1"
                style={{ backgroundColor: cardBg, borderColor }}
              />
            </div>
            <span className="text-xs font-mono px-2.5 py-1.5 rounded-xl border opacity-75 shrink-0" style={{ backgroundColor: cardBg, borderColor }}>
              {totalSkillsCount} totali
            </span>
          </div>
        </div>

        {/* CABINET CONTAINER */}
        <div className="p-2 sm:p-4 rounded-2xl border shadow-xs w-full max-w-full overflow-hidden" style={{ backgroundColor: cabinetBg, borderColor }}>

          {/* VISTA MOBILE */}
          <div className="flex sm:hidden flex-col gap-2 w-full">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isOpen = extractedIdx === idx;
              const CatIcon = ICON_MAP[cat.iconName] || Code2;
              const filteredSkills = cat.skills.filter((sk) =>
                [sk.name, sk.description, sk.level].some((v) => v?.toLowerCase().includes(normalizedQuery))
              );

              return (
                <div
                  key={cat.id}
                  className="rounded-xl border overflow-hidden transition-all w-full"
                  style={{ backgroundColor: cardBg, borderColor: isOpen ? accentColor : borderColor }}
                >
                  <button
                    type="button"
                    onClick={() => setExtractedIdx(isOpen ? null : idx)}
                    className="w-full p-3 flex items-center justify-between text-left font-mono text-xs font-bold"
                    style={{ backgroundColor: isOpen ? accentColor : cardAltBg, color: isOpen ? '#FFFFFF' : 'inherit' }}
                  >
                    <div className="flex items-center gap-2 truncate min-w-0">
                      <span className="opacity-70 shrink-0">0{idx + 1}.</span>
                      <CatIcon className="w-4 h-4 shrink-0" />
                      <span className="font-sans text-sm truncate font-semibold">{cat.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-[10px] opacity-80">{cat.skills.length} voci</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-3 space-y-2" style={{ backgroundColor: cardBg }}>
                      {filteredSkills.length > 0 ? (
                        filteredSkills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            onClick={() => setSelectedSkillName(selectedSkillName === skill.name ? null : skill.name)}
                            className="p-2.5 rounded-lg border text-xs space-y-1 cursor-pointer"
                            style={{ backgroundColor: cardAltBg, borderColor }}
                          >
                            <div className="flex items-center justify-between font-bold">
                              <span>{skill.name}</span>
                              <span className="text-[9px] font-mono opacity-70 border px-1.5 py-0.5 rounded" style={{ borderColor }}>
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-[11px] opacity-80 leading-relaxed">{skill.description}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs font-mono opacity-50 text-center py-2">Nessuna skill trovata per "{searchQuery}".</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* VISTA DESKTOP */}
          <div className="hidden sm:flex items-stretch gap-2 w-full h-[460px] overflow-hidden relative">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isExtracted = extractedIdx === idx;
              const CatIcon = ICON_MAP[cat.iconName] || Code2;
              const filteredSkills = cat.skills.filter((sk) =>
                [sk.name, sk.description, sk.level].some((v) => v?.toLowerCase().includes(normalizedQuery))
              );

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setExtractedIdx(isExtracted ? null : idx);
                    setSelectedSkillName(null);
                  }}
                  style={{
                    flex: isExtracted ? 1 : '0 0 52px',
                    transition: 'flex 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: isExtracted ? cardBg : cardAltBg,
                    borderColor: isExtracted ? accentColor : borderColor,
                  }}
                  className={`rounded-xl border cursor-pointer relative flex flex-col justify-between overflow-hidden ${isExtracted ? 'shadow-md' : 'hover:border-amber-500/40 opacity-85 hover:opacity-100'
                    }`}
                >
                  <div
                    className="w-full py-2 px-3 border-b font-mono text-[10px] font-bold select-none shrink-0 flex items-center justify-between"
                    style={{
                      backgroundColor: isExtracted ? accentColor : cardBg,
                      color: isExtracted ? '#FFFFFF' : 'inherit',
                      borderColor: isExtracted ? accentColor : borderColor,
                    }}
                  >
                    <span>0{idx + 1}</span>
                    {isExtracted && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExtractedIdx(null);
                        }}
                        className="p-0.5 rounded hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                        title="Chiudi scheda"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {!isExtracted && (
                    <div className="flex-1 py-4 flex flex-col items-center justify-between select-none">
                      <div className="p-1 rounded-md border my-1" style={{ backgroundColor: cardBg, borderColor }}>
                        <CatIcon className="w-4 h-4 opacity-70" />
                      </div>
                      <div className="flex-1 flex items-center justify-center overflow-hidden">
                        <span
                          className="font-mono text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap opacity-75"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                          {cat.shortTitle}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono opacity-50">{cat.skills.length}</span>
                    </div>
                  )}

                  {isExtracted && (
                    <div className="p-5 flex-1 flex flex-col justify-between overflow-hidden w-full">
                      <div className="flex items-center justify-between border-b pb-3 shrink-0" style={{ borderColor }}>
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className="w-9 h-9 rounded-xl border flex items-center justify-center shrink-0"
                            style={{ backgroundColor: cardAltBg, borderColor, color: accentColor }}
                          >
                            <CatIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-mono uppercase tracking-wider opacity-50 block truncate">
                              Categoria 0{idx + 1}
                            </span>
                            <h3 className="text-lg font-bold tracking-tight truncate">{cat.title}</h3>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border opacity-70 shrink-0" style={{ backgroundColor: cardAltBg, borderColor }}>
                          {filteredSkills.length} voci
                        </span>
                      </div>

                      <div className="py-3 flex-1 overflow-y-auto pr-1">
                        <div className="grid grid-cols-2 gap-2.5">
                          {filteredSkills.length > 0 ? (
                            filteredSkills.map((skill, sIdx) => {
                              const isSelected = selectedSkillName === skill.name;
                              return (
                                <div
                                  key={sIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedSkillName(isSelected ? null : skill.name);
                                  }}
                                  className={`p-3 rounded-xl border transition-all cursor-pointer space-y-1 ${isSelected ? 'ring-1 ring-amber-500 shadow-xs' : 'hover:border-amber-500/40'
                                    }`}
                                  style={{ backgroundColor: cardAltBg, borderColor }}
                                >
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-bold tracking-tight truncate">{skill.name}</span>
                                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border opacity-70 shrink-0" style={{ backgroundColor: cardBg, borderColor }}>
                                      {skill.level}
                                    </span>
                                  </div>
                                  <p className="text-[11px] leading-snug opacity-75 line-clamp-2">{skill.description}</p>
                                  {isSelected && (
                                    <div className="pt-1 border-t text-[10px] font-mono flex items-center gap-1 text-amber-500" style={{ borderColor }}>
                                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                                      <span>Selezionato</span>
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          ) : (
                            <div className="col-span-full p-4 text-center text-xs font-mono opacity-50 border rounded-xl" style={{ borderColor, backgroundColor: cardAltBg }}>
                              Nessuna competenza trovata per "{searchQuery}".
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-2 border-t flex items-center justify-between text-[11px] font-mono shrink-0" style={{ borderColor }}>
                        <span className="opacity-50">Seleziona una scheda per navigare</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setExtractedIdx(idx < SKILL_CATEGORIES.length - 1 ? idx + 1 : 0);
                            setSelectedSkillName(null);
                          }}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                          style={{ backgroundColor: accentColor, color: '#FFFFFF' }}
                        >
                          <span>Successiva</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Empty State con SVG illustrativo quando tutte le schede sono chiuse */}
            {extractedIdx === null && (
              <div
                className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none h-full border border-dashed rounded-xl min-w-0"
                style={{ borderColor, backgroundColor: cardBg }}
              >
                <div className="mb-3 relative flex items-center justify-center w-28 sm:w-36 h-20 sm:h-28 shrink-0">
                  <svg width="100%" viewBox="0 0 680 320" role="img" xmlns="http://www.w3.org/2000/svg">
                    <title>Pattern decorativo in stile circuito stampato PCB</title>
                    <desc>Composizione di tracce ortogonali, pad quadrati e via circolari che richiamano un circuito stampato</desc>

                    <g fill="none" stroke="#C97B4A" stroke-width="1.5" stroke-linecap="round">
                      <path d="M40 60 L160 60 L160 110 L260 110" />
                      <path d="M40 160 L100 160 L100 220 L200 220 L200 260" />
                      <path d="M260 110 L260 180 L340 180" />
                      <path d="M340 180 L340 60 L460 60 L460 130" />
                      <path d="M460 130 L560 130 L560 200" />
                      <path d="M200 220 L280 220 L280 280 L400 280" />
                      <path d="M400 280 L400 220 L500 220 L500 260 L620 260" />
                      <path d="M560 200 L620 200 L620 140" />
                    </g>

                    <g fill="#1B1F23" stroke="#C97B4A" stroke-width="1.5">
                      <rect x="30" y="50" width="20" height="20" rx="2" />
                      <rect x="190" y="250" width="20" height="20" rx="2" />
                      <rect x="330" y="270" width="20" height="20" rx="2" />
                      <rect x="610" y="130" width="20" height="20" rx="2" />
                    </g>

                    <g fill="#E0955F">
                      <circle cx="160" cy="110" r="5" />
                      <circle cx="260" cy="110" r="5" />
                      <circle cx="340" cy="180" r="5" />
                      <circle cx="460" cy="130" r="5" />
                      <circle cx="200" cy="220" r="5" />
                      <circle cx="560" cy="200" r="5" />
                      <circle cx="280" cy="280" r="5" />
                      <circle cx="500" cy="260" r="5" />
                    </g>

                    <g fill="none" stroke="#C97B4A" stroke-width="1" opacity="0.5">
                      <rect x="440" y="40" width="60" height="40" rx="2" />
                      <line x1="450" y1="40" x2="450" y2="30" />
                      <line x1="470" y1="40" x2="470" y2="30" />
                      <line x1="490" y1="40" x2="490" y2="30" />
                      <line x1="450" y1="80" x2="450" y2="90" />
                      <line x1="470" y1="80" x2="470" y2="90" />
                      <line x1="490" y1="80" x2="490" y2="90" />
                    </g>
                  </svg>
                </div>

                <p className="font-mono text-xs sm:text-sm font-semibold max-w-xs leading-relaxed opacity-75">
                  Seleziona una scheda per esplorare le competenze
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};