"use client"

import Link from "next/link"

export default function BacklinkPage() {
  const backlinks = [
    { url: "http://bolagila.uk.com", text: "Bola Gila" },
    { url: "http://bolagila.uk.com", text: "Situs Betting Togel" },
    { url: "http://bolagila.uk.com", text: "Panduan Bola Online" },
    { url: "http://bolagila.uk.com", text: "Agen Bola Terpercaya" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-center font-playfair text-4xl font-bold text-foreground">
        Partner & Backlink Resources
      </h1>

      <p className="mb-10 text-center text-muted-foreground max-w-2xl mx-auto">
        Halaman ini menampilkan tautan partner dan sumber referensi eksternal yang relevan dengan topik bahasa, budaya, dan hiburan.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {backlinks.map((link, index) => (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-sm text-muted-foreground">
        <p>
          Semua tautan di halaman ini bersifat publik dan berfungsi sebagai referensi tambahan.
        </p>
      </div>
    </div>
  )
}
