"use client"

import React, { useState } from "react"
import PerspectiveText from "../PerspectiveText"

const EmailBtn = () => {
  const [email, setEmail] = useState("gojiyayogesh08@gmail.com")

  // Handling Copy text on Click
  const handelClick = () => {
    navigator.clipboard.writeText(email)
    setEmail("Email Copied")
    setTimeout(() => {
      setEmail("gojiyayogesh08@gmail.com")
    }, 5000)
  }

  return (
    <div className="lg:w-2/3 w-full flex sm:items-start justify-center flex-col md:pl-8 gap-12">
      <div className="flex gap-2 flex-col">
        <h5 className="h5 font-medium tracking-wider opacity-60">
          Get in touch <span className="h6">(Click to copy)</span>
        </h5>
        <button
          className="sm:text-4xl leading-10  rounded-xl bg-w text-black transition-all duration-300 text-lg font-bold hover:opacity-100 w-fit opacity-70"
          onClick={handelClick}
        >
          <PerspectiveText classis={"sm:px-8 sm:py-4 px-4 py-2"}>
            {email}
          </PerspectiveText>
        </button>
      </div>
      <div className="flex gap-2 flex-col">
        <h5 className="h5 font-medium tracking-wider opacity-60">CV</h5>
        <a
          href="https://drive.google.com/file/d/1qxj8acgJss_j6vCc_zape_5jVdsvvJac/view?usp=drive_link"
          target="blanc"
          className="sm:text-2xl leading-10 rounded-xl bg-w text-black transition-all duration-300 text-lg font-bold hover:opacity-100 w-fit opacity-70"
        >
          <PerspectiveText classis={"sm:px-4 sm:py-2 px-4 py-2"}>
            Download CV
          </PerspectiveText>
        </a>
      </div>
    </div>
  )
}

export default EmailBtn
