import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { projects, projectFilters } from '../data/projectsData';

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="section-num">03</span>
            <span className="label">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100">
              Featured<br />
              <span className="text-emerald-500 dark:text-emerald-400">Projects.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  active === f
                    ? 'bg-emerald-500 text-zinc-950 shadow-sm'
                    : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm dark:shadow-none'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="card-dark overflow-hidden group hover:border-emerald-500/50 dark:hover:border-emerald-800 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Image */}
                <div>
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                    {p.live || p.github ? (
                      <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
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

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-150">
                      {p.live || p.github ? (
                        <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                          <span>{p.title}</span>
                          <ArrowUpRight size={15} className="text-emerald-500 shrink-0" />
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150">
                        <Github size={13} /> Source Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-150">
                        <ExternalLink size={13} /> {p.liveLabel || 'Live Demo'}
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
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium bg-zinc-100 dark:bg-zinc-800/60 px-2 py-0.5 rounded">
                      {p.note.includes('AI') ? (
                        <Sparkles size={11} className="text-emerald-500" />
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

        {/* Action Buttons under the Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/projects" className="btn-em">
            <span>View All Projects & Products ({projects.length})</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://github.com/sayandkk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <span>More on GitHub</span>
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
