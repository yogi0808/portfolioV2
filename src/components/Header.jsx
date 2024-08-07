import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import LocomotiveScroll from "locomotive-scroll"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

// Files
import { navLinks } from "../constants"
import MenuSvg from "../assets/svg/MenuSvg"
import Logo from "../assets/svg/Logo"
import NavL from "./NavL"

const Header = ({ tl }) => {
  const locoScroll = new LocomotiveScroll()

  const [isNavOpen, setIsNavOpen] = useState(false)

  let logoRef = useRef()
  let navRef = useRef()
  let bgObjectRef = useRef()

  // GSAP animation for logo, links and background boxes
  useGSAP(() => {
    tl.to(logoRef.current, {
      y: 0,
      opacity: 1,
    })
      .from(navRef.children, {
        y: -20,
        opacity: 0,
        stagger: 0.2,
      })
      .from(bgObjectRef.children, {
        y: -100,
        opacity: 0,
        stagger: 0.2,
      })
  })

  // Handling Close nav menu In link click
  const handelClick = () => {
    setIsNavOpen(false)
    enablePageScroll()
  }

  // Handling toggle nav menu
  const toggleNav = () => {
    if (isNavOpen) {
      setIsNavOpen(false)
      enablePageScroll()
    } else {
      setIsNavOpen(true)
      disablePageScroll()
    }
  }

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-[999]">
        <div className="px-4 md:px-12 border-b border-zinc-300 rounded-lg backdrop-blur-md">
          <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
            <div className="w-full md:w-fit grid md:flex grid-cols-2 items-center justify-between">
              <div
                ref={logoRef}
                className="h-[80px] w-fit opacity-0 -translate-y-5 cursor-pointer"
                onClick={() => locoScroll.scrollTo("top")}
              >
                <Logo />
              </div>

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
                <NavL
                  link={link}
                  key={link.id}
                  locoScroll={locoScroll}
                  handelClick={handelClick}
                />
              ))}
            </nav>
          </div>
        </div>
        <div
          ref={(el) => (bgObjectRef = el)}
          className={`absolute top-0 left-0 bottom-0 w-full -z-10 transition-all duration-300`}
        >
          <div className="w-24 h-10 rounded-full absolute top-1/2 -translate-y-1/2 left-0 bg-[#ff569d]"></div>
          <div className="w-28 h-10 rounded-full absolute top-0 left-8 sm:left-20 bg-[#00e5ba]"></div>
          <div className="w-28 h-16 rounded-full absolute top-1/2 -translate-y-1/2 right-5 sm:right-12 bg-[#ff6000]"></div>
          <div className="w-20 h-10 rounded-full absolute top-0 right-0 bg-[#ff4b93]"></div>
          <div className="w-24 h-12 rounded-full absolute bottom-0 right-32 sm:right-44 bg-[#5407ff]"></div>
        </div>
      </div>
    </>
  )
}

export default Header
