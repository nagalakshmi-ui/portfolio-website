import { motion } from 'framer-motion'
import './ExperienceJourney.css'

const ExperienceJourney = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const experience = {
    role: 'Associate Developer',
    company: 'Shanvix Solutions',
    description: 'Developed enterprise frontend systems including ELOG, DMS, and LMS platforms. Built component libraries, integrated REST APIs with complex state flows, and optimized UI performance for data-heavy dashboards. Contributed to production codebases handling real-time workflow tracking and document management.',
    tech: ['React', 'TypeScript', 'REST APIs', 'TailwindCSS']
  }

  const highlights = [
    {
      title: 'Component Architecture',
      description: 'Built reusable UI component systems with TypeScript interfaces and prop validation for maintainable scaling.'
    },
    {
      title: 'API Integration Patterns',
      description: 'Implemented data fetching strategies with error boundaries, loading states, and optimistic updates for seamless UX.'
    }
  ]

  const education = {
    degree: 'BSc Computer Science',
    description: 'Focused on programming fundamentals, frontend engineering, and modern web application development.'
  }

  const certifications = [
    'Full Stack Development',
    'Python Programming',
    'Frontend Development Internship'
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        <motion.div 
          className="journey-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="journey-title">Experience & Background</h2>
          <p className="journey-subtitle">
            Engineering path focused on scalable UI systems, component architecture, and API-driven frontend development.
          </p>
        </motion.div>

        <div className="journey-grid">
          {/* Left Column - Experience */}
          <div className="journey-column">
            <motion.div 
              className="journey-card experience-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              <div className="card-label">Experience</div>
              <h3 className="card-role">{experience.role}</h3>
              <div className="card-company">{experience.company}</div>
              <p className="card-description">{experience.description}</p>
              
              <div className="tech-tags">
                {experience.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>

            {/* Additional Highlights */}
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index} 
                className="journey-card highlight-card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index + 1}
              >
                <h4 className="highlight-title">{highlight.title}</h4>
                <p className="highlight-description">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="journey-column">
            <motion.div 
              className="journey-card education-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={3}
            >
              <div className="card-label">Education</div>
              <h3 className="card-degree">{education.degree}</h3>
              <p className="card-description">{education.description}</p>
            </motion.div>

            <motion.div 
              className="journey-card certifications-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={4}
            >
              <div className="card-label">Certifications</div>
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <li key={index} className="cert-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceJourney
