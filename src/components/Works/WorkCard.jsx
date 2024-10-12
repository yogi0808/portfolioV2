import React from "react"
import Image from "next/image"
import Link from "next/link"

const WorkCard = ({ work }) => {
  return (
    <div
      style={{ top: 106 }}
      className="w-full flex-center sticky text-w"
    >
      <div className="md:w-[90%] lg:w-[80%] w-full h-[70%] mx-auto rounded-2xl p-3 md:p-8 flex flex-wrap-reverse md:gap-0 gap-4 border-2 bg-noise bg-[#111]">
        <div className="md:w-1/2 md:p-3 flex flex-col justify-between gap-2">
          <Link
            href={`/${work.repo}`}
            className="h5 sm:h4 md:h3 font-semibold opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            {work.title}
          </Link>
          <p className="opacity-50 line-clamp-5">{work.description}</p>

          <div className="w-full flex flex-wrap">
            {work.techStack.map((item, idx) => (
              <span
                key={idx}
                className="pr-6 py-1 font-bold l opacity-70 tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full h-full md:my-auto md:w-1/2">
          <Link href={`/${work.repo}`}>
            <div className="relative mx-auto aspect-video max-md:max-w-[360px] rounded-md overflow-hidden">
              <Image
                src={work.img}
                alt={work.title}
                fill
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
