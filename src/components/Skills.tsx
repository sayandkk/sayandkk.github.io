import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 75, color: '#61DAFB' },
        { name: 'TypeScript', level: 75, color: '#3178C6' },
        { name: 'JavaScript', level: 75, color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 80, color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'NestJS', level: 75, color: '#E0234E' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'Python', level: 85, color: '#3776AB' },
        { name: 'PostgreSQL', level: 60, color: '#336791' },
        { name: 'MongoDB', level: 70, color: '#47A248' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88, color: '#F05032' },
        { name: 'Firebase', level: 85, color: '#FFCA28' },
        { name: 'Arduino', level: 70, color: '#00979D' },
        { name: 'Docker', level: 80, color: '#2496ED' },
      ]
    }
  ];


  const techLogos = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Git', icon: '📦' },
    { name: 'Firebase', icon: '🔥' }
  ];

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-blue-900/30" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/10 rounded-full blur-lg" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="w-16 md:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies
          </motion.p>
        </motion.div>

        {/* Floating animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-8 h-8 bg-blue-500/20 rounded-lg"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-32 left-16 w-6 h-6 bg-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 right-1/4 w-4 h-4 bg-pink-500/20 rounded-sm rotate-45"
          />
        </div>

        {/* Tech Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 lg:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center p-4 md:p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-3xl md:text-4xl mb-2 relative z-10 group-hover:animate-bounce">{tech.icon}</div>
              <p className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 relative z-10 text-center">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category icon based on title */}
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 mx-auto relative z-10">
                <span className="text-xl md:text-2xl">
                  {category.title.includes('Frontend') ? '🎨' :
                    category.title.includes('Backend') ? '⚙️' : '🛠️'}
                </span>
              </div>

              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <div className="space-y-4 lg:space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (categoryIndex * 0.15) + (skillIndex * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="space-y-2 group/skill"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm md:text-base text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-bold px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3 overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: (categoryIndex * 0.15) + (skillIndex * 0.1),
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full relative overflow-hidden shadow-lg"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}cc, ${skill.color})`
                          }}
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                              duration: 2,
                              delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 1,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>

                      {/* Skill level indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 1,
                          type: "spring"
                        }}
                        className="absolute right-0 top-0 transform translate-y-[-50%]"
                        style={{ left: `${skill.level}%` }}
                      >
                        <div
                          className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg"
                          style={{ backgroundColor: skill.color }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;