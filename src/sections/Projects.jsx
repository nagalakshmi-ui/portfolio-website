import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const projects = [
    {
      title: 'ELOG System',
      subtitle: 'Enterprise Workflow Automation Platform',
      challenge: 'Manual workflow tracking caused data inconsistency and delayed cross-department visibility, requiring real-time sync without blocking the UI.',
      solution: 'Built component-driven dashboard with optimistic updates, background sync, normalized state, and API polling with exponential backoff.',
      impact: 'Reduced tracking overhead with optimized responsiveness and real-time UI updates.',
      highlights: [
        'Reusable workflow components',
        'WebSocket + REST API fallback',
        'Optimistic UI with rollback',
        'Modular dashboard architecture'
      ],
      tech: ['React', 'TypeScript', 'REST APIs', 'TailwindCSS'],
      metrics: {
        performance: 'Optimized API response times'
      },
      confidential: true,
      cta: 'Frontend Breakdown'
    },
    {
      title: 'Document Management System',
      subtitle: 'Centralized Document Lifecycle Platform',
      challenge: 'Scattered workflows caused version conflicts and compliance gaps, requiring centralized access control with metadata search and audit logging.',
      solution: 'Architected modular upload with chunked processing, debounced search, role-based rendering, and state machine approval workflows.',
      impact: 'Improved workflow efficiency with complete audit trails and zero version conflicts.',
      highlights: [
        'Chunked upload with progress tracking',
        'Metadata-driven search architecture',
        'Role-based component rendering',
        'State machine approval workflows'
      ],
      tech: ['React', 'TypeScript', 'REST APIs', 'State Management'],
      metrics: {
        performance: 'Fast upload initialization'
      },
      confidential: true,
      cta: 'System Overview'
    },
    {
      title: 'Change Control System',
      subtitle: 'Multi-Stage Approval Workflow Engine',
      challenge: 'Manual routing and status tracking caused delays, requiring automated workflow engine with dynamic approval chains and real-time notifications.',
      solution: 'Built schema-driven forms with status-based rendering, webhook listeners for real-time updates, and notification queue with retry logic.',
      impact: 'Enhanced approval automation with real-time status updates and complete audit trail coverage.',
      highlights: [
        'Schema-driven form validation',
        'Status-driven conditional rendering',
        'Webhook-based real-time updates',
        'Complete audit trail architecture'
      ],
      tech: ['React', 'TypeScript', 'REST APIs', 'TailwindCSS'],
      metrics: {
        performance: 'Responsive form validation'
      },
      confidential: true,
      cta: 'View Architecture'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Enterprise frontend systems built for workflow automation, data management, and scalable operations.
          </p>
        </motion.div>

        <motion.div 
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`project-item ${index % 2 === 1 ? 'reverse' : ''}`}
              variants={projectVariants}
            >
              <div className="project-visual">
                <div className="visual-wrapper">
                  <div className="dashboard-mock">
                    {/* Grid Overlay */}
                    <div className="grid-overlay"></div>
                    
                    {/* Performance Metrics Badge */}
                    <div className="performance-badge">
                      <div className="perf-dot"></div>
                      <span>{project.metrics.performance}</span>
                    </div>
                    
                    {/* Architecture Label */}
                    <div className="arch-label">
                      <span className="arch-icon">⚡</span>
                      <span>React + TypeScript</span>
                    </div>
                    
                    <div className="mock-header">
                      <div className="mock-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="mock-title">{project.title}</div>
                      <div className="mock-indicators">
                        <span className="indicator active" title="API Connected"></span>
                        <span className="indicator active" title="Build Success"></span>
                      </div>
                    </div>
                    <div className="mock-content">
                      <div className="mock-sidebar">
                        <div className="sidebar-item active"></div>
                        <div className="sidebar-item"></div>
                        <div className="sidebar-item"></div>
                        <div className="sidebar-item"></div>
                      </div>
                      <div className="mock-main">
                        <div className="mock-card">
                          <div className="card-header-line"></div>
                          <div className="card-stat">
                            <div className="stat-label"></div>
                            <div className="stat-value"></div>
                          </div>
                          <div className="card-chart">
                            <div className="chart-bar" style={{height: '45%', left: '10%'}}></div>
                            <div className="chart-bar" style={{height: '65%', left: '25%'}}></div>
                            <div className="chart-bar" style={{height: '55%', left: '40%'}}></div>
                            <div className="chart-bar" style={{height: '80%', left: '55%'}}></div>
                            <div className="chart-bar" style={{height: '70%', left: '70%'}}></div>
                            <div className="chart-line"></div>
                          </div>
                        </div>
                        <div className="mock-card">
                          <div className="card-header-line"></div>
                          <div className="card-grid">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* System Stats Footer */}
                    <div className="system-stats">
                      <div className="stat-item">
                        <span className="stat-icon">📊</span>
                        <span className="stat-text">{project.metrics.scale || project.metrics.storage}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">⚡</span>
                        <span className="stat-text">{project.metrics.uptime || project.metrics.users}</span>
                      </div>
                    </div>
                  </div>
                  {project.confidential && (
                    <div className="confidential-badge">Enterprise</div>
                  )}
                </div>
              </div>

              <div className="project-details">
                <div className="project-header-section">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                
                <div className="case-study-section">
                  <div className="case-study-block">
                    <div className="case-label">Challenge</div>
                    <p className="case-text">{project.challenge}</p>
                  </div>
                  
                  <div className="case-study-block">
                    <div className="case-label">Solution</div>
                    <p className="case-text">{project.solution}</p>
                  </div>
                  
                  <div className="case-study-block impact-block">
                    <div className="case-label">Impact</div>
                    <p className="case-text">{project.impact}</p>
                  </div>
                  
                  <div className="case-study-block highlights-block">
                    <div className="case-label">Frontend Engineering</div>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="highlight-item">
                          <span className="highlight-dot"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="stack-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-cta">
                  <button className="cta-case-study">
                    <span>{project.cta}</span>
                    <span className="cta-arrow">→</span>
                  </button>
                  <button className="cta-confidential">
                    <span>🔒 Enterprise Project</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects