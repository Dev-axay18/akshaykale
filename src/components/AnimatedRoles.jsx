import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const AnimatedSkills = () => {
  const skills = [
    {
      title: "Full Stack Developer",
      icon: "💻",
      description: "Building end-to-end web applications",
      color: "from-sky-400 to-blue-500",
      particles: 50,
      speed: 1.5,
      particleSize: 2,
      glowIntensity: 15
    },
    {
      title: "MERN Stack Expert",
      icon: "⚛️",
      description: "MongoDB, Express, React, Node.js",
      color: "from-purple-400 to-pink-500",
      particles: 60,
      speed: 2,
      particleSize: 1.5,
      glowIntensity: 20
    },
    {
      title: "Cybersecurity Specialist",
      icon: "🔒",
      description: "Securing digital assets & networks",
      color: "from-green-400 to-emerald-500",
      particles: 45,
      speed: 1.8,
      particleSize: 2.5,
      glowIntensity: 18
    },
    {
      title: "Ethical Hacker",
      icon: "🛡️",
      description: "Penetration testing & security audits",
      color: "from-red-400 to-orange-500",
      particles: 70,
      speed: 2.2,
      particleSize: 1.8,
      glowIntensity: 25
    },
    {
      title: "Python Developer",
      icon: "🐍",
      description: "Automation & backend solutions",
      color: "from-yellow-400 to-orange-500",
      particles: 40,
      speed: 1.7,
      particleSize: 2.2,
      glowIntensity: 16
    },
    {
      title: "Node.js Developer",
      icon: "🚀",
      description: "High-performance backend systems",
      color: "from-indigo-400 to-purple-500",
      particles: 55,
      speed: 1.9,
      particleSize: 2,
      glowIntensity: 22
    }
  ]

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayedText, setDisplayedText] = useState("")
  const [showParticles, setShowParticles] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particleBurst, setParticleBurst] = useState(false)
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  useEffect(() => {
    let timeout
    const currentSkill = skills[currentSkillIndex]

    if (isTyping) {
      if (displayedText.length < currentSkill.title.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSkill.title.slice(0, displayedText.length + 1))
        }, 100)
      } else {
        setShowParticles(true)
        setParticleBurst(true)
        setTimeout(() => setParticleBurst(false), 1000)
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50)
      } else {
        setShowParticles(false)
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isTyping, currentSkillIndex])

  const currentSkill = skills[currentSkillIndex]

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-48 flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSkillIndex}
          initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: -90, rotateY: 45 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
          exit={{ opacity: 0, y: -20, scale: 0.8, rotateX: 90, rotateY: -45 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center relative perspective-1000"
        >
          {/* Quantum Particles */}
          {particleBurst && (
            <div className="absolute inset-0 -z-10">
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    scale: 0,
                    opacity: 1,
                    rotate: Math.random() * 360
                  }}
                  animate={{ 
                    x: `${Math.random() * 200 - 50}%`,
                    y: `${Math.random() * 200 - 50}%`,
                    scale: [0, 1, 0],
                    opacity: [1, 0.8, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: i * 0.01
                  }}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${currentSkill.color.split(' ')[1]}, ${currentSkill.color.split(' ')[3]})`,
                    boxShadow: `0 0 ${currentSkill.glowIntensity}px ${currentSkill.color.split(' ')[1]}`
                  }}
                />
              ))}
            </div>
          )}

          {/* 3D Floating Elements */}
          <motion.div
            animate={{
              rotateX: [0, 5, 0],
              rotateY: [0, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 -z-10"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to right, ${currentSkill.color.split(' ')[1]}, ${currentSkill.color.split(' ')[3]})`,
                  opacity: 0.1,
                  transform: `rotate(${i * 72}deg)`,
                  filter: 'blur(20px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [i * 72, i * 72 + 360],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>

          {/* Interactive Particles */}
          {showParticles && (
            <div className="absolute inset-0 -z-10">
              {[...Array(currentSkill.particles)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    scale: 0,
                    opacity: 0 
                  }}
                  animate={{ 
                    x: `${Math.random() * 100}%`,
                    y: `${Math.random() * 100}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: currentSkill.speed,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                  className="absolute rounded-full"
                  style={{
                    width: `${currentSkill.particleSize}px`,
                    height: `${currentSkill.particleSize}px`,
                    background: `linear-gradient(to right, ${currentSkill.color.split(' ')[1]}, ${currentSkill.color.split(' ')[3]})`,
                    boxShadow: `0 0 ${currentSkill.glowIntensity}px ${currentSkill.color.split(' ')[1]}`
                  }}
                />
              ))}
            </div>
          )}

          {/* Mouse-following gradient */}
          <motion.div
            className="absolute inset-0 -z-10 opacity-30"
            animate={{
              x: mousePosition.x - 150,
              y: mousePosition.y - 150
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <div
              className="w-64 h-64 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${currentSkill.color.split(' ')[1]} 0%, transparent 70%)`
              }}
            />
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2
              }}
              className="text-4xl"
            >
              {currentSkill.icon}
            </motion.span>
            <motion.h2 
              className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentSkill.color}`}
              animate={{
                textShadow: [
                  `0 0 10px ${currentSkill.color.split(' ')[1]}`,
                  `0 0 20px ${currentSkill.color.split(' ')[1]}`,
                  `0 0 10px ${currentSkill.color.split(' ')[1]}`
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {displayedText}
              <motion.span
                animate={{ 
                  opacity: [1, 0],
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 5px ${currentSkill.color.split(' ')[1]}`,
                    `0 0 10px ${currentSkill.color.split(' ')[1]}`,
                    `0 0 5px ${currentSkill.color.split(' ')[1]}`
                  ]
                }}
                transition={{ 
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block w-1 h-6 bg-current ml-1"
              />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base"
          >
            {currentSkill.description}
          </motion.p>

          {/* Glowing orbs with trail effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: ["-50%", "-30%", "-50%"],
              y: ["-50%", "-40%", "-50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-r ${currentSkill.color} blur-2xl`}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${currentSkill.color.split(' ')[1]} 0%, transparent 70%)`
              }}
            />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: ["50%", "30%", "50%"],
              y: ["50%", "40%", "50%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className={`absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-r ${currentSkill.color} blur-2xl`}
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${currentSkill.color.split(' ')[1]} 0%, transparent 70%)`
              }}
            />
          </motion.div>

          {/* Micro particles */}
          <div className="absolute inset-0 -z-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full"
                style={{
                  background: currentSkill.color.split(' ')[1],
                  boxShadow: `0 0 5px ${currentSkill.color.split(' ')[1]}`
                }}
                animate={{
                  x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AnimatedSkills