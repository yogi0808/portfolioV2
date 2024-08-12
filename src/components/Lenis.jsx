"use client"
import React from "react"
import "lenis/dist/lenis.css"
import { ReactLenis } from "lenis/dist/lenis-react"

const Lenis = ({ children }) => {
  // Using lenis for Smooth Scroll
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default Lenis
