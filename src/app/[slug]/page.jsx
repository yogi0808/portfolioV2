"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import "./markdown.css"
import Footer from "@/components/Footer"
import Lenis from "@/components/Lenis"

const ProjectPage = ({ params }) => {
  const [markdownContent, setMarkdownContent] = useState("")

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMarkdown = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/yogi0808/${params.slug}/readme`
        )

        const data = await res.json()
        const content = atob(data.content)
        console.log(content)
        setMarkdownContent(content)
      } catch (e) {
        console.log("Error Fetching README.md: ", e.message)
      } finally {
        setLoading(false)
      }
    }

    getMarkdown()
  }, [])

  if (loading) {
    return (
      <div className="flex-center w-full h-screen">
        <Image
          src="/logo light.gif"
          alt="Loading..."
          width={150}
          height={150}
          className="opacity-10"
        />
      </div>
    )
  } else {
    return (
      <Lenis>
        <main className="sm:px-8 px-2 ">
          <div className="prose-sm md:prose min-w-[80%] mx-auto markdown-content pt-10">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </div>
          <Footer />
        </main>
      </Lenis>
    )
  }
}

export default ProjectPage
