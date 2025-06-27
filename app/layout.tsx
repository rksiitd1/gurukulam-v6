import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_Devanagari } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
})

export const metadata: Metadata = {
  title: "Divya Bihar Mission",
  description:
    "From IIT to Village - Empowering Bihar through education with yogic values, sustainable farming, and cultural values. Join our mission to transform rural communities.",
  keywords:
    "Mukund Agarwal, Divya Bihar Mission, IIT Delhi, Bihar education, Gurukulam, rural development, education with yogic values",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansDevanagari.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
