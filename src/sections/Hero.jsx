import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <div className="hero-left">
            <motion.span className="hero-label" variants={itemVariants}>
              Frontend Engineer
            </motion.span>
            
            <motion.h1 className="hero-heading" variants={itemVariants}>
              Engineering scalable frontend systems for data-driven enterprise products.
            </motion.h1>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Building production-grade React applications with TypeScript, API-driven architectures, and component systems designed for scale. Experience shipping enterprise UI platforms handling complex workflows and real-time data.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
              <button onClick={scrollToProjects} className="btn-primary" aria-label="View my featured projects">
                View Projects
              </button>
              <a 
                href="/Guntupalli_Naga_Lakshmi_Resume.pdf" 
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download ATS-optimized resume"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="hero-right">
            <div className="visual-composition">
              <div className="glow-sphere"></div>
              
              <motion.div 
                className="floating-card card-1"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="card-title">Dashboard.tsx</div>
                </div>
                <div className="card-content">
                  <div className="code-line"><span className="code-keyword">const</span> data = <span className="code-function">useFetch</span>()</div>
                  <div className="code-line"><span className="code-keyword">return</span> &lt;<span className="code-tag">Analytics</span> /&gt;</div>
                </div>
              </motion.div>

              <motion.div 
                className="floating-card card-2"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <div className="card-header">
                  <div className="card-title">Performance</div>
                </div>
                <div className="card-content">
                  <div className="metric-row">
                    <span className="metric-label">Load Time</span>
                    <span className="metric-value">0.8s</span>
                  </div>
                  <div className="metric-bar">
                    <div className="metric-fill"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="floating-card card-3"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <div className="card-header">
                  <div className="card-title">Build Status</div>
                </div>
                <div className="card-content">
                  <div className="status-item">
                    <div className="status-dot success"></div>
                    <span>Production</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero