import React from "react"
import Link from "next/link"

const NavLink = ({ link, onClick }) => {
  return (
    <div onClick={onClick}>
      <Link
        href={link.url}
        className={`link`}
      >
        {link.title}
      </Link>
    </div>
  )
}

export default NavLink