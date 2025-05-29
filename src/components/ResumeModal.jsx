import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import resume from '../assets/resume.pdf'

const ResumeModal = ({ isOpen, onClose, pdfUrl }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col bg-gray-900"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-900 p-4 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-white">Resume</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 relative bg-gray-900">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
                </div>
              )}
              <div className="w-full h-full">
                <object
                  data={resume}
                  type="application/pdf"
                  className="w-full h-[calc(100vh-4rem)]"
                  onLoad={() => setIsLoading(false)}
                >
                  <div className="flex items-center justify-center h-full text-white">
                    <p>Unable to display PDF. <a href={resume} className="text-sky-500 hover:underline" target="_blank" rel="noopener noreferrer">Download</a> instead.</p>
                  </div>
                </object>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal 