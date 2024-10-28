import React from "react"

// Files
import Heading from "../Heading"
import Section from "../Section"
import ProjectCard from "./ProjectCard"
import { projects } from "@/constants"

const Projects = () => {
  return (
    <Section
      id="projects"
      classis="sm:px-8 px-2 w-full scroll-margin"
    >
      <div className="w-full flex-center mb-8">
        {/* Custom animated component for Heading */}
        <Heading
          title="Projects"
          classes="w-fit"
        />
      </div>
      <div className="w-full flex flex-col gap-24">
        {projects.map((work, idx) => (
          <ProjectCard
            key={idx}
            work={work}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects
