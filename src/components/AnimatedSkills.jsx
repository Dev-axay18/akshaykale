import { motion } from 'framer-motion'

const AnimatedSkills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'React', level: 95, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
    { name: 'MongoDB', level: 85, color: 'from-emerald-400 to-emerald-600' },
    { name: 'Express', level: 90, color: 'from-gray-400 to-gray-600' },
    { name: 'Tailwind CSS', level: 92, color: 'from-sky-400 to-sky-600' },
    { name: 'Git', level: 87, color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'Django', level: 82, color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Redis', level: 80, color: 'from-red-400 to-red-600' },
    { name: 'AWS', level: 85, color: 'from-orange-400 to-orange-600' },
    { name: 'Firebase', level: 88, color: 'from-orange-400 to-orange-600' },
    { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
    { name: 'Vue.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Angular', level: 80, color: 'from-red-400 to-red-600' },
    { name: 'Sass', level: 88, color: 'from-pink-400 to-pink-600' },
    { name: 'Bootstrap', level: 90, color: 'from-purple-400 to-purple-600' },
    { name: 'Material UI', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Redux', level: 88, color: 'from-purple-400 to-purple-600' },
    { name: 'GraphQL', level: 82, color: 'from-pink-400 to-pink-600' },
    { name: 'Jest', level: 85, color: 'from-red-400 to-red-600' },
    { name: 'Cypress', level: 80, color: 'from-green-400 to-green-600' },
    { name: 'Webpack', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'Vite', level: 90, color: 'from-purple-400 to-purple-600' }
  ]

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AnimatedSkills
