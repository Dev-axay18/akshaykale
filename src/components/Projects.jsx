import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'VibeSocial',
      description: 'VibeSocial is an Instagram-inspired streaming app featuring a visually rich, aesthetic UI for sharing and exploring vibrant social content.',
      image: 'https://github.com/Dev-axay18/akshay-kale/blob/main/WhatsApp%20Image%202025-05-29%20at%2011.41.49_272d8940.jpg?raw=true',
      technologies: ['ReactJS','Tailwinds CSS','Pexels API','Mongodb'],
      github: 'https://github.com/Dev-axay18/VibeSocial.git',
      live: 'https://vibesocials.netlify.app/'
    },
    {
      title: 'Truth Sense',
      description: 'Truth Sense is a real-time fake news detection tool using NLP and OpenAI API to analyze and verify news credibility with high accuracy.',
      image: 'https://raw.githubusercontent.com/Dev-axay18/Truth_Sense/refs/heads/main/assets/banner.png',
      technologies: ['ReactJS','Tailwinds CSS','Python','Machine Learning','NLP','LLM'],
      github: 'https://github.com/Dev-axay18/Truth_Sense.git',
      live: 'https://www.linkedin.com/posts/akshay-kale-88792932a_fakenewsdetection-aiforgood-nlp-activity-7327005204510318592-H5lA?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFMTL6cBVRYFmEYqFqZ_LBeIEdUxOp0wKqM&utm_campaign=copy_link'
    },
    {
      title: 'E-Connect',
      description: 'E-Connect: Seamlessly linking you to critical emergency hotlines with a clean, user-friendly interface',
      image: 'https://github.com/Dev-axay18/akshay-kale/blob/main/p1.png?raw=true',
      technologies: ['React Native', 'Android Studio', 'API'],
      github: 'https://github.com/Dev-axay18',
      // live: 'https://project1.com'
    },
    {
      title: 'Obsidian',
      description: 'Obsidian: A minimalist operating system built with C and Assembly, crafted from scratch using Makefile for seamless compilation',
      image: 'https://akshaykale.netlify.app/obsidian.png',
      technologies: ['MAKEFILE', 'C', 'Assembly'],
      github: 'https://github.com/Dev-axay18',
      // live: 'https://project2.com'
    },
    {
      title: 'SkyCast Weather App',
      description: 'A social media dashboard with analytics',
      image: 'https://akshaykale.netlify.app/Sky%20Cast%20Weather%20App.png',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com'
    },
    {
      title: 'Resonix',
      description: 'Resonix is a sleek music streaming platform built with React.js, Tailwind CSS, and powerful APIs for seamless audio playback and discovery.',
      image: 'https://akshaykale.netlify.app/resonix.png',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/Dev-axay18',
      live: 'https://project3.com'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'A dynamic Tic Tac Toe game built with unbeatable AI and multiplayer mode to challenge friends or test your skills against a perfect opponent.',
      image: 'https://akshaykale.netlify.app/tictactoe.png',
      technologies: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/Dev-axay18/tic-tac-toe.git',
      live: 'https://dev-axay18.github.io/tic-tac-toe/'
    },
    {
      title: 'Remove.it',
      description: 'A web app that instantly removes image backgrounds using smart AI, offering fast and clean cutouts like Remove.bg.',
      image: 'https://github.com/Dev-axay18/akshay-kale/blob/main/ChatGPT%20Image%20May%2029,%202025,%2011_36_40%20AM.png?raw=true',
      technologies: ['HTML', 'CSS', 'Javascript','Removebg API'],
      github: 'https://github.com/Dev-axay18/remove.it.git',
      live: 'https://dev-axay18.github.io/remove.it/'
    },
    {
      title: 'Blacktrap',
      description: 'BlackTrap is a powerful Python-based network sniffing tool designed to monitor and analyze real-time network traffic with precision.',
      image: 'https://private-user-images.githubusercontent.com/162922094/437897906-3dec7591-3b7b-473e-b42e-496d2dfda579.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg0OTgxNDksIm5iZiI6MTc0ODQ5Nzg0OSwicGF0aCI6Ii8xNjI5MjIwOTQvNDM3ODk3OTA2LTNkZWM3NTkxLTNiN2ItNDczZS1iNDJlLTQ5NmQyZGZkYTU3OS5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUyOVQwNTUwNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xZWQ5ZjU4NTg1YzY2NGMxYjcwNDM4NDkyNmFkY2I0YTdiZTNjNDk5Mzk2MzdlNjIxNmNiMTYwNjU4NjZkMzE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.5m7C52Oj8gP2sB_50KoEvr1GFF6NtsX_9u-PmofXcYQ',
      technologies: ['Python'],
      github: 'https://github.com/Dev-axay18/BlackTrap',
      live: 'https://www.linkedin.com/posts/akshay-kale-88792932a_cybersecurity-python-networking-activity-7322097836177657856-26xz?utm_source=share&utm_medium=member_android&rcm=ACoAAFMTL6cBVRYFmEYqFqZ_LBeIEdUxOp0wKqM'
    },
    
    {
      title: 'Clickfury',
      description: 'Clickfury is an advanced typing test analyzer that tracks WPM, CPM, time, and errors to boost your speed and accuracy with detailed insights.',
      image: 'https://github.com/Dev-axay18/akshay-kale/blob/main/ChatGPT%20Image%20May%2029,%202025,%2011_25_15%20AM.png?raw=true',
      technologies: ['Reactjs','Tailwind CSS','Javascript'],
      github: 'https://github.com/Dev-axay18/clickfury.git',
      live: 'https://clickfuryy.netlify.app/'
    },
    {
      title: 'Cinescape',
      description: 'CineScape is a stunning cinema website landing page with smooth animations and a sleek, modern UI that captures the magic of movies.',
      image: 'https://github.com/Dev-axay18/akshay-kale/blob/main/WhatsApp%20Image%202025-05-29%20at%2011.33.48_1ae45c19.jpg?raw=true',
      technologies: ['HTML','CSS','Javascript','Material UI'],
      github: 'https://github.com/Dev-axay18',
      live: 'https://www.linkedin.com/posts/akshay-kale-88792932a_cinescape-cinescape-javascript-activity-7285347642698559493-M4W4?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAFMTL6cBVRYFmEYqFqZ_LBeIEdUxOp0wKqM&utm_campaign=copy_link'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My Projects
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 