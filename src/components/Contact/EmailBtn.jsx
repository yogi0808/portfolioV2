"use client"

import React, { useState } from "react"
import PerspectiveText from "../PerspectiveText"
import { Email } from "@/constants"

const EmailBtn = () => {
  const [copy, setCopy] = useState("Click to copy")

  // Handling Copy text on Click
  const handelClick = () => {
    navigator.clipboard.writeText(Email)
    setCopy("Copied")
    setTimeout(() => {
      setCopy("Click to copy")
    }, 5000)
  }

  return (
    <div className="lg:w-2/3 w-full flex sm:items-start justify-center flex-col md:pl-8 gap-12">
      <div className="flex gap-2 flex-col">
        <h5 className="h5 font-medium tracking-wider opacity-60">
          Get in touch <span className="h6">({copy})</span>
        </h5>
        <button
          className="sm:text-2xl leading-10  rounded-xl bg-w text-black transition-all duration-300 text-lg font-bold hover:opacity-100 w-fit opacity-70"
          onClick={handelClick}
        >
          <PerspectiveText classis={"px-4 py-2"}>{Email}</PerspectiveText>
        </button>
      </div>
      <div className="flex gap-2 flex-col">
        <h5 className="h5 font-medium tracking-wider opacity-60">CV</h5>
        <a
          href="https://drive.google.com/file/d/1f82EN8ZUpncNv4H51xvSjJ1RVsPpnk1b/view?usp=sharing"
          target="blanc"
          className="sm:text-2xl leading-10 rounded-xl bg-w text-black transition-all duration-300 text-lg font-bold hover:opacity-100 w-fit opacity-70"
        >
          <PerspectiveText classis={"px-4 py-2"}>View CV</PerspectiveText>
        </a>
      </div>
    </div>
  )
}

export default EmailBtn
