import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCertificate,
  FaFileAlt,
  FaTimes,
  FaEye,
} from 'react-icons/fa';

/* ─────────────────────────  ImageModal  ───────────────────────── */

const ImageModal = ({ isOpen, onClose, images, title }) => {
  const imageList = images ?? [];
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* Reset spinner + index whenever we open a new set of images */
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setCurrentImageIndex(0);
    }
  }, [isOpen, images]);

  /* Early-return if closed or there are no images */
  if (!isOpen || imageList.length === 0) return null;

  const nextImage = () =>
    setCurrentImageIndex(
      prev => (prev + 1) % imageList.length
    );

  const prevImage = () =>
    setCurrentImageIndex(
      prev => (prev - 1 + imageList.length) % imageList.length
    );

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      >
        <div className="relative w-full max-w-4xl h-[90vh] sm:h-[80vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-800">
            <h3 className="text-lg sm:text-xl font-semibold text-white truncate pr-2">
              {title ?? 'Image'} ({currentImageIndex + 1}/{imageList.length})
            </h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Image area */}
          <div className="h-[calc(90vh-3.5rem)] sm:h-[calc(80vh-4rem)] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-500" />
              </div>
            )}

            <img
              src={imageList[currentImageIndex]}
              alt={title ?? 'Certificate page'}
              className="w-full h-full object-contain"
              onLoad={() => setIsLoading(false)}
            />

            {imageList.length > 1 && (
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
    </AnimatePresence>
  );
};

/* ───────────────────────  ImagePreview card  ─────────────────────── */

const ImagePreview = ({ imageUrl, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sky-500" />
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
  );
};

/* ───────────────────────────  Achievements  ────────────────────────── */

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  /* Certificates + offers (unchanged, just remove FaTrophy usage) */
  const certificates = [
    {
      type: 'certificate',
      title: 'Certificate of Completion and Evaluation',
      issuer: 'Code Techie',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: [
        '/certificates/Certificate Of Completion And Evaluation -1.jpg',
        '/certificates/Certificate Of Completion And Evaluation -2.jpg',
      ],
    },
    {
      type: 'certificate',
      title: 'Certificate of Completion',
      issuer: 'Bluestock Fintech',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/BEENSD73229.jpg'],
    },
    {
      type: 'certificate',
      title: 'Certificate of Completion',
      issuer: 'Critical Infrastructure Protection',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/introduction_to_cip.png'],
    },
    {
      type: 'certificate',
      title: 'Certificate of Completion',
      issuer: 'Google Analytics Certification GA-4',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Screenshot_20250601_205741_Brave.jpg'],
    },
    {
      type: 'certificate',
      title: 'Certificate of Completion',
      issuer: 'Introduction To Cybersecurity',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Cisco Certification_page-0001.jpg'],
    },
    {
      type: 'certificate',
      title: 'AWS Virtual Simulation Certificate',
      issuer: 'Amazon Web Services',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/AWS Virtual Simulation Certification.jpg'],
    },
    {
      type: 'certificate',
      title: 'Cyber Job Simulation Certificate',
      issuer: 'Cybersecurity Training',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Cyber Job Simulation Certification.jpg'],
    },
    {
      type: 'certificate',
      title: 'Udemy Course Certificate',
      issuer: 'Udemy',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/Udemy Course Cert.jpg'],
    },
    {
      type: 'certificate',
      title: 'CodeAlpha DevOps Certificate',
      issuer: 'CodeAlpha',
      date: '2025',
      icon: <FaCertificate className="text-sky-500" />,
      images: ['/certificates/CodeAlpha DevOps Cert -1.jpg'],
    },
  ];

  const offers = [
    {
      type: 'offer',
      title: 'Python Development Internship',
      company: 'Code Techie',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Python Development Internshipt Offer Letter-4.jpg'],
    },
    {
      type: 'offer',
      title: 'DevOps Internship',
      company: 'CodeAlpha',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/DevOps Offer Letter!-1.jpg'],
    },
    {
      type: 'offer',
      title: 'Software Development Intern (Team Lead)',
      company: 'Bluestock Finetech',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Offer Letter Of Bluestock Finetech .jpg'],
    },
    {
      type: 'offer',
      title: 'Web Development Internship',
      company: 'Apex Planet PVT. LTD',
      date: '2025',
      icon: <FaFileAlt className="text-sky-500" />,
      images: ['/offers/Internship Offer Letter By Apex Planet .jpg'],
    },
  ];

  /* Animation variants */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  /* Card component */
  const AchievementCard = ({ achievement }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-sky-500/50 transition-all duration-300"
    >
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="text-xl sm:text-2xl">{achievement.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-1 sm:mb-2">
              {achievement.type === 'certificate'
                ? achievement.issuer
                : achievement.company}
            </p>
            <p className="text-sky-500 text-xs sm:text-sm">
              {achievement.date}
            </p>
          </div>
        </div>

        {!!achievement.images?.length && (
          <>
            <ImagePreview
              imageUrl={achievement.images[0]}
              title={achievement.title}
            />
            <button
              onClick={() =>
                setSelectedImage({
                  images: achievement.images,
                  title: achievement.title,
                })
              }
              className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-sky-500/20 hover:bg-sky-500/30 rounded-lg transition-colors"
            >
              <FaEye className="mr-2" />
              View Full{' '}
              {achievement.type === 'certificate' ? 'Certificate' : 'Offer'}
              {achievement.images.length > 1 &&
                ` (${achievement.images.length} pages)`}
            </button>
          </>
        )}
      </div>
    </motion.div>
  );

  /* ─────────────────────────── Render ─────────────────────────── */

  return (
    <section className="min-h-screen py-12 sm:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
            Achievements &amp; Certifications
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-20 h-1 bg-sky-500 mx-auto"
          />
        </motion.div>

        {/* Certificates */}
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
            {certificates.map((c, i) => (
              <AchievementCard key={i} achievement={c} />
            ))}
          </motion.div>
        </div>

        {/* Offers */}
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
            {offers.map((o, i) => (
              <AchievementCard key={i} achievement={o} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        images={selectedImage?.images}
        title={selectedImage?.title}
      />
    </section>
  );
};

export default Achievements;
