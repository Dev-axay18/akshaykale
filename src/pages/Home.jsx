import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import ResumePopup from '../components/ResumePopup'
import AnimatedSkills from '../components/AnimatedSkills'

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-400',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      url: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-400',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-400',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Hi, I'm <span className="text-white">Your Name</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`text-2xl text-gray-400 transition-colors duration-300 ${social.color}`}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsResumeOpen(true)}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300 flex items-center gap-2"
          >
            <FaFileAlt />
            View Resume
          </motion.button>
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-full transition-colors duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-20"
      >
        <AnimatedSkills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {['Web Development', 'UI/UX Design', 'Problem Solving'].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
            className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-400">{skill}</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        ))}
      </motion.div>

      <ResumePopup isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  )
}

export default Home 