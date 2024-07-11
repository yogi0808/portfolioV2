"use client"

import gsap from "gsap"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import React, { useRef } from "react"

// Files
import Logo from "@/svgs/Logo"
import { socialLinks } from "@/constants"

const RotatingLinks = () => {
  const preload = ["right-3", "bottom-3", "left-3", "top-3"] // Saving Tailwind Classis for use late

  let linksRef = useRef()

  const tl = gsap.timeline()
  // GSAP animation for rotating Social Links
  useGSAP(() => {
    tl.to(
      linksRef,
      {
        rotate: "360deg",
        repeat: -1,
        duration: 20,
        ease: "linear",
      },
      "start"
    ).to(
      linksRef.children,
      {
        rotate: "-360deg",
        repeat: -1,
        duration: 20,
        ease: "linear",
      },
      "start"
    )
  })

  return (
    <div className="w-80 h-80 flex relative items-center justify-center rounded-full border border-w opacity-60">
      <div
        className="h-full absolute w-full rounded-full"
        onMouseEnter={() => tl.pause()}
        onMouseLeave={() => tl.resume()}
        ref={(el) => (linksRef = el)}
      >
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className={`absolute ${item.classis} cursor-pointer transition-opacity ease-in opacity-60 hover:opacity-100`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={50}
              height={50}
            />
          </a>
        ))}
      </div>
      <div className="w-44 h-44 flex items-center justify-center rounded-full border border-w opacity-60">
        <div className="w-28 opacity-60">
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default RotatingLinks
