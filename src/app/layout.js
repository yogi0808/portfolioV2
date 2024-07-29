import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

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
      <meta property="og:site_name" content="Yogesh Portfolio" />
      <meta name="twitter:card" content="summary_large_image" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
