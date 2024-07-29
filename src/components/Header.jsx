"use client"

import React, { useState } from "react"
import Button from "./Button"
import { AnimatePresence, motion } from "framer-motion"
import Nav from "./Nav"

// Files

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  const variants = {
    open: {
      width: 280,
      height: 400,
      top: "-20px",
      right: "-20px",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 5,
      height: 5,
      top: "0px",
      right: "0px",
      transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  }

  // Toggling navigation menu
  const toggleNav = () => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  return (
    <div className="fixed right-9 top-9 z-10">
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="w-[480px] h-[400px] backdrop-blur-md rounded-2xl relative border-2 overflow-hidden"
      >
        <AnimatePresence>
          {isActive && <Nav toggleNav={toggleNav} />}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleNav={toggleNav}
      />
    </div>
  )
}

export default Header
