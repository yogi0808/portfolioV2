"use client"

import gsap from "gsap"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import React, { Suspense, useRef } from "react"
const Spline = React.lazy(() => import("@splinetool/react-spline/next"))

const Model = () => {
  const splineRef = useRef()

  // GSAP animation for spline 3D model
  useGSAP(() => {
    gsap.from(splineRef.current, {
      delay: 5.5,
      opacity: 0,
      scale: 0.5,
    })
  })
  return (
    <div
      ref={splineRef}
      className="w-full h-[515px] sm:h-[502px] md:h-[450px] lg:h-[633px] flex items-center justify-center"
    >
      <Suspense
        fallback={
          <Image
            src="/logo light.gif"
            alt="Loading..."
            width={150}
            height={150}
            className=" opacity-10"
          />
        }
      >
        <Spline
          className="flex max-w-full  h-[515px] sm:h-[502px] md:h-[450px] lg:h-[633px] items-center justify-center aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/450] lg:aspect-[1024/450] pointer-events-none sm:pointer-events-auto"
          scene="https://prod.spline.design/i1GWAw-hnIuYVWE8/scene.splinecode"
        />
      </Suspense>
    </div>
  )
}

export default Model
