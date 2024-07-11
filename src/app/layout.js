import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yogesh",
  description: "Web Developer Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content="https://portfolio-v2-po2oj0lui-yogeshs-projects-05081680.vercel.app/header.png" />
      <meta property="twitter:image" content="https://portfolio-v2-po2oj0lui-yogeshs-projects-05081680.vercel.app/header.png" />

      <meta property="og:site_name" content="Yogesh Portfolio Website" />

      <meta property="og:description" content={metadata.description} />
      <meta property="twitter:description" content={metadata.description} />

      <meta property="og:title" content={metadata.title} />
      <meta property="twitter:title" content={metadata.title} />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
