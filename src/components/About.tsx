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
    value: '  Associate Software Engineer @ UL Technology Solutions',
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
  { n: '3+', l: 'Projects' },
  { n: '1+', l: 'Years Exp.' },
  { n: '2+', l: 'Hackathons' },
  // { n: '12+', l: 'Tech Stack' },
];

const About: React.FC = () => (
  <section id="about" className="py-24 px-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100">
          A bit about<br />
          <span className="text-emerald-500 dark:text-emerald-400">who I am.</span>
        </h2>
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
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
            <p>
              I’m an Associate Software Engineer at UL Technology Solutions in Kozhikode. I build enterprise web applications with React, NestJS, PostgreSQL and Docker, and I’m most at home owning a product from the database to the interface.
            </p>
            <p>
              I joined ULTS as a Software Developer Intern in May 2025 and was promoted within three months. Since then I’ve contributed to production systems across document management, land allotment, service desk, sales and water transport. I built two of those platforms end to end as the sole developer: DocuNexus, a document and workflow platform, and State Water Transport, a boat ticket booking system.
            </p>
            <p>
              Outside of client work, I did research at Aster Medcity on EMG signal analysis and hand gesture recognition. It led to a published paper at CENT 2024 on real-time muscle activation classification for prosthetic control. I also won first place in the Beyond Experience category at the TechPulse Hackathon, run by ULTS.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {stats.map(({ n, l }) => (
              <div key={l} className="border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-3 text-center bg-zinc-50 dark:bg-zinc-900/60">
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 leading-none mb-1">{n}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info cards */}
        {[
          { icon: MapPin, label: 'Based in', value: 'Kerala, India 🌿' },
          { icon: Briefcase, label: 'Currently', value: 'ASSOCIATE SOFTWARE ENGINEER @ UL Technology Solutions' },
          { icon: GraduationCap, label: 'Degree', value: 'B.Tech CS, CGPA 7.02' },
          { icon: Mail, label: 'Email', value: 'sayandkk53@gmail.com' },
        ].map(({ icon: Icon, label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            viewport={{ once: true }}
            className="card-dark p-5 flex flex-col gap-3 hover:border-emerald-500/50 dark:hover:border-emerald-800 transition-colors duration-200"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Icon size={16} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{value}</p>
            </div>
          </motion.div>
        ))}

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          viewport={{ once: true }}
          className="md:col-span-3 bg-emerald-500 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-emerald-500/10"
        >
          <div className="flex items-center gap-3">
            <Zap size={24} className="text-zinc-950 flex-shrink-0" />
            <div>
              <p className="font-bold text-zinc-950">Open to full-time roles & freelance projects</p>
              <p className="text-emerald-950 text-sm font-medium">Let's build something great — reach out any time.</p>
            </div>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-5 py-2.5 bg-zinc-950 text-emerald-400 font-bold rounded-xl text-sm hover:bg-zinc-900 transition-colors duration-150 shadow-md"
          >
            Contact Me →
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
