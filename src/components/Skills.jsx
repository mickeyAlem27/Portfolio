import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
    
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'Firebase', level: 90 },
        { name: 'mySQL', level: 85 },
        { name: 'C++', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 90 },
        { name: 'Render', level: 90 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              '⚛️ React',
              '📘 TypeScript',
              '🎨 Tailwind',
              '🟢 Node.js',
              '🍃 MongoDB',
              '🐘 PostgreSQL',
              '🔥 Firebase',
              '☁️ AWS',
              '🐳 Docker',
              '📱 React Native',
              '⚡ Vite',
              '🎭 Framer Motion',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
