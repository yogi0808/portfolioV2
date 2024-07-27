"use client"

import Link from "next/link"
import { useGSAP } from "@gsap/react"
import React, { useRef, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

// Files
import Logo from "@/svgs/Logo"
import NavLink from "./NavLink"
import MenuSvg from "@/svgs/MenuSvg"
import { navLinks } from "@/constants"
import { heroTl } from "@/utils/helper"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  let logoRef = useRef()
  let navRef = useRef()
  let bgObjectRef = useRef()

  // Adding on click in links for close menu
  const handelClick = () => {
    setIsNavOpen(false)
    enablePageScroll()
  }

  // Toggling navigation menu
  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
      enablePageScroll()
    } else {
      setIsNavOpen(true)
      disablePageScroll()
    }
  }

  // GSAP animation for Links and background Boxes
  useGSAP(() => {
    heroTl
      .to(logoRef.current, {
        y: 0,
        opacity: 1,
      })
      .from(navRef.children, {
        y: -40,
        stagger: 0.15,
      })
      .from(bgObjectRef.children, {
        y: -100,
        opacity: 0,
        stagger: 0.1,
      })
  })
  return (
    <div className="w-screen fixed top-0 left-0 z-[999] overflow-hidden">
      <div className="px-4 md:px-12 backdrop-blur-md">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="w-full md:w-fit grid md:flex grid-cols-2 items-center justify-between">
            <Link
              href="#"
              ref={logoRef}
              className="h-20 w-fit inline-block -translate-y-40 opacity-0"
            >
              <Logo />
            </Link>

            <button
              onClick={toggleNav}
              className="md:hidden justify-self-end"
            >
              <MenuSvg isNavOpen={isNavOpen} />
            </button>
          </div>
          <nav
            ref={(el) => (navRef = el)}
            className={`${
              isNavOpen
                ? "px-4 md:p-0 relative md:static"
                : "-translate-y-[120%] md:translate-y-0"
            } flex absolute md:static justify-end md:gap-2 left-0 top-0 w-full overflow-hidden flex-col md:flex-row transition-all duration-300 max-md:col-span-full justify-self-end backdrop-blur-md md:backdrop-blur-0 rounded-lg`}
          >
            {navLinks.map((link) => (
              <NavLink
                link={link}
                onClick={handelClick}
                key={link.id}
              />
            ))}
          </nav>
        </div>
      </div>
      <div
        ref={(el) => (bgObjectRef = el)}
        className="absolute -z-[1] w-full h-full left-0 top-0 blur-md overflow-hidden"
      >
        <div className="w-24 h-10 rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-[#ff569d]" />
        <div className="w-28 h-10 rounded-full absolute top-0 left-8 sm:left-20 bg-[#00e5ba]" />
        <div className="w-28 h-16 rounded-full absolute top-1/2 -translate-y-1/2 right-5 sm:right-12 bg-[#ff6000]" />
        <div className="w-20 h-10 rounded-full absolute top-0 right-0 bg-[#ff4b93]" />
        <div className="w-24 h-12 rounded-full absolute bottom-0 right-32 sm:right-44 bg-[#5407ff]" />
      </div>
    </div>
  )
}

export default Header
