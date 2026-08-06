import React, { useState, useEffect } from 'react';
import { FALLBACK_REPOS } from '../data/portfolioData';
import { ThemeMode, GitHubRepo } from '../types';
import { FolderGit2, Star, GitFork, ExternalLink, RefreshCw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsSectionProps {
  theme: ThemeMode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLiveApi, setIsLiveApi] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFFFF' : '#242A30';
  const cardAltBg = isLight ? '#FAF6EE' : '#1E2328';
  const borderColor = isLight ? '#E6DFD3' : '#323A44';
  const accentColor = isLight ? '#C97B4A' : '#E0955F';

  // Fetch live GitHub Repos for user ciobert345
  const fetchGitHubRepos = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.github.com/users/ciobert345/repos?sort=updated&per_page=30');
      if (res.ok) {
        const data: GitHubRepo[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setIsLiveApi(true);
        } else {
          setRepos(FALLBACK_REPOS);
          setIsLiveApi(false);
        }
      } else {
        setRepos(FALLBACK_REPOS);
        setIsLiveApi(false);
      }
    } catch (err) {
      setRepos(FALLBACK_REPOS);
      setIsLiveApi(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  // Responsive items per page (3 on desktop, 2 on tablet, 1 on mobile)
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(repos.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleRepos = repos.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-10 sm:py-14 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full space-y-6">

        {/* Section Header with Carousel Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4"
          style={{ borderColor }}
        >
          <div>
            <div className="text-xs font-mono uppercase tracking-widest flex items-center gap-2" style={{ color: accentColor }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>GitHub Repositories</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Progetti
            </h2>
          </div>

          {/* Controls: Refresh, Slide Prev/Next */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={fetchGitHubRepos}
              disabled={loading}
              className="p-2 rounded-xl border hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center text-xs gap-1.5"
              style={{ borderColor }}
              title="Refresh GitHub Repos"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <div className="h-5 w-[1px] opacity-20 bg-current mx-1" />

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl border hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center"
                style={{ borderColor, backgroundColor: cardBg }}
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono px-2 opacity-70 min-w-[3.5rem] text-center">
                {currentIndex + 1} / {totalPages || 1}
              </span>

              <button
                onClick={handleNext}
                className="p-2 rounded-xl border hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer flex items-center justify-center"
                style={{ borderColor, backgroundColor: cardBg }}
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Carousel Content Container */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {visibleRepos.map((repo, idx) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className="p-5 rounded-2xl border shadow-xs flex flex-col justify-between transition-colors hover:border-amber-500/40 dark:border-[#ffffff08] h-full"
                  style={{ backgroundColor: cardBg, borderColor }}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <FolderGit2 className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                        <h3 className="font-bold text-sm truncate hover:underline cursor-pointer" title={repo.name}>
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                          </a>
                        </h3>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all shrink-0"
                        title="View on GitHub"
                      >
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 hover:opacity-100" />
                      </a>
                    </div>

                    <p className="text-xs leading-relaxed opacity-75 line-clamp-3">
                      {repo.description || 'No description provided.'}
                    </p>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {repo.topics.slice(0, 3).map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded border opacity-80"
                            style={{ backgroundColor: cardAltBg, borderColor }}
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Meta */}
                  <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono opacity-80" style={{ borderColor }}>
                    {repo.language ? (
                      <span className="flex items-center gap-1 font-semibold">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                        {repo.language}
                      </span>
                    ) : (
                      <span />
                    )}

                    <div className="flex items-center gap-2.5">
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3 h-3 opacity-60" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="h-1.5 rounded-full transition-all cursor-pointer"
              style={{
                width: currentIndex === idx ? '1.5rem' : '0.375rem',
                backgroundColor: currentIndex === idx ? accentColor : borderColor,
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};



