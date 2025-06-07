import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt, FaInstagram } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import resume from '../assets/resume.pdf'
import AnimatedRoles from './AnimatedRoles'
import ResumeModal from './ResumeModal'
import { useState } from 'react'

const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(null)

  const funnyQuotes = [
    "I love deadlines. I love the whooshing sound they make as they fly by. 💨",
    "My code runs perfectly... until someone uses it. 🧨",
    "Sleep is a luxury. I'll rest when the build passes. 🛠️",
    "Welcome to programming: where you fix one bug and summon three more. 🪲🪲🪲",
    "I don't need therapy. I just need my code to compile. 😶‍🌫️",
    "My code works… but I don't know why. And that terrifies me. 👻",
    "The only thing more dead than my social life is my production server. ⚰️",
    "If you stare at the code long enough, the bugs stare back. 🧿",
    "I write code like I live my life — full of regrets and missing semicolons. 😬",
    "Every time I write a 'quick fix', a software engineer dies inside. 🫠",
    "Some people drink to forget. I refactor legacy code. 🍷",
    "Behind every great app is a terrified developer praying it doesn't crash. 🙏",
    "You think horror movies are scary? Try merging a 6-month-old Git branch. 🔪",
    "The only thing that dies more than my hopes is my test coverage. 💀",
    "I didn't choose the debug life. The debug life chose me… and won't let go. 👾",
    "Stack Overflow is my only friend. 🧑‍💻",
    "My app doesn't crash — it just starts performing interpretive dance. 💃",
    "That moment when you realize the bug... is you. 🪞",
    "I treat my warnings like I treat my emotions — I suppress them. 😐",
    "I thought I fixed the bug. I only moved it to production. 🧯",
    "Programming: the art of turning caffeine into stack traces. ☕",
    "I asked for a sign from the universe. It gave me a segmentation fault. 🧠",
    "The only thing shorter than my attention span is my unit tests. 🧪",
    "Coding is 10% writing code and 90% cursing at it. 🤬",
    "My backlog has more unresolved issues than I do. 🗂️",
    "I don't fear failure. I deploy it regularly. 📦",
    "I don't make mistakes. I create future debugging opportunities. 🛠️",
    "Every feature you add is a new way for your app to die. ☠️",
    "Sometimes I feel like I write code just to watch it suffer. 🧨",
    "Real devs test in production. Real devs cry in production. 🥲",
    "Deleting code is like deleting memories — painful but necessary. 🧽",
    "I build things. Then I break them. Then I blame the compiler. 🖥️",
    "The build is green. But at what cost? 🔥",
    "You either die a junior dev, or live long enough to rewrite everything in TypeScript. 🦇",
    "The bugs were ghosts all along. 👻",
    "I stare into the abyss. It logs a null reference. 🕳️",
    "Silence is golden... unless you're waiting for your code to compile. 🔕",
    "One does not simply write bug-free code. ❌",
    "I don't always test my code, but when I do, it's in production. 🎯",
    "When I said I wanted a crash course in coding... I didn't mean this. 🚗💥",
    "If The code Works Don't Touch It 😐"
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Dev-axay18', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/akshay-kale-88792932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://www.instagram.com/md5.axay', label: 'Instagram' }
  ]

  const handleViewWork = () => {
    const randomQuote = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)]
    setCurrentQuote(randomQuote)
  }

  const handleResumeClick = () => {
    setIsResumeOpen(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                Hi, I'm <span className="text-sky-500">Akshay</span>
              </motion.h1>
              <AnimatedRoles />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            >
              I build modern web applications focused on delivering exceptional user experiences through clean, efficient code. Let's work together to create something impactful and innovative.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="text-gray-400 hover:text-sky-500 transition-colors duration-300"
                >
                  <social.icon className="text-2xl" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-4"
            >
              <motion.button
                onClick={handleViewWork}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg transition-all duration-300 ease-out hover:shadow-sky-500/25"
              >
                <span className="absolute right-0 flex h-full w-10 translate-x-full items-center justify-center bg-white/20 transition-all duration-300 group-hover:translate-x-0">
                  <HiArrowDown className="h-5 w-5" />
                </span>
                <span className="relative flex items-center text-base font-medium transition-all duration-300 group-hover:mr-6">
                  Wanna Hear a Joke?
                </span>
              </motion.button>

              <AnimatePresence mode="wait">
                {currentQuote && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="mt-4 p-4 bg-sky-500/10 rounded-lg border border-sky-500/20 max-w-md"
                  >
                    <p className="text-sky-400 text-lg font-medium">{currentQuote}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.a
                href="https://drive.google.com/file/d/1V3D9rYXQ-LC4L6j6JA3CFykTa2eYzn7r/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-sky-500 text-base font-medium rounded-md text-sky-500 hover:bg-sky-500/10 transition-colors duration-300"
              >
                <FaFileAlt className="mr-2" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-gray-400"
          >
            <HiArrowDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    
      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl={resume}
      />
    </div>
  )
}

export default Home 
