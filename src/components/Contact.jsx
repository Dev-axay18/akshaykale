import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'kaleakshay8856@gmail.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+91 8080623200',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      content: 'Chh. Sambhajinagar, Maharashtra',
      link: 'https://maps.app.goo.gl/svTp9uD3ztUYQYWe7'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4">
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
            Get In Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
              >
                <info.icon className="text-2xl text-sky-500" />
                <div>
                  <h3 className="font-medium">{info.title}</h3>
                  <p className="text-gray-400">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact 