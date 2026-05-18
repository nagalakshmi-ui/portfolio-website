import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Active section detection
      const sections = ['home', 'projects', 'about', 'skills', 'journey', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Education', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  const isActive = (href) => {
    const sectionId = href.replace('#', '')
    return activeSection === sectionId
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={handleNavClick}>
          Naga Lakshmi
        </a>

        <div className="nav-desktop">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a 
                  href={item.href} 
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">
            <span>Let's Talk</span>
          </a>
        </div>

        <button 
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </button>

        <div className={`nav-mobile ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-mobile-menu">
            {navItems.map((item) => (
              <li key={item.name} className="nav-mobile-item">
                <a 
                  href={item.href} 
                  className={`nav-mobile-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta-mobile" onClick={handleNavClick}>
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar