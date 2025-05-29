import { motion } from 'framer-motion'
import { SiKalilinux } from 'react-icons/si';
import { GiSpy, GiFirewall } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNpm,
  FaSass,
  FaBootstrap,
  FaFigma
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: FaReact, level: 'Advanced' },
        { name: 'Next.js', icon: SiNextdotjs, level: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
        { name: 'JavaScript', icon: FaJs, level: 'Expert' },
        { name: 'HTML5', icon: FaHtml5, level: 'Expert' },
        { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
        { name: 'Sass', icon: FaSass, level: 'Intermediate' },
        { name: 'Bootstrap', icon: FaBootstrap, level: 'Advanced' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNodeJs, level: 'Advanced' },
        { name: 'Express.js', icon: SiExpress, level: 'Advanced' },
        { name: 'Python', icon: FaPython, level: 'Intermediate' },
        { name: 'Java', icon: FaJava, level: 'Intermediate' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: SiMongodb, level: 'Advanced' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Intermediate' },
        { name: 'MySQL', icon: FaDatabase, level: 'Intermediate' }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
        { name: 'Docker', icon: FaDocker, level: 'Intermediate' },
        { name: 'AWS', icon: FaAws, level: 'Intermediate' },
        { name: 'npm', icon: FaNpm, level: 'Advanced' },
        { name: 'Figma', icon: FaFigma, level: 'Intermediate' },
        { name: 'Kali Linux', icon: SiKalilinux, level: 'Intermediate' },
        { name: 'CEH', icon: GiSpy, level: 'Intermediate' },
        { name: 'DevOps', icon: FaTools, level: 'Advanced' },
        { name: 'Cybersecurity', icon: GiFirewall, level: 'Advanced' },

      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Me
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-300 text-lg mb-6"
          >
            I’m a passionate Full Stack Developer with a strong drive for crafting elegant, scalable solutions to complex real-world problems. With over 5 years of hands-on experience in modern web development, I specialize in building responsive, user-friendly, and performance-optimized applications that provide exceptional user experiences across all platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-gray-300 text-lg mb-6"
          >
            From designing sleek front-end interfaces with React, Tailwind CSS, and modern JavaScript frameworks, to engineering robust backend architectures using Node.js, Express, Django, and RESTful APIs, I take pride in delivering clean, maintainable code that performs efficiently at scale.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-gray-300 text-lg"
          >
            My toolkit includes version control and collaboration through Git and GitHub, database expertise in SQL, PostgreSQL, and MongoDB, and deployment know-how with Docker, Linux-based environments, CI/CD pipelines, and cloud platforms like Vercel and Render. I’m comfortable working in terminal-driven systems, setting up development and production environments, and managing infrastructure that supports high-availability applications.

          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-gray-300 text-lg"
          >
            Beyond development, I’m an active contributor to open-source projects, a frequent writer of technical blog posts, and an advocate for continuous learning. Whether it’s experimenting with the latest JavaScript features, optimizing database queries, or setting up containerized services, I’m always exploring new ways to elevate the quality and impact of my work.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="text-gray-300 text-lg"
          >
            When I'm not coding, you'll find me deep-diving into the internals of Linux, experimenting with new tools in the devops ecosystem, or refining my understanding of system architecture and scalability.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + groupIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <skill.icon className="text-2xl text-sky-500" />
                    <div>
                      <p className="text-gray-300 font-medium">{skill.name}</p>
                      <p className="text-gray-400 text-sm">{skill.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About 