"use client"

import React, { useState } from "react"

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
    <div className="lg:w-2/3 w-full flex items-center sm:items-start justify-center flex-col md:pl-8 gap-4">
      <h5 className="h5 font-medium tracking-wider opacity-60">
        Get in touch <span className="h6">(Click to copy)</span>
      </h5>
      <button
        className="sm:text-4xl leading-10 sm:px-8 sm:py-4 rounded-xl bg-w text-black transition-all duration-300 text-lg font-bold hover:opacity-100 w-fit px-4 py-2 opacity-70"
        onClick={handelClick}
      >
        {email}
      </button>
    </div>
  )
}

export default EmailBtn
