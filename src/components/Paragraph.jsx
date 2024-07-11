"use client"

import { useGSAP } from "@gsap/react"
import React, { useRef } from "react"
import gsap from "gsap"
import SplitText from "@/utils/splitText"

const Paragraph = ({ text }) => {
  let pRef = useRef()

  const size = ["size-1", "size-3"] // Saving Tailwind Classis for use late

  // GSAP animation for paragraph
  useGSAP(() => {
    gsap.from(pRef.children, {
      scrollTrigger: {
        trigger: pRef,
        start: "top 70%",
        end: "120% bottom",
        scrub: 0.3,
      },
      opacity: 0.1,
      stagger: 1,
    })
  })

  return (
    <h1
      ref={(el) => (pRef = el)}
      className="leading-8 opacity-40 flex flex-wrap mt-4"
    >
      {/* Custom Component for Split Text's */}
      <SplitText
        text={text}
        word
      />
    </h1>
  )
}

export default Paragraph
