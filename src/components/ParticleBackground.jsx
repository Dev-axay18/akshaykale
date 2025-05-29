import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let mouse = { x: null, y: null, radius: 150 }
    let animationFrameId
    let time = 0

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      
      // Set canvas size to window size
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      
      ctx.scale(dpr, dpr)
      
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      // Reinitialize particles after resize
      init()
    }

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        this.size = Math.random() * 2 + 1
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
        this.layer = Math.floor(Math.random() * 3)
        this.connections = []
        this.activation = 0
        this.activationSpeed = Math.random() * 0.02 + 0.01
      }

      draw() {
        const alpha = 0.5 + Math.sin(time * this.activationSpeed) * 0.2
        ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        this.connections.forEach(connection => {
          const distance = Math.sqrt(
            Math.pow(this.x - connection.x, 2) + 
            Math.pow(this.y - connection.y, 2)
          )
          const maxDistance = 150
          const opacity = (1 - distance / maxDistance) * (0.5 + Math.sin(time * 0.5) * 0.2)
          
          ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(connection.x, connection.y)
          ctx.stroke()
        })
      }

      update() {
        if (!mouse.x || !mouse.y) return

        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
          this.activation = Math.min(1, this.activation + 0.1)
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx / 20
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy / 20
          }
          this.activation = Math.max(0, this.activation - 0.01)
        }

        this.connections.forEach(connection => {
          if (this.activation > 0.5) {
            connection.activation = Math.min(1, connection.activation + 0.05)
          }
        })
      }
    }

    const init = () => {
      particles = []
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 8000)
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }

      particles.forEach(particle => {
        particles.forEach(otherParticle => {
          if (particle !== otherParticle && particle.layer === otherParticle.layer) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            if (distance < 150) {
              particle.connections.push(otherParticle)
            }
          }
        })

        particles.forEach(otherParticle => {
          if (particle !== otherParticle && 
              Math.abs(particle.layer - otherParticle.layer) === 1) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            if (distance < 200) {
              particle.connections.push(otherParticle)
            }
          }
        })
      })
    }

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    try {
      window.addEventListener('resize', resizeCanvas)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseleave', handleMouseLeave)

      resizeCanvas()
      animate()

      return () => {
        window.removeEventListener('resize', resizeCanvas)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseleave', handleMouseLeave)
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
      }
    } catch (error) {
      console.error('Error initializing particle background:', error)
      return () => {}
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}
    />
  )
}

export default ParticleBackground 