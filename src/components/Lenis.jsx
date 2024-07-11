"use client"
import React from "react"
import { ReactLenis } from "lenis/react"

const Lenis = ({ children }) => {
  // Using lenis for Smooth Scroll
  return <ReactLenis root>{children}</ReactLenis>
}

export default Lenis
