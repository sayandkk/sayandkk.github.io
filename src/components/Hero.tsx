import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';

const roles = ['Full Stack Developer', 'Software Engineer', 'React Specialist', 'Open Source Builder'];

const codeLines = [
  { indent: 0, text: 'const developer = {', color: 'text-zinc-300' },
  { indent: 1, text: "name: 'Sayand K K',", color: 'text-zinc-400' },
  { indent: 1, text: "role: 'Full Stack Dev',", color: 'text-zinc-400' },
  { indent: 1, text: 'stack: [', color: 'text-zinc-400' },
  { indent: 2, text: "'React', 'NestJS',", color: 'text-emerald-400' },
  { indent: 2, text: "'TypeScript', 'Python'", color: 'text-emerald-400' },
  { indent: 1, text: '],', color: 'text-zinc-400' },
  { indent: 1, text: "status: 'Open to work 🚀'", color: 'text-cyan-400' },
  { indent: 0, text: '};', color: 'text-zinc-300' },
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setVisibleLines((v) => (v < codeLines.length ? v + 1 : v));
    }, 250);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-16 relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      {/* Emerald glow blobs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="label">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="display text-zinc-100 mb-4"
            >
              Sayand<br />
              <span className="text-emerald-400">K K</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-lg md:text-xl font-medium text-zinc-400">{displayed}</span>
              <span className="w-0.5 h-5 bg-emerald-400 animate-pulse rounded-full flex-shrink-0" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-zinc-500 text-base leading-relaxed max-w-md mb-8"
            >
              Computer Science Engineer who loves crafting fast, elegant software —
              from pixel-perfect UIs to robust backend systems and everything in between.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-em"
              >
                See My Work <ArrowRight size={15} />
              </button>
              <a
                href="mailto:sayandkk53@gmail.com"
                className="btn-ghost"
              >
                Say Hello
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              {[
                { href: 'https://github.com/sayandkk', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/sayandkk', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:sayandkk53@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:border-emerald-500 hover:text-emerald-400 bg-zinc-900 transition-all duration-150"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="card-dark rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-5 py-4 bg-zinc-900/80 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex items-center justify-center gap-1.5 text-xs text-zinc-600 font-mono">
                  <Terminal size={11} /> developer.ts
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm leading-7 min-h-[280px]">
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${line.color}`}
                    style={{ paddingLeft: line.indent * 20 }}
                  >
                    {line.text}
                  </motion.div>
                ))}
                {visibleLines < codeLines.length && (
                  <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse ml-1 rounded-sm" />
                )}
              </div>

              {/* Status bar */}
              <div className="px-5 py-3 bg-emerald-500 flex items-center justify-between">
                <span className="text-zinc-950 text-xs font-mono font-bold">● TypeScript</span>
                <span className="text-zinc-950 text-xs font-mono">Ln 9, Col 2</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-700"
        >
          <div className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-emerald-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
