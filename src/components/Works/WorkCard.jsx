import React from "react"
import Image from "next/image"
import PerspectiveText from "../PerspectiveText"

const WorkCard = ({ work }) => {
  return (
    <div
      style={{ top: 106 }}
      className="w-full flex-center sticky text-w"
    >
      <div className="md:w-[90%] lg:w-[80%] w-full h-[70%] mx-auto rounded-2xl p-3 md:p-8 flex flex-wrap-reverse md:gap-0 gap-4 border-2 bg-noise bg-[#111]">
        <div className="md:w-1/2 md:p-3 flex flex-col justify-between gap-2">
          <h1 className="h5 sm:h4 md:h3 font-semibold opacity-70">
            {work.title}
          </h1>
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
          <div className="flex gap-2">
            {work.link ? (
              <a
                target="blank"
                href={work.link}
                className="bg-w text-black text-lg font-bold transition-all duration-300 hover:opacity-100 rounded-full w-fit opacity-70"
              >
                <PerspectiveText classis={"px-4 py-2"}>
                  Visit Repo
                </PerspectiveText>
              </a>
            ) : (
              ""
            )}
            {work.live ? (
              <a
                target="blank"
                href={work.live}
                className="bg-w text-black text-lg font-bold transition-all duration-300 hover:opacity-100 rounded-full w-fit opacity-70"
              >
                <PerspectiveText classis={"px-4 py-2"}>Visit</PerspectiveText>
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full h-full md:my-auto md:w-1/2">
          <div className="relative mx-auto aspect-video max-md:max-w-[360px] rounded-md overflow-hidden">
            <Image
              src={work.img}
              alt={work.title}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
