import React from "react"

const Footer = () => {
  const date = new Date()
  return (
    <div className="w-full border-t opacity-40 mt-8 lg:mt-12 xl:mt-16 border-w px-4 md:px-12 py-2 md:py-4">
      <h6 className="h6 tracking-widest">
        &copy; Yogesh Gojiya {date.getFullYear()}
      </h6>
    </div>
  )
}

export default Footer
