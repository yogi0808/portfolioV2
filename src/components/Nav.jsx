import { navLinks } from "@/constants"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import PerspectiveText from "./PerspectiveText"

const perspective = {
  initial: {
    opacity: 0,
    borderRadius: "100%",
    rotateX: 90,
    translateY: 30,
    translateX: -20,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    borderRadius: "25px",
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35 },
      delay: 0.25 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    borderRadius: "100%",
    transition: {
      duration: 0.5,
      ease: [0.75, 0, 0.24, 1],
    },
  },
}

const Nav = ({ toggleNav }) => {
  return (
    <div className="h-full px-10 pt-24 pb-12">
      <div className="flex gap-5 flex-col items-start">
        {navLinks.map((link, i) => {
          return (
            <div
              className="perspective"
              key={link.id}
            >
              <motion.div
                custom={i}
                variants={perspective}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link
                  className="text-w font-bold text-3xl capitalize"
                  href={link.url}
                  onClick={toggleNav}
                >
                  <PerspectiveText>{link.title}</PerspectiveText>
                </Link>
              </motion.div>
            </div>
          )
        })}
      </div>
      <div className="absolute -z-[1] w-full h-full left-0 top-0 blur-md overflow-hidden">
        <div className="w-24 h-10 rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-[#ff569d]" />
        <div className="w-28 h-10 rounded-full absolute top-0 left-8 sm:left-20 bg-[#00e5ba]" />
        <div className="w-28 h-16 rounded-full absolute top-2/3 -translate-y-1/2 right-0 bg-[#ff6000]" />
        <div className="w-20 h-10 rounded-full absolute top-1/3 -translate-y-1/2 right-0 bg-[#ff4b93]" />
        <div className="w-24 h-12 rounded-full absolute bottom-0 right-32 sm:right-44 bg-[#5407ff]" />
      </div>
    </div>
  )
}

export default Nav
