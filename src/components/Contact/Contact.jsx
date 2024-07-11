import React from "react"

// Files
import EmailBtn from "./EmailBtn"
import RotatingLinks from "./RotatingLinks"
import Section from "../Section"

const Contact = () => {
  return (
    <Section
      id="contact"
      classis="sm:px-8 px-2 py-6 md:py-12 mb-10 lg:mb-16 xl:mb-20"
    >
      <div className="w-full flex flex-wrap gap-16 lg:gap-0">
        <EmailBtn />
        <div className="lg:w-1/3 w-full flex items-center justify-center">
          <RotatingLinks />
        </div>
      </div>
    </Section>
  )
}

export default Contact
