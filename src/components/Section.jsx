const Section = ({ children, classis, id }) => {
  return (
    <section
      id={id}
      className={`w-full relative px-5 pt-10 lg:pt-16 xl:pt-20 max-w-[1440px] mx-auto scroll-margin ${
        classis ?? classis
      }`}
    >
      <div className="hidden md:block pointer-events-none absolute bottom-0 w-px left-5 top-10 lg:top-16 xl:top-20 bg-[#FFE8DC] opacity-30" />
      <div className="hidden md:block pointer-events-none absolute bottom-0 w-px right-5 top-10 lg:top-16 xl:top-20 bg-[#FFE8DC] opacity-30" />
      {children}
    </section>
  )
}

export default Section
