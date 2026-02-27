import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Mail, Zap, Coffee, Globe } from 'lucide-react';

const bento = [
  {
    id: 'bio',
    cols: 'md:col-span-2',
    content: null,
  },
  {
    id: 'location',
    icon: MapPin,
    label: 'Based in',
    value: 'Kerala, India',
  },
  {
    id: 'role',
    icon: Briefcase,
    label: 'Current Role',
    value: 'Software Dev Intern',
  },
  {
    id: 'edu',
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CS — Univ. of Calicut',
  },
  {
    id: 'coffee',
    icon: Coffee,
    label: 'Fueled by',
    value: 'Coffee & Curiosity',
  },
];

const stats = [
  { n: '15+', l: 'Projects' },
  { n: '2+', l: 'Years Exp.' },
  { n: '5+', l: 'Hackathons' },
  { n: '12+', l: 'Tech Stack' },
];

const About: React.FC = () => (
  <section id="about" className="py-24 px-6 border-t border-zinc-900">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-num">01</span>
        <span className="label">About Me</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100">A bit about<br /><span className="text-emerald-400">who I am.</span></h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: true }}
          className="md:col-span-2 card-dark p-7 flex flex-col justify-between gap-8"
        >
          <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
            <p>
              I'm a CS engineer who genuinely loves the craft of software. Whether it's a slick React frontend,
              a performant NestJS API, or a signal-processing script in Python — I care about the details.
            </p>
            <p>
              I've shipped production-grade enterprise software at UL Technology Solutions, published research
              at Aster Medcity, and won a hackathon. My goal is always the same: build things that matter, built well.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {stats.map(({ n, l }) => (
              <div key={l} className="border border-zinc-800 rounded-xl p-3 text-center bg-zinc-900/60">
                <div className="text-2xl font-extrabold text-emerald-400 leading-none mb-1">{n}</div>
                <div className="text-xs text-zinc-500 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info cards */}
        {[
          { icon: MapPin, label: 'Based in', value: 'Kerala, India 🌿' },
          { icon: Briefcase, label: 'Currently', value: 'Intern @ UL Tech' },
          { icon: GraduationCap, label: 'Degree', value: 'B.Tech CS, CGPA 7.02' },
          { icon: Mail, label: 'Email', value: 'sayandkk53@gmail.com' },
        ].map(({ icon: Icon, label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            viewport={{ once: true }}
            className="card-dark p-5 flex flex-col gap-3 hover:border-emerald-800 transition-colors duration-200"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Icon size={16} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-600 uppercase tracking-wide mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-zinc-200">{value}</p>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          viewport={{ once: true }}
          className="md:col-span-3 bg-emerald-500 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-zinc-950 flex-shrink-0" />
            <div>
              <p className="font-bold text-zinc-950">Open to full-time roles & freelance projects</p>
              <p className="text-zinc-700 text-sm">Let's build something great — reach out any time.</p>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-5 py-2.5 bg-zinc-950 text-emerald-400 font-bold rounded-xl text-sm hover:bg-zinc-900 transition-colors duration-150"
          >
            Contact Me →
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
