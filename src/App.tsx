import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import MernProjects from './components/MernProjects'
import DataScienceProjects from './components/DataScienceProjects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, [])

  return (
    <div className="relative bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <MernProjects />
        <DataScienceProjects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
