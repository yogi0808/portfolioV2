"use client"

import gsap from "gsap"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import SplitText from "@/utils/splitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Registering GSAP Scroll Trigger Plugin
gsap.registerPlugin(ScrollTrigger)

const Heading = ({ title, classes }) => {
  let titleRef = useRef()

  // GSAP animation for title
  useGSAP(() => {
    gsap.from(titleRef.children, {
      scrollTrigger: {
        trigger: titleRef,
        start: "top 60%",
        end: "400% 60%",
        scrub: 0.3,
      },
      y: 48,
      stagger: 0.1,
    })
  })

  return (
    <h1
      ref={(el) => (titleRef = el)}
      className={`h1 clip-path uppercase font-bold flex clip-path leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] opacity-70 ${
        classes ? classes : ""
      }`}
    >
      {/* Custom Component for Split Text's */}
      <SplitText text={title} />
    </h1>
  )
}

export default Heading
