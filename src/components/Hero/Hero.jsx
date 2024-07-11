import React from "react"

// Files
import Model from "./Model"
import HeroTexts from "./HeroTexts"
import Section from "../Section"

const Hero = () => {
  return (
    <Section
      id="hero"
      classis="mt-20 !px-0 pt-8 lg:pt-12 xl:pt-16 flex gap-8 flex-col items-center justify-center scroll-margin"
    >
      <HeroTexts />
      <Model />
    </Section>
  )
}

export default Hero
