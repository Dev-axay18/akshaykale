import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaLinux, 
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws,
  FaCode, FaServer, FaLock, FaNetworkWired, FaTools
} from 'react-icons/fa'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0)
    }
  }, [location])

  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-3xl text-blue-400" />,
      items: [
        { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-2xl text-orange-500" /> },
        { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
        { name: 'JavaScript', level: 90, icon: <FaJs className="text-2xl text-yellow-400" /> },
        { name: 'React.js', level: 95, icon: <FaReact className="text-2xl text-blue-400" /> },
        { name: 'TypeScript', level: 85, icon: <FaCode className="text-2xl text-blue-600" /> },
        { name: 'TailwindCSS', level: 90, icon: <FaCss3Alt className="text-2xl text-cyan-400" /> },
        { name: 'Next.js', level: 85, icon: <FaReact className="text-2xl text-white" /> },
      ],
    },
    {
      category: 'Backend',
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      items: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: 'Express.js', level: 90, icon: <FaServer className="text-2xl text-white" /> },
        { name: 'MongoDB', level: 85, icon: <FaDatabase className="text-2xl text-green-500" /> },
        { name: 'PostgreSQL', level: 80, icon: <FaDatabase className="text-2xl text-blue-400" /> },
        { name: 'Redis', level: 75, icon: <FaDatabase className="text-2xl text-red-500" /> },
        { name: 'GraphQL', level: 80, icon: <FaCode className="text-2xl text-pink-500" /> },
        { name: 'REST APIs', level: 95, icon: <FaDatabase className="text-2xl text-blue-400" /> },
      ],
    },
    {
      category: 'Cyber Security',
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      items: [
        { name: 'Kali Linux', level: 90, icon: <FaLinux className="text-2xl text-blue-500" /> },
        { name: 'Metasploit', level: 85, icon: <FaShieldAlt className="text-2xl text-green-500" /> },
        { name: 'Burp Suite', level: 85, icon: <FaShieldAlt className="text-2xl text-red-500" /> },
        { name: 'Penetration Testing', level: 85, icon: <FaShieldAlt className="text-2xl text-red-500" /> },
        { name: 'Web Security', level: 90, icon: <FaLock className="text-2xl text-blue-500" /> },
        { name: 'Network Security', level: 80, icon: <FaNetworkWired className="text-2xl text-green-500" /> },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: <FaLinux className="text-3xl text-yellow-500" />,
      items: [
        { name: 'Linux', level: 90, icon: <FaLinux className="text-2xl text-yellow-500" /> },
        { name: 'Docker', level: 85, icon: <FaDocker className="text-2xl text-blue-500" /> },
        { name: 'Kubernetes', level: 75, icon: <FaTools className="text-2xl text-blue-500" /> },
        { name: 'Nginx', level: 80, icon: <FaServer className="text-2xl text-green-500" /> },
        { name: 'AWS', level: 80, icon: <FaAws className="text-2xl text-orange-500" /> },
        { name: 'Git', level: 90, icon: <FaGitAlt className="text-2xl text-orange-500" /> },
        { name: 'CI/CD', level: 80, icon: <FaTools className="text-2xl text-red-500" /> },
      ],
    },
  ]

  const certifications = [
    {
      title: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      date: '2023',
      icon: <FaShieldAlt className="text-2xl text-red-400" />,
    },
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: <FaCode className="text-2xl text-blue-400" />,
    },
    {
      title: 'MERN Stack Developer',
      issuer: 'Meta',
      date: '2023',
      icon: <FaReact className="text-2xl text-blue-400" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      {/* About Me Section */}
      <section id="about" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            About Me
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              I am a passionate MERN stack developer with a strong focus on building secure and scalable web applications. 
              My expertise spans across modern web technologies and cybersecurity, allowing me to create robust solutions 
              that are both functional and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Development Focus</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚀 MERN Stack Development</li>
                  <li>⚛ React & Next.js Specialist</li>
                  <li>📡 REST & GraphQL APIs</li>
                  <li>🎨 Modern UI/UX Design</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Security Expertise</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🔒 Penetration Testing</li>
                  <li>🛡️ Web Security</li>
                  <li>🔐 Cryptography</li>
                  <li>🌐 Network Security</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-semibold text-white">{category.category}</h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {skill.icon}
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  {cert.icon}
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                </div>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-gray-500">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About 