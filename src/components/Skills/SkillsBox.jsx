"use client"

import SkillsSvgs from "@/svgs/SkillsSvgs"
import { motion } from "framer-motion"
import React, { useRef } from "react"

const SkillsBox = () => {
  const wrapper = useRef()
  return (
    <div
      ref={wrapper}
      className="h-[60vh] border-2 p-2 sm:p-5 lg:p-6 flex flex-wrap gap-3 md:gap-6 lg:gap-14 mx-2 sm:mx-auto sm:aspect-[60/40] rounded -[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative max-w-[897px]"
    >
      <p className=" opacity-55 absolute text-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        You can Drag it around
      </p>
      {SkillsSvgs.map((svg, ind) => {
        return (
          // adding Drag animation using Framer Motion
          <motion.div
            className={`h-[50px] sm:h-16 cursor-grab`}
            key={ind}
            drag
            dragConstraints={wrapper}
            dragElastic={0.5}
            whileDrag={{ scale: 1.3 }}
          >
            {svg}
          </motion.div>
        )
      })}
    </div>
  )
}

export default SkillsBox
