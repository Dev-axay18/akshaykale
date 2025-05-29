import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaLightbulb } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Dev-axay18', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/akshay-kale-88792932a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-white dark:bg-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-xl"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1 text-yellow-500"
              >
                <FaLightbulb />
              </motion.span>{' '}
              by Akshay Kale © {currentYear}
            </p>
            <p className="mt-2 text-sm">
              Built with React, Vite, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 