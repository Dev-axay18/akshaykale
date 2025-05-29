import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'Externs Club',
      location: 'Remote',
      period: 'Mar-2024 to Apr-2024',
      duration: '1 month',
      description: [
        'Developed and optimized web applications using modern technologies',
        'Improved UI/UX and enhanced website performance',
        'Created Fully Functional Web Design and User Experience with functional UI',
        'Worked On The Responsive Web Design'
      ]
    },
    {
      type: 'work',
      title: 'DevOps Intern',
      company: 'Code Alpha',
      location: 'Remote',
      period: 'Mar -2025 to Apr-2025',
      duration: '1 month',
      description: [
          'Worked on CI/CD pipelines, cloud deployment, and automation.',
      'Developed a CI/CD pipeline using Azure for seamless deployment.',
      'Implemented Docker and Kubernetes for containerization and orchestration.',
      'Integrated GitHub Actions for automated testing and deployment'
        ]
      },
    {
      type: 'work',
      title: 'Python Developer',
      company: 'Code Techie',
      location: 'Remote',
      period: 'April-2025  to Jun-2025',
      duration: '2 month',
      description: [
       ' Built applications leveraging Python frameworks and APIs using Streamlit.',
'Developed two AI - powered chatbots: LegalGPT(Together AI API & SerpAPI) for legal inquiries and Fake News Detector(OpenAI API) for misinformation detection.',
'Integrated NLP models to enhance chatbot accuracy and response generation.',
'Implemented database storage for user interactions and query history.',
      ]
},
  
    {
      type: 'work',
      title: 'Software Development Intern (Team Lead)',
      company: 'Bluestock Fintech',
      location: 'Remote',
      period: 'Mar-2025 to May-2025',
    duration: '2 month',
      description: [
        'Developed a full-stack IPO listing web app using React, Tailwind CSS, and Node.js/Express to display real-time IPO data.',
     '   Designed and integrated RESTful APIs for fetching, filtering, and displaying IPO listings with high performance.',
        'Automated testing and deployment pipelines using GitHub Actions, enabling seamless CI/CD integration.',
       ' Deployed the application on Netlify, optimizing for speed, responsiveness, and user experience.',
     '   Managed project documentation, tasks, and API contracts in Notion for streamlined team collaboration.'
        ]
      }
  ]

const education = [
  {
    degree: 'Pursuing Bachelor of Technology (B.Tech) in Electronics and Computer Engineering',
    school: 'Maharashtra Institute Of Technology (Autonomous)',
    location: 'Chh. Sambhajinagar , Maharashtra',
    period: '2024 - Appearing',
    description: [
      'Electronics And Component Designing',
      'Computer and Software Engineering',
      'GPA: 8.1/10.0',
      'Published research paper on Blockchain and Future Extends of Blockchain'
    ]
  },
  {
    degree: '12th HSC in Science Stream ',
    school: 'Deogiri College',
    location: 'Chh. Sambhajinagar, Maharashtra',
    period: '2021 - 2022',
    description: [
      'Physics, Mathematics and Computer Science',
      'Percentage: 75% ',
      
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

return (
  <section className="min-h-screen py-20 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <FaBriefcase className="mr-3 text-sky-500" />
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <div className="flex items-center text-sky-500 mt-2 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-4">
                <span>{exp.duration}</span>
                <FaMapMarkerAlt className="mr-2 ml-4" />
                <span>{exp.company} • {exp.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <FaGraduationCap className="mr-3 text-sky-500" />
            Education
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <div className="flex items-center text-sky-500 mt-2 md:mt-0">
                  <FaCalendarAlt className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span>{edu.school} • {edu.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {edu.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
)
}

export default Experience 