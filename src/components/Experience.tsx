import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Development Intern',
    org: 'UL Technology Solutions',
    location: 'Remote',
    period: 'May 2024 – Present',
    current: true,
    bullets: [
      'Built an end-to-end Employee Transfer System with React + NestJS + PostgreSQL',
      'Implemented JWT-based RBAC and multi-step approval workflows',
      'Designed RESTful APIs and optimized relational database schemas',
      'Delivered responsive admin dashboards with real-time data',
    ],
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'JWT'],
  },
  {
    type: 'work',
    title: 'Research Intern',
    org: 'Aster Medcity',
    location: 'Kochi, Kerala',
    period: 'Feb 2024 – Mar 2024',
    current: false,
    bullets: [
      'Built Arduino-based EMG signal acquisition hardware setup',
      'Implemented real-time signal processing algorithms in Python',
      'Created dashboards for biomedical data visualization',
      'Presented research outcomes to medical and technical teams',
    ],
    tags: ['Python', 'Arduino', 'Signal Processing', 'Data Analysis'],
  },
];

const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'University of Calicut',
  period: '2021 – 2025',
  grade: 'CGPA: 7.02 / 10',
  details: 'Focused on software engineering, algorithms, data structures, OS, and networks. Active in hackathons and project competitions.',
};

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="section-num">04</span>
          <span className="label">Career</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100">Experience &<br /><span className="text-emerald-400">Education.</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Work */}
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 mb-6 uppercase tracking-widest">
              <Briefcase size={14} className="text-emerald-500" /> Work Experience
            </div>

            <div className="space-y-3">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`card-dark overflow-hidden transition-all duration-200 ${expanded === i ? 'border-emerald-800' : 'hover:border-zinc-700'}`}
                >
                  <button
                    className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-bold text-zinc-100 text-sm">{exp.title}</h4>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-emerald-400 text-xs font-semibold mb-0.5">{exp.org}</p>
                      <div className="flex items-center gap-3 text-xs text-zinc-600">
                        <span className="flex items-center gap-1"><MapPin size={10} />{exp.location}</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="text-zinc-600 flex-shrink-0 mt-0.5">
                      {expanded === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-zinc-800 pt-4">
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((t) => <span key={t} className="pill text-xs">{t}</span>)}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 mb-6 uppercase tracking-widest">
              <GraduationCap size={14} className="text-emerald-500" /> Education
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-dark p-6 hover:border-emerald-800 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-emerald-400" />
              </div>
              <h4 className="font-bold text-zinc-100 mb-1 text-sm">{education.degree}</h4>
              <p className="text-emerald-400 font-semibold text-xs mb-3">{education.institution}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 mb-4">
                <span>{education.period}</span>
                <span className="font-bold text-zinc-400">{education.grade}</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">{education.details}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
