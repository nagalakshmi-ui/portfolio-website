import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name-section">
          <h3 className="footer-name">Naga Lakshmi Guntupalli</h3>
          <p className="footer-title">Frontend Developer | React Specialist</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nagalakshmi-frontend" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:guntupallinagalakshmi06@gmail.com" className="footer-icon" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; 2026 Naga Lakshmi Guntupalli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
