"use client"

import Link from "next/link"
import { Book, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Book className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-playfair text-xl font-bold text-foreground">Kamus Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Beranda
          </Link>
          <Link href="/kbbi" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            KBBI
          </Link>
          <Link href="/english" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            English
          </Link>
          <Link href="/tesaurus" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Tesaurus
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/kbbi"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              KBBI
            </Link>
            <Link
              href="/english"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              English
            </Link>
            <Link
              href="/tesaurus"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tesaurus
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
