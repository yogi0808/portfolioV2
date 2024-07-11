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
      <meta property="og:image" content="/header.png"></meta>
      <meta property="twitter:image" content="/header.png"></meta>
      <meta property="og:site_name" content="Yogesh Portfolio Website"></meta>
      <meta property="og:description" content={metadata.description} />
      <meta property="twitter:description" content={metadata.description}></meta>
      <meta property="og:title" content={metadata.title}></meta>
      <meta property="twitter:title" content={metadata.title}></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
