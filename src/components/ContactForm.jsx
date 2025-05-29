import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl"
    >
      <div className="space-y-6">
        <div>
          <motion.label
            whileHover={{ x: 5 }}
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </motion.label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <motion.label
            whileHover={{ x: 5 }}
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </motion.label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <motion.label
            whileHover={{ x: 5 }}
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </motion.label>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 block w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
            placeholder="Your message..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-300 ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            <FaPaperPlane className="mr-2" />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>

        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center p-3 rounded-md ${
              submitStatus === 'success'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-red-500/20 text-red-400'
            }`}
          >
            {submitStatus === 'success'
              ? 'Message sent successfully!'
              : 'Failed to send message. Please try again.'}
          </motion.div>
        )}
      </div>
    </motion.form>
  )
}

export default ContactForm 