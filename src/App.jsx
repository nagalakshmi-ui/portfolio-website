import './App.css'
import { motion } from 'framer-motion'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import ExperienceJourney from "./sections/ExperienceJourney"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App