import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful and intuitive user interfaces',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing for speed and efficiency',
    },
    {
      icon: Heart,
      title: 'User Focused',
      description: 'Building experiences that users love',
    },
  ]

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm a passionate developer who loves creating amazing digital experiences.
            With a keen eye for design and a love for clean code, I bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-400 mb-4">
                I started my journey in web development with a curiosity to understand how
                things work on the internet. Over the years, I've honed my skills in both
                frontend and backend technologies.
              </p>
              <p className="text-gray-400">
                Today, I specialize in building modern web applications using cutting-edge
                technologies like React, Node.js, and more. I'm always learning and
                exploring new ways to solve problems.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Projects Completed', value: '50+' },
                { label: 'Happy Clients', value: '30+' },
                { label: 'Coffee Consumed', value: '∞' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
                >
                  <span className="text-gray-400">{stat.label}</span>
                  <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
