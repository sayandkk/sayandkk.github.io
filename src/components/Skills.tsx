import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Frontend',
    icon: '🖥',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Vite'],
  },
  {
    label: 'Backend',
    icon: '⚙',
    skills: ['NestJS', 'Node.js', 'Python', 'REST APIs', 'JWT Auth', 'WebSockets', 'Express.js'],
  },
  {
    label: 'Databases',
    icon: '🗄',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Prisma ORM', 'Redis (basics)'],
  },
  {
    label: 'Tools',
    icon: '🛠',
    skills: ['Git & GitHub', 'Docker', 'Linux / Bash', 'VS Code', 'Arduino', 'Figma', 'Postman'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-24 px-6 border-t border-zinc-900">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="section-num">02</span>
        <span className="label">Tech Stack</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100">What I<br /><span className="text-emerald-400">work with.</span></h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            className="card-dark p-6 hover:border-emerald-800 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-bold text-zinc-100 text-sm uppercase tracking-wider group-hover:text-emerald-400 transition-colors duration-150">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: ci * 0.05 + si * 0.04, duration: 0.35 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 py-1.5 px-3 rounded-lg bg-zinc-800/60 text-zinc-400 text-xs font-medium hover:bg-zinc-800 hover:text-emerald-400 transition-all duration-150"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
