import React from "react"

// Files
import Heading from "../Heading"
import Section from "../Section"
import SkillsBox from "./SkillsBox"

const Skills = () => {
  return (
    <Section
      id="skills"
      classis="flex gap-4 md:gap-8 flex-col items-center justify-center scroll-margin"
    >
      <Heading title="Skills" />
      <SkillsBox />
    </Section>
  )
}

export default Skills
