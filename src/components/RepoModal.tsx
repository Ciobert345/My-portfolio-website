import React from 'react';
import { GitHubRepo, ThemeMode } from '../types';
import { X, ExternalLink, Star, GitFork, Calendar, Code, Shield, Terminal, ArrowRight } from 'lucide-react';

interface RepoModalProps {
  repo: GitHubRepo;
  theme: ThemeMode;
  onClose: () => void;
}

export const RepoModal: React.FC<RepoModalProps> = ({ repo, theme, onClose }) => {
  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFFFF' : '#242A30';
  const cardAltBg = isLight ? '#FAF6EE' : '#1E2328';
  const borderColor = isLight ? '#E6DFD3' : '#323A44';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div
        className="max-w-xl w-full p-6 sm:p-8 rounded-3xl border shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: cardBg, borderColor }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold" style={{ backgroundColor: cardAltBg, color: accentColor, border: `1px solid ${borderColor}` }}>
            {repo.language || 'Code Repository'}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest opacity-60">GitHub Public Repo</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <span>{repo.name}</span>
          </h3>
          <p className="text-xs font-mono opacity-60 mt-0.5">{repo.full_name}</p>
        </div>

        <p className="text-sm leading-relaxed opacity-90">
          {repo.description || 'Comprehensive software engineering repository detailing architectural patterns and implementation source files.'}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl border text-center font-mono text-xs" style={{ backgroundColor: cardAltBg, borderColor }}>
          <div>
            <div className="opacity-60 text-[10px] uppercase">Stars</div>
            <div className="font-bold flex items-center justify-center gap-1 mt-0.5">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              {repo.stargazers_count}
            </div>
          </div>
          <div>
            <div className="opacity-60 text-[10px] uppercase">Forks</div>
            <div className="font-bold flex items-center justify-center gap-1 mt-0.5">
              <GitFork className="w-3.5 h-3.5" />
              {repo.forks_count}
            </div>
          </div>
          <div>
            <div className="opacity-60 text-[10px] uppercase">Last Push</div>
            <div className="font-bold mt-0.5">
              {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        </div>

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider mb-2 opacity-70">Repository Topics</h4>
            <div className="flex flex-wrap gap-1.5">
              {repo.topics.map((t, i) => (
                <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-xl border" style={{ backgroundColor: cardAltBg, borderColor }}>
                  #{t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CLI Quick Clone Snippet */}
        <div className="p-4 rounded-2xl border font-mono text-xs space-y-2" style={{ backgroundColor: isLight ? '#1B1F23' : '#15181C', borderColor: '#323A44', color: '#E8E6E1' }}>
          <div className="flex items-center justify-between opacity-60 text-[10px]">
            <span>Git Clone CLI Command</span>
            <span>Bash</span>
          </div>
          <div className="text-emerald-400 select-all overflow-x-auto py-1">
            git clone {repo.html_url}.git
          </div>
        </div>

        <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor }}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold border"
            style={{ borderColor }}
          >
            Close
          </button>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 cursor-pointer shadow-md"
            style={{ backgroundColor: accentColor }}
          >
            Open Repository on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
