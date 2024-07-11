import React from "react"

// Files
import Header from "@/components/Header"
import Lenis from "@/components/Lenis"
import Hero from "@/components/Hero/Hero"
import Skills from "@/components/Skills/Skills"
import AboutMe from "@/components/About/AboutMe"
import Works from "@/components/Works/Works"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact/Contact"

const App = () => {
  return (
    <Lenis>
      <div className="bg-noise">
        <Header />
        <Hero />
        <Skills />
        <AboutMe />
        <Works />
        <Contact />
        <Footer />
      </div>
    </Lenis>
  )
}

export default App
