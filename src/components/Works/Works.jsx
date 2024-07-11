import React from "react"

// Files
import Heading from "../Heading"
import WorkCard from "./WorkCard"
import { works } from "@/constants"
import Section from "../Section"

const Works = () => {
  return (
    <Section
      id="works"
      classis="sm:px-8 px-2 w-full scroll-margin"
    >
      <div className="w-full flex-center mb-8">
        {/* Custom animated component for Heading */}
        <Heading
          title="Works"
          classes="w-fit"
        />
      </div>
      <div className="w-full flex flex-col gap-24">
        {works.map((work, idx) => (
          <WorkCard
            key={idx}
            work={work}
          />
        ))}
      </div>
    </Section>
  )
}

export default Works
