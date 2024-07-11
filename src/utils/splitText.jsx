import React from "react"

const SplitText = ({ text, word }) => {
  if (word) {
    const wordArr = text?.split(" ")

    return wordArr.map((item, idx) => (
      <span
        key={idx}
        className="flex"
      >
        <span>{item}</span>
        <div className="size-1" />
      </span>
    ))
  } else {
    const textArr = text?.split("")

    return textArr.map((item, idx) =>
      item === " " ? (
        <div
          key={idx}
          className="size-3"
        />
      ) : (
        <span key={idx}>{item}</span>
      )
    )
  }
}

export default SplitText
