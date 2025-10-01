import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kamus Indonesia-Inggris | KBBI & English Dictionary",
  description:
    "Kamus Besar Bahasa Indonesia (KBBI) dan Kamus Bahasa Inggris online. Cari definisi, sinonim, dan antonim kata dengan mudah.",
  keywords: "kamus, KBBI, kamus bahasa indonesia, english dictionary, tesaurus, sinonim, antonim",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
