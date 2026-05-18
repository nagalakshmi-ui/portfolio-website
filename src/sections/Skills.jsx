import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  const techStack = {
    'Frontend Core': [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'HTML5', icon: '🌐' },
    ],
    'Styling & UI': [
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'CSS3', icon: '🎭' },
    ],
    'Integration & Tooling': [
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vite', icon: '⚡' },
    ]
  }

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="skills-title">Tech Stack</h2>
          <p className="skills-subtitle">
            Core technologies for building production-ready frontend systems.
          </p>
        </motion.div>

        <motion.div 
          className="tech-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(techStack).map(([category, techs], catIndex) => (
            <motion.div key={catIndex} className="tech-category" variants={categoryVariants}>
              <h3 className="category-title">{category}</h3>
              <div className="tech-grid">
                {techs.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="tech-badge"
                    variants={badgeVariants}
                    custom={(catIndex * 4 + index)}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="badge-text">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills