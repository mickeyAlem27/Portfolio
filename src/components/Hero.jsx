import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import mikiImage from '../assets/miki.jpg'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/mickeyAlem27', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mikiyas-alemayehu-20b61b2b6', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Animated Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 via-purple-400 to-pink-400 p-1 glow-effect">
              <img 
                src={mikiImage} 
                alt="Mikiyas Alemayehu" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm{''}
            <span className="text-gradient">Mikiyas Alemayehu</span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            <span className="inline-block">Full Stack Developer</span>
            <span className="inline-block mx-2">•</span>
            <span className="inline-block">Mobile App Developer</span>
            <span className="inline-block mx-2">•</span>
            <span className="inline-block">3D Animation</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 max-w-2xl mb-12 text-lg"
          >
            Crafting beautiful, functional, and user-friendly digital experiences.
            Passionate about turning ideas into reality through code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-6 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8"
          >
            <ArrowDown size={32} className="text-gray-600" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
