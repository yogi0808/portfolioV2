import React from "react"

// Files

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero/Hero"
import Works from "@/components/Works/Works"
import Skills from "@/components/Skills/Skills"
import AboutMe from "@/components/About/AboutMe"
import Contact from "@/components/Contact/Contact"
import Lenis from "@/components/Lenis"

const App = () => {
  return (
    <Lenis>
      <Header />
      <Hero />
      <Skills />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </Lenis>
  )
}

export default App
