import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaCertificate, FaFileAlt, FaTimes, FaEye } from 'react-icons/fa'
import { useState } from 'react'

const ImageModal = ({ isOpen, onClose, images, title }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <div className="relative w-full max-w-4xl h-[90vh] sm:h-[80vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-800">
                <h3 className="text-lg sm:text-xl font-semibold text-white truncate pr-2">
                  {title} ({currentImageIndex + 1}/{images.length})
                </h3>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              
              {/* Image Viewer */}
              <div className="h-[calc(90vh-3.5rem)] sm:h-[calc(80vh-4rem)] relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500"></div>
                  </div>
                )}
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} - Page ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  onLoad={() => setIsLoading(false)}
                />
                
                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const ImagePreview = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div 
      className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sky-500"></div>
        </div>
      )}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoading(false)}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-black/50 flex items-center justify-center"
      >
        <FaEye className="text-2xl text-white" />
      </motion.div>
    </div>
  )
}

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const certificates = [
    {
      type: 'certificate',
      title: 'Certificate of Completion and Evaluation',
      issuer: 'Code Techie',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: [
        '/certificates/Certificate Of Completion And Evaluation -1.jpg',
        '/certificates/Certificate Of Completion And Evaluation -2.jpg'
      ]
    },
    {
      type: 'certificate',
      title: 'Certificate of Completion',
      issuer: 'Bluestock Fintech',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: [
        '/certificates/Certificate Of Completion And Evaluation -1.jpg',
        '/certificates/Certificate Of Completion And Evaluation -2.jpg'
      ]
    },
    {
      type: 'certificate',
      title: 'AWS Virtual Simulation Certificate',
      issuer: 'Amazon Web Services',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/AWS Virtual Simulation Certification.jpg']
    },
    {
      type: 'certificate',
      title: 'Cyber Job Simulation Certificate',
      issuer: 'Cybersecurity Training',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Cyber Job Simulation Certification.jpg']
    },
    {
      type: 'certificate',
      title: 'Udemy Course Certificate',
      issuer: 'Udemy',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Udemy Course Cert.jpg']
    },
    {
      type: 'certificate',
      title: 'CodeAlpha DevOps Certificate',
      issuer: 'CodeAlpha',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/CodeAlpha DevOps Cert -1.jpg']
    }
  ]

  const offers = [
    {
      type: 'offer',
      title: 'Python Development Internship',
      company: 'Code Techie',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Python Development Internshipt Offer Letter-4.jpg']
    },
    {
      type: 'offer',
      title: 'DevOps Internship',
      company: 'CodeAlpha',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/DevOps Offer Letter!-1.jpg']
    },
    {
      type: 'offer',
      title: 'Software Development Intern (Team Lead)',
      company: 'Bluestock Finetech',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Offer Letter Of Bluestock Finetech .jpg']
    },
    {
      type: 'offer',
      title: 'Web Development Internship',
      company: 'Apex Planet PVT. LTD',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Internship Offer Letter By Apex Planet .jpg']
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

  const AchievementCard = ({ achievement }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-sky-500/50 transition-all duration-300"
    >
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="text-xl sm:text-2xl">
            {achievement.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
              {achievement.type === 'certificate' ? achievement.issuer : achievement.company}
            </p>
            <p className="text-sky-500 text-xs sm:text-sm">
              {achievement.date}
            </p>
          </div>
        </div>

        {achievement.images && achievement.images.length > 0 && (
          <>
            <ImagePreview imageUrl={achievement.images[0]} title={achievement.title} />
            <button
              onClick={() => setSelectedImage({
                images: achievement.images,
                title: achievement.title
              })}
              className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-sky-500/20 hover:bg-sky-500/30 rounded-lg transition-colors"
            >
              <FaEye className="mr-2" />
              View Full {achievement.type === 'certificate' ? 'Certificate' : 'Offer'}
              {achievement.images.length > 1 && ` (${achievement.images.length} pages)`}
            </button>
          </>
        )}
      </div>
    </motion.div>
  )

  return (
    <section className="min-h-screen py-12 sm:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Achievements & Certifications
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        {/* Certificates Section */}
        <div className="mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center"
          >
            Certificates
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          >
            {certificates.map((certificate, index) => (
              <AchievementCard key={index} achievement={certificate} />
            ))}
          </motion.div>
        </div>

        {/* Offers Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center"
          >
            Offer Letters
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          >
            {offers.map((offer, index) => (
              <AchievementCard key={index} achievement={offer} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        images={selectedImage?.images}
        title={selectedImage?.title}
      />
    </section>
  )
}

export default Achievements 