import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const InteractiveElement = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 cursor-pointer"
        animate={controls}
      >
        {/* Main Interactive Element */}
        <motion.div 
          className="relative w-full h-full"
          animate={{
            rotate: isHovered ? [0, 5, -5, 0] : 0
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0
          }}
        >
          {/* Central Orb */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-2xl"
            animate={{
              scale: isHovered ? [1, 1.1, 1] : 1,
              rotate: isHovered ? 360 : 0,
              boxShadow: isHovered ? [
                '0 0 20px rgba(147, 51, 234, 0.5)',
                '0 0 40px rgba(147, 51, 234, 0.7)',
                '0 0 20px rgba(147, 51, 234, 0.5)'
              ] : '0 0 20px rgba(147, 51, 234, 0.5)'
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0
            }}
          >
            {/* Inner Glow */}
            <div className="absolute inset-4 sm:inset-6 md:inset-6 bg-white/20 rounded-full backdrop-blur-sm" />
            <div className="absolute inset-8 sm:inset-10 md:inset-12 bg-gradient-to-br from-purple-400/40 to-blue-400/40 rounded-full" />
            {/* Core Pulse */}
            <motion.div 
              className="absolute inset-12 sm:inset-14 md:inset-16 bg-white/30 rounded-full"
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0
              }}
            />
          </motion.div>

          {/* Orbiting Elements */}
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full shadow-lg"
              animate={{
                x: isHovered ? [
                  Math.cos(index * (Math.PI / 2)) * 80,
                  Math.cos(index * (Math.PI / 2)) * 100,
                  Math.cos(index * (Math.PI / 2)) * 80
                ] : Math.cos(index * (Math.PI / 2)) * 80,
                y: isHovered ? [
                  Math.sin(index * (Math.PI / 2)) * 80,
                  Math.sin(index * (Math.PI / 2)) * 100,
                  Math.sin(index * (Math.PI / 2)) * 80
                ] : Math.sin(index * (Math.PI / 2)) * 80,
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? 360 : 0,
                boxShadow: isHovered ? [
                  '0 0 10px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(236, 72, 153, 0.7)',
                  '0 0 10px rgba(236, 72, 153, 0.5)'
                ] : '0 0 10px rgba(236, 72, 153, 0.5)'
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.2
              }}
            >
              <div className="absolute inset-1 bg-white/20 rounded-full" />
              <motion.div 
                className="absolute inset-2 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0
                }}
              />
            </motion.div>
          ))}

          {/* Particle Effects */}
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={`particle-${index}`}
              className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full"
              animate={{
                x: isHovered ? [
                  Math.cos(index * (Math.PI / 4)) * 120,
                  Math.cos(index * (Math.PI / 4)) * 140,
                  Math.cos(index * (Math.PI / 4)) * 120
                ] : Math.cos(index * (Math.PI / 4)) * 120,
                y: isHovered ? [
                  Math.sin(index * (Math.PI / 4)) * 120,
                  Math.sin(index * (Math.PI / 4)) * 140,
                  Math.sin(index * (Math.PI / 4)) * 120
                ] : Math.sin(index * (Math.PI / 4)) * 120,
                opacity: isHovered ? [0.5, 1, 0.5] : 0.5,
                scale: isHovered ? [1, 1.5, 1] : 1
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.1
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full blur-sm" />
            </motion.div>
          ))}

          {/* Energy Rings */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={`ring-${index}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500/30"
              style={{
                width: `${(index + 1) * 120}px`,
                height: `${(index + 1) * 120}px`
              }}
              animate={{
                rotate: isHovered ? 360 : 0,
                opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                scale: isHovered ? [1, 1.1, 1] : 1
              }}
              transition={{
                duration: 4,
                repeat: isHovered ? Infinity : 0,
                delay: index * 0.5
              }}
            />
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotate(-90deg)' }}>
            <motion.path
              d="M 128 128 m -80 0 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0"
              fill="none"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              animate={{
                strokeDasharray: isHovered ? ["0 1000", "1000 0"] : "0 1000",
                strokeDashoffset: isHovered ? [0, 1000] : 0
              }}
              transition={{
                duration: 3,
                repeat: isHovered ? Infinity : 0
              }}
            />
          </svg>

          {/* Glow Effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5
            }}
            transition={{
              duration: 3,
              repeat: isHovered ? Infinity : 0
            }}
          />
        </motion.div>
      </motion.div>

      {/* Info Bubble */}
      <motion.div
        className="absolute bottom-[16rem] sm:bottom-[20rem] md:bottom-[24rem] left-0 bg-gray-800/90 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl border border-purple-500/30 shadow-xl max-w-[200px] sm:max-w-xs"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs sm:text-sm font-medium">
          Experience the cosmic energy! ✨
        </p>
        <div className="absolute -bottom-2 left-4 w-4 h-4 bg-gray-800/90 border-r border-b border-purple-500/30 transform rotate-45" />
      </motion.div>
    </motion.div>
  );
};

export default InteractiveElement; 