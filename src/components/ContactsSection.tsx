import React, { useState } from 'react';
import { ROBERT_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { Mail, Github, Linkedin, Copy, Check, Download, ArrowUpRight, Sparkles } from 'lucide-react';
import { downloadCurriculumPDF } from '../utils/downloadCurriculumPDF';
import { motion } from 'motion/react';

interface ContactsSectionProps {
  theme: ThemeMode;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ theme }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFFFF' : '#242A30';
  const cardAltBg = isLight ? '#FAF6EE' : '#1E2328';
  const borderColor = isLight ? '#E6DFD3' : '#38424D';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contacts"
      className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-12 sm:py-16 relative"
    >
      <div className="max-w-5xl mx-auto w-full space-y-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-b pb-4 flex items-end justify-between gap-4" 
          style={{ borderColor }}
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-widest flex items-center gap-2" style={{ color: accentColor }}>
              <Sparkles className="w-3.5 h-3.5" />
              Contact
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
              Contattami
            </h2>
          </div>
        </motion.div>

        {/* Bento Grid per i canali di contatto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Email Card (Copia rapida) */}
          <div 
            className="p-5 rounded-2xl border flex flex-col justify-between gap-6 transition-all hover:border-amber-500/40"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <div className="flex items-center justify-between">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs"
                style={{ backgroundColor: cardAltBg, borderColor, color: accentColor }}
              >
                <Mail className="w-4 h-4" />
              </div>
              <button
                onClick={() => copyToClipboard(ROBERT_INFO.email, 'email')}
                className="px-2.5 py-1 rounded-lg border text-xs font-mono flex items-center gap-1.5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                style={{ borderColor }}
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 opacity-60" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider opacity-50">Direct Email</span>
              <a 
                href={`mailto:${ROBERT_INFO.email}`}
                className="block text-sm font-bold truncate hover:underline mt-0.5"
              >
                {ROBERT_INFO.email}
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href={ROBERT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border flex flex-col justify-between gap-6 transition-all hover:border-amber-500/40 group cursor-pointer"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <div className="flex items-center justify-between">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs"
                style={{ backgroundColor: cardAltBg, borderColor, color: accentColor }}
              >
                <Github className="w-4 h-4" />
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider opacity-50">Repositories</span>
              <div className="text-sm font-bold mt-0.5 group-hover:underline">
                github.com/{ROBERT_INFO.githubUser}
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={ROBERT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl border flex flex-col justify-between gap-6 transition-all hover:border-amber-500/40 group cursor-pointer"
            style={{ backgroundColor: cardBg, borderColor }}
          >
            <div className="flex items-center justify-between">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs"
                style={{ backgroundColor: cardAltBg, borderColor, color: accentColor }}
              >
                <Linkedin className="w-4 h-4" />
              </div>
              <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider opacity-50">Network</span>
              <div className="text-sm font-bold mt-0.5 group-hover:underline">
                linkedin.com/in/robert-ciobanu
              </div>
            </div>
          </a>
        </motion.div>

        {/* Banner finale Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: cardAltBg, borderColor }}
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-sm font-bold">Vuoi consultare il mio profilo completo offline?</h3>
            <p className="text-xs opacity-70">Puoi scaricare una copia in formato PDF del Curriculum Vitae aggiornato.</p>
          </div>

          <button
            onClick={downloadCurriculumPDF}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            <Download className="w-3.5 h-3.5" />
            Download Curriculum (PDF)
          </button>
        </motion.div>

        {/* Footer unico di chiusura pagina */}
        <div 
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono opacity-50 uppercase tracking-wider"
          style={{ borderColor }}
        >
          <span>© {new Date().getFullYear()} Robert Ciobanu</span>
          <span>Schio (VI) Italia</span>
        </div>

      </div>
    </section>
  );
};