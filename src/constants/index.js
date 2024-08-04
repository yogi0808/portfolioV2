import { CssSvg, ExpressSvg, GitSvg, HtmlSvg, JavaScriptSvg, MongoDB, NextJs, NodeSvg, ReactSvg, TailwindSvg } from "@/svgs/SkillsSvgs"

// Meta Data
export const metadata = {
  title: "Yogesh",
  description: "Discover the creative portfolio of Yogesh, featuring dynamic web designs and animations using React, GSAP, Locomotive Scroll, Spline, and Framer Motion. Explore a showcase of innovative projects and compelling visual experiences.",
  url: "https://portfolio-v2-ten-tan.vercel.app/",
  image: "https://portfolio-v2-ten-tan.vercel.app/header.png"
};

// Navigation links
export const navLinks = [
  {
    id: "0",
    title: "home",
    url: "#hero",
  },
  {
    id: "2",
    title: "skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "about",
    url: "#about",
  },
  {
    id: "4",
    title: "works",
    url: "#works",
  },
  {
    id: "5",
    title: "contact",
    url: "#contact",
  },
]

// Hero text Content
export const heroText = ["Hi There, I'm", "Yogesh Gojiya", "Web Developer"]

// About me Content
export const aboutText = `Hi, I'm Yogesh Gojiya, a dedicated web developer with a Bachelor's degree in Computer Applications (BCA). With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, responsive, and user-friendly web applications. My journey into web development began out of a deep curiosity for how websites work and a passion for building meaningful digital experiences. Over the years, I have developed a keen eye for detail and a commitment to writing clean, efficient code that meets the highest standards of quality. I am continuously learning and staying updated with the latest industry trends and best practices to ensure my skills remain sharp and relevant. I thrive on collaboration and enjoy working closely with clients to bring their visions to life, ensuring each project is both functional and visually appealing. Outside of coding, I enjoy exploring new technologies and contributing to open-source projects. I'm always open to new opportunities and collaborations, so if you have a project in mind or simply want to connect, feel free to reach out!`


// Projects details and images
export const works = [
  {
    id: "1",
    img: "/works/imageFormatConverter.png",
    title: "PixaMorph",
    description: "Transform your images with PixaMorph! Resize and convert to multiple Format. Enjoy top-quality, secure local processing for privacy. Best image editor for flexible, high-quality photo editing.",
    techStack: ["React", "Redux", "Tailwind CSS"],
    link: "https://github.com/yogi0808/PixaMorph.git",
    live: "https://pixamorph.vercel.app/"
  },
  {
    id: "2",
    img: "/works/Full-Stack.png",
    title: "Full-Stack E-Commerce Website",
    description: "This is a full-stack e-commerce application built using the MERN stack (React, Node.js, Express, MongoDB) with additional technologies like JWT for authentication, bcryptjs for hashing passwords, Redux for State Management, and Firebase for storage.",
    techStack: [
      "React", "Node js", "Express js", "MongoDB", "Redux", "Tailwind CSS", "Firebase"
    ],
    link: "https://github.com/yogi0808/e-commerce-website.git"
  },
  {
    id: "3",
    img: "/works/ChatApp.webp",
    title: "Real-time Chat App",
    description: "Built a full-fledged chat app using React and Firebase. Users can add friends, search for contacts, and experience real-time communication with chat history. This project highlights my proficiency in building interactive web apps, integrating user authentication, and managing real-time data flow.",
    techStack: [
      "React", "Tailwind CSS", "Firebase"
    ],
    link: "https://github.com/yogi0808/Web-Chat-App.git"
  },
  {
    id: "4",
    img: "/works/BlogWebsite.webp",
    title: "Blog Website",
    description: "Developed a full-stack blog application using the MERN stack (React, Node.js, Express, MongoDB) with JWT authentication.  This interactive platform allows users to create, edit, and delete blog posts. Administrators can manage user accounts through a dedicated dashboard.",
    techStack: [
      "React", "Node.js", "Express", "MongoDB", "Redux"
    ],
    link: "https://github.com/yogi0808/MERN-Blog-Website.git"
  }, {
    id: "5",
    img: "/works/workHoverTracker.webp",
    title: "Work Hours Tracker",
    description: "Developed a website to track daily work hours, including start and end times, with records saved in local storage. Utilizing React and TailwindCSS, the site provides a streamlined interface for efficient time tracking and record keeping.",
    techStack: [
      "React", "Tailwind CSS"
    ],
    link: "https://yogi0808.github.io/Work_Hours_Tracker",
    live: "https://yogi0808.github.io/Work_Hours_Tracker/"
  }
]

// Skills SVG's list
export const Skills = [
  { id: "1", el: <HtmlSvg /> },
  { id: "2", el: <CssSvg /> },
  { id: "3", el: <JavaScriptSvg /> },
  { id: "4", el: <ReactSvg /> },
  { id: "5", el: <NodeSvg /> },
  { id: "6", el: <ExpressSvg /> },
  { id: "7", el: <MongoDB /> },
  { id: "8", el: <NextJs /> },
  { id: "9", el: <GitSvg /> },
  { id: "10", el: <TailwindSvg /> }
]

// Social Links with Links and custom ClassName's
export const socialLinks = [
  {
    id: "0",
    title: "Github",
    icon: "/svg/github.svg",
    classis: "top-3 left-1/2 -translate-x-1/2",
    link: "https://github.com/yogi0808"
  },
  {
    id: "1",
    title: "LinkedIn",
    icon: "/svg/linkedin.svg",
    classis: "top-1/2 right-3 -translate-y-1/2",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
  },
  {
    id: "2",
    title: "X",
    icon: "/svg/x.svg",
    classis: "bottom-3 left-1/2 -translate-x-1/2",
    link: "https://x.com/yogi_ahir08"
  },
  {
    id: "3",
    title: "Instagram",
    icon: "/svg/instagram.svg",
    classis: "top-1/2 left-3 -translate-y-1/2",
    link: "https://www.instagram.com/yogi_ahir_08"
  }
];