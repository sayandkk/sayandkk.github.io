import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Netflix Clone',
    description: 'A comprehensive Netflix-style streaming platform with TMDB API integration, user authentication via Firebase, and a fully responsive layout.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'JavaScript', 'TMDB API', 'Firebase'],
    github: 'https://github.com/sayandkk/netflix-clone',
    live: '',
    category: 'Web App',
  },
  {
    id: 2,
    num: '02',
    title: 'Inventory Management',
    description: 'Business inventory solution with real-time Firebase sync, multi-role access, stock management, and automated report generation.',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
    github: 'https://github.com/sayandkk/inventory-management',
    live: '',
    category: 'Business',
  },
  {
    id: 3,
    num: '03',
    title: 'Employee Transfer System',
    description: 'Enterprise HR platform for UL Technology Solutions with role-based auth, approval workflows, and admin dashboards.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'JWT'],
    github: '',
    live: '',
    category: 'Enterprise',
  },
  {
    id: 4,
    num: '04',
    title: 'EMG Signal Analysis',
    description: 'Research tool for real-time EMG biomedical signal acquisition and processing, developed during internship at Aster Medcity.',
    image: 'https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Arduino', 'Signal Processing', 'Data Analysis'],
    github: 'https://github.com/sayandkk/emg-analysis',
    live: '',
    category: 'Research',
  },
];

const filters = ['All', 'Web App', 'Business', 'Enterprise', 'Research'];

const Projects: React.FC = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900">
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100">Featured<br /><span className="text-emerald-400">Projects.</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                  active === f
                    ? 'bg-emerald-500 text-zinc-950'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-emerald-600 hover:text-emerald-400'
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
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="card-dark overflow-hidden group hover:border-emerald-800 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-4xl font-black text-white/10 leading-none select-none">
                    {p.num}
                  </span>
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-zinc-950/80 text-zinc-400 border border-zinc-700 rounded-full backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors duration-150">{p.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors duration-150">
                        <Github size={13} /> Source Code
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-emerald-400 transition-colors duration-150">
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {!p.github && !p.live && (
                      <span className="text-xs text-zinc-700 italic">Private / Proprietary</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a href="https://github.com/sayandkk" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            More on GitHub <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
