"use client"

import gsap from "gsap"
import Image from "next/image"
import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

const MyImage = () => {
  const imgRef = useRef()

  // GSAP animation for Image
  useGSAP(() => {
    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: "-10% 100%",
        end: "140% bottom",
        scrub: 2,
      },
      y: 100,
      ease: "linear",
    })
  })

  return (
    <Image
      ref={imgRef}
      className="rounded-lg opacity-75 -translate-y-[100px]"
      src="/me.webp"
      alt="Me"
      width={300}
      height={500}
    />
  )
}

export default MyImage
