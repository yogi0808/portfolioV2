import { motion } from "framer-motion"
import React from "react"
import PerspectiveText from "./PerspectiveText"

const Button = ({ isActive, toggleNav }) => {
  return (
    <div
      onClick={toggleNav}
      className="sm:h-10 h-9 w-20 sm:w-28 rounded-full text-sm sm:text-base backdrop-blur-md cursor-pointer overflow-hidden absolute top-0 right-0 uppercase el"
    >
      <motion.div
        animate={{ top: isActive ? "-100%" : "0" }}
        className="relative h-full w-full"
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="h-full w-full bg-[#ffe8dc] text-black font-semibold">
          <PerspectiveText>Menu</PerspectiveText>
        </div>
        <div className="h-full w-full absolute top-full text-w bg-black">
          <PerspectiveText>Close</PerspectiveText>
        </div>
      </motion.div>
    </div>
  )
}

export default Button
