"use client"

import gsap from "gsap"
import Image from "next/image"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

// Files
import SplitText from "@/utils/splitText"
import { heroText } from "@/constants"
import { heroTl } from "@/utils/helper"

const HeroTexts = () => {
  let text1Ref = useRef()
  let nameRef = useRef()
  let text2Ref = useRef()

  // GSAP animation for hero texts
  useGSAP(() => {
    heroTl
      .from(text1Ref.children, {
        y: 60,
        opacity: 0,
        stagger: 0.02,
      })
      .from(nameRef.children, {
        y: 60,
        opacity: 0,
        stagger: 0.02,
      })
      .from(text2Ref.children, {
        y: 60,
        opacity: 0,
        stagger: 0.02,
      })
  })
  return (
    <div className="flex gap-4 flex-col">
      <h3
        className="h5 font-medium clip-path flex leading-5"
        ref={(el) => (text1Ref = el)}
      >
        {/* Custom Component for Split Text's*/}
        <SplitText text={heroText[0]} />
      </h3>
      <h1
        ref={(el) => (nameRef = el)}
        className="h1 font-bold relative pb-3 md:pb-4 clip-path flex leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem]"
      >
        {/* Custom Component for Split Text's*/}
        <SplitText text={heroText[1]} />
        <span className="absolute -bottom-2 left-0 -z-10">
          <Image
            className="w-32 md:w-36 ml-3 md:ml-4 lg:w-40 xl:w-48"
            src="/curve.webp"
            alt="curve"
            width={100}
            height={40}
          />
        </span>
      </h1>
      <h3
        ref={(el) => (text2Ref = el)}
        className="h5 font-medium clip-path flex leading-5"
      >
        {/* Custom Component for Split Text's*/}
        <SplitText text={heroText[2]} />
      </h3>
    </div>
  )
}

export default HeroTexts
