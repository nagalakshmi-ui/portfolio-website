import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const principleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="about-content">
          <motion.h2 className="about-title" variants={itemVariants}>
            Building frontend systems that scale with product complexity
          </motion.h2>
          
          <motion.div className="about-description" variants={itemVariants}>
            <p>
              Frontend engineer focused on component architecture, API-driven state management, and performance optimization. Shipped production systems for enterprise workflows including real-time logging, document processing, and approval management platforms.
            </p>
            
            <p>
              Work includes building reusable component libraries, integrating REST APIs with complex state flows, and optimizing render performance for data-intensive dashboards. Code written for maintainability and team scalability.
            </p>
          </motion.div>

          <motion.div 
            className="about-principles"
            variants={containerVariants}
          >
            {[
              { title: 'Component Architecture', desc: 'Reusable systems built for scale' },
              { title: 'API-Driven Design', desc: 'Clean state management and data flow' },
              { title: 'Performance-First', desc: 'Optimized rendering and fast UIs' }
            ].map((principle, i) => (
              <motion.div 
                key={i}
                className="principle"
                variants={principleVariants}
                custom={i}
              >
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About