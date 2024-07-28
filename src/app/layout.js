import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogesh",
  description: "Discover the creative portfolio of [Your Name], featuring dynamic web designs and animations using React, GSAP, Locomotive Scroll, Spline, and Framer Motion. Explore a showcase of innovative projects and compelling visual experiences.",
  url: "https://portfolio-v2-ten-tan.vercel.app/",
  image: "/header.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Meta Data Description's  */}
      <meta name="description" content={metadata.description} />
      <meta property="og:description" content={metadata.description} />
      <meta name="twitter:description" content={metadata.description} />

      {/* Meta Data URL's  */}
      <meta property="og:url" content={metadata.url} />
      <meta property="twitter:url" content={metadata.url} />

      {/* Meta Data Images */}
      <meta property="og:image" content={metadata.image} />
      <meta name="twitter:image" content={metadata.image} />

      {/* Meta Data Title's */}
      <meta property="og:title" content={metadata.title} />
      <meta name="twitter:title" content={metadata.title} />

      {/* Meta Data Domain */}
      <meta property="twitter:domain" content="portfolio-v2-ten-tan.vercel.app" />

      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </html>
  );
}
