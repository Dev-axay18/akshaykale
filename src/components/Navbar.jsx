import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaTrophy, FaBriefcase } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaHome, FaEnvelope } from 'react-icons/fa';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    // { path: '/', label: 'Home' },
    { path: '/', label: 'Home', icon: <FaHome className="inline-block mr-1 text-sky-500" /> },
    // { path: '/about', label: 'About' },
    { path: '/about', label: 'About', icon: <FaUser className="inline-block mr-1 text-sky-500" /> },

    { path: '/experience', label: 'Experience', icon: <FaBriefcase className="inline-block mr-1 text-sky-500" /> },
    { path: '/projects', label: 'Projects', icon: <FaProjectDiagram className="inline-block mr-1 text-sky-500" /> },
    { 
      path: '/achievements', 
      label: 'Achievements',
      icon: <FaTrophy className="inline-block mr-1 text-sky-500" />
    },
    // { path: '/contact', label: 'Contact' },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="inline-block mr-1 text-sky-500" /> },

  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path) => {
    setIsOpen(false)
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#')
      if (location.pathname === basePath) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-sky-500 hover:text-sky-400 transition-colors"
            >
              Akshay 
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative text-gray-300 hover:text-white transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-white' : ''
                  }`}
                >
                  {link.icon}
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: location.pathname === link.path ? '100%' : 0,
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 ${
                      location.pathname === link.path ? 'text-white bg-gray-800/50' : ''
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 