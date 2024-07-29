import React from "react"

// Files
import Lenis from "@/components/Lenis"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero/Hero"
import Works from "@/components/Works/Works"
import Skills from "@/components/Skills/Skills"
import AboutMe from "@/components/About/AboutMe"
import Contact from "@/components/Contact/Contact"

const App = () => {
  return (
    <Lenis>
      <main className="bg-noise">
        <Header />
        <Hero />
        <Skills />
        <AboutMe />
        <Works />
        <Contact />
        <Footer />
      </main>
    </Lenis>
  )
}

export default App
