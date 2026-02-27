import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Zap, Star, Package } from 'lucide-react';

const stats = [
  { n: '15+', l: 'Projects', icon: Zap },
  { n: '25+', l: 'Repos', icon: Package },
  { n: '12+', l: 'Technologies', icon: Star },
  { n: '5+', l: 'Hackathons', icon: Trophy },
];

const achievements = [
  {
    icon: Trophy,
    accent: 'border-yellow-500/30 bg-yellow-500/5',
    iconBg: 'bg-yellow-500/10 border-yellow-500/20',
    iconColor: 'text-yellow-400',
    dot: 'bg-yellow-500',
    tag: 'Competition · 2024',
    title: 'TechPulse Hackathon — 1st Place',
    desc: 'Ranked 1st among 200+ participants. Built an innovative real-time collaboration tool, judged on technical depth, design, and business viability.',
  },
  {
    icon: BookOpen,
    accent: 'border-cyan-500/30 bg-cyan-500/5',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    dot: 'bg-cyan-500',
    tag: 'Research · 2024',
    title: 'Research Publication',
    desc: 'Co-authored "EMG Signal Analysis for Muscle Activity Recognition" presented at an international medical engineering conference.',
  },
];

const Achievements: React.FC = () => (
  <section id="achievements" className="py-24 px-6 border-t border-zinc-900">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-num">05</span>
        <span className="label">Recognition</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100">By the<br /><span className="text-emerald-400">Numbers.</span></h2>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map(({ n, l, icon: Icon }, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            viewport={{ once: true }}
            className="card-dark p-5 flex flex-col gap-3 hover:border-emerald-800 transition-colors duration-200 group"
          >
            <Icon size={18} className="text-emerald-500 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <div className="text-3xl font-black text-zinc-100 leading-none mb-1">{n}</div>
              <div className="text-xs text-zinc-500 font-medium">{l}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievement cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-2xl border p-6 ${a.accent} transition-all duration-200 hover:brightness-110`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${a.iconBg}`}>
                <a.icon size={20} className={a.iconColor} />
              </div>
              <div>
                <p className={`text-xs font-mono font-semibold mb-2 flex items-center gap-2 ${a.iconColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  {a.tag}
                </p>
                <h3 className="font-bold text-zinc-100 mb-2 text-sm">{a.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
