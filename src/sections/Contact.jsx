import { motion } from 'framer-motion'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:guntupallinagalakshmi06@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const contactMethods = [
    {
      label: 'Email',
      value: 'guntupallinagalakshmi06@gmail.com',
      link: 'mailto:guntupallinagalakshmi06@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/nagalakshmi-frontend'
    },
    {
      label: 'GitHub',
      value: 'View GitHub Profile',
      link: 'https://github.com'
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="contact-title">
            Let's build scalable systems together.
          </h2>
          <p className="contact-description">
            Open to frontend engineering roles focused on product development, enterprise systems, and high-performance web applications.
          </p>

          {/* Contact Methods */}
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="method-label">
                  {method.label}
                  {method.link.startsWith('http') && (
                    <svg className="external-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M10 1L10 5M10 1L6 1M10 1L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span className="method-value">{method.value}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  aria-required="true"
                  aria-label="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  aria-required="true"
                  aria-label="Your email address"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                required
                aria-required="true"
                aria-label="Your message"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" aria-label="Send message">
              <span>Send Message</span>
            </button>
          </motion.form>
        </motion.div>

        {/* Footer */}
        <footer className="contact-footer">
          <p>Designed & developed by Naga Lakshmi</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact