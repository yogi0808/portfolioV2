import React from "react"

const PerspectiveText = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center perspective-text transition-transform duration-[0.75s] ease-[cubic-bezier(0.76,0,0,0.24,1)]">
      <p className="select-none transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0,0.24,1)]">
        {children}
      </p>
      <p className="absolute select-none transition-all duration-[0.75s] ease-[cubic-bezier(0.76,0,0,0.24,1)] origin-bottom">
        {children}
      </p>
    </div>
  )
}

export default PerspectiveText
