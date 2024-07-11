import React from "react"

// Files
import { aboutText } from "@/constants"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import MyImage from "./MyImage"
import Section from "../Section"

const AboutMe = () => {
  return (
    <Section
      id="about"
      classis="sm:px-8 px-2 flex w-full flex-wrap-reverse gap-4 md:gap-0"
    >
      <div className="md:w-1/3 w-full flex items-center justify-center py-4">
        <MyImage />
      </div>
      <div className="md:w-2/3 sm:px-8 w-full">
        {/* Custom component for Heading animation  */}
        <Heading title="About Me" />

        {/* Custom component for Paragraph animation  */}
        <Paragraph text={aboutText} />
      </div>
    </Section>
  )
}

export default AboutMe
