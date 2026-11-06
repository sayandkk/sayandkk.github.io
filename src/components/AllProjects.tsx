import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  Search,
  X,
  ArrowLeft,
  SlidersHorizontal,
  FolderX
} from 'lucide-react';
import { projects, projectFilters, Project } from '../data/projectsData';

const AllProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by category and search text
  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.note && p.note.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  // Get count for each category
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  return (
    <div className="pt-24 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 shadow-sm dark:shadow-none hover:-translate-x-0.5"
          >
            <ArrowLeft size={14} /> Back to Portfolio Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <span className="section-num">ARCHIVE & SHOWCASE</span>
          <span className="label">Full Portfolio</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            All Projects & <span className="text-emerald-500 dark:text-emerald-400">Products.</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Explore the complete collection of full-stack web applications, mobile platforms, enterprise systems, automated pipelines, and biomedical research.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="card-dark p-4 sm:p-6 mb-10 space-y-4">
          {/* Search Input Bar */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project title, tech stack (e.g. Next.js, React Native, Python), or keywords..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-150"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-md transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills & Results Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mr-1">
                <SlidersHorizontal size={13} /> Filter:
              </span>
              {projectFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveCategory(f)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                    activeCategory === f
                      ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  <span>{f}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === f
                        ? 'bg-zinc-950/20 text-zinc-950'
                        : 'bg-zinc-200/80 dark:bg-zinc-700/60 text-zinc-500 dark:text-zinc-400'
                    }`}
                  >
                    {getCategoryCount(f)}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
              <span>
                Showing <strong className="text-zinc-900 dark:text-zinc-100">{filteredProjects.length}</strong> of {projects.length}
              </span>
              {(searchQuery || activeCategory !== 'All') && (
                <button
                  onClick={handleResetFilters}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  className="card-dark overflow-hidden group hover:border-emerald-500/50 dark:hover:border-emerald-800 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Mockup / Image */}
                  <div>
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                      {p.live || p.github ? (
                        <a
                          href={p.live || p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full cursor-pointer"
                        >
                          <img
                            src={p.image}
                            alt={p.title}
                            className={`w-full h-full object-cover ${p.imagePosition || 'object-center'} opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}
                          />
                        </a>
                      ) : (
                        <img
                          src={p.image}
                          alt={p.title}
                          className={`w-full h-full object-cover ${p.imagePosition || 'object-center'} opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`}
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 dark:from-zinc-900 via-white/40 dark:via-zinc-900/40 to-transparent pointer-events-none" />
                      <span className="absolute top-4 left-4 font-mono text-4xl font-black text-zinc-900/15 dark:text-white/15 leading-none select-none pointer-events-none">
                        {p.num}
                      </span>
                      <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-white/90 dark:bg-zinc-950/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-full backdrop-blur-sm shadow-sm pointer-events-none">
                        {p.category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-150">
                        {p.live || p.github ? (
                          <a
                            href={p.live || p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:underline"
                          >
                            <span>{p.title}</span>
                            <ArrowUpRight size={16} className="text-emerald-500 shrink-0" />
                          </a>
                        ) : (
                          p.title
                        )}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.tags.map((t) => (
                          <span key={t} className="pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 pb-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150"
                        >
                          <Github size={14} /> Source Code
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150"
                        >
                          <ExternalLink size={14} /> {p.liveLabel || 'Live Demo'}
                        </a>
                      )}
                      {!p.github && !p.live && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70"></span>
                          {p.note || 'Private / Proprietary'}
                        </span>
                      )}
                    </div>

                    {p.note && (p.github || p.live) && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1 rounded-md">
                        {p.note.includes('AI') ? (
                          <Sparkles size={12} className="text-emerald-500" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                        )}
                        {p.note}
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty State when no results found */
          <div className="card-dark py-16 px-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto text-zinc-400">
              <FolderX size={26} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              No matching projects found
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
              We couldn't find any project matching "{searchQuery}". Try searching with different keywords or reset your category filters.
            </p>
            <div className="pt-2">
              <button onClick={handleResetFilters} className="btn-em text-xs py-2 px-4">
                Reset All Filters
              </button>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 card-dark p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Have a project or opportunity in mind?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Whether you need full-stack architecture, automation workflows, AI tools, or mobile development, let's build something exceptional together.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-3">
              <Link to="/#contact" className="btn-em">
                Get In Touch
              </Link>
              <Link to="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

