import React from "react"

// Files
import Model from "./Model"
import Section from "../Section"
import HeroTexts from "./HeroTexts"

const Hero = () => {
  return (
    <Section
      id="hero"
      classis="!px-0 pt-20 flex gap-8 flex-col items-center justify-center scroll-margin"
    >
      <HeroTexts />
      <Model />
    </Section>
  )
}

export default Hero
