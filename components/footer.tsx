import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-playfair text-lg font-bold text-foreground">Kamus Digital</h3>
            <p className="text-sm text-muted-foreground">
              Kamus Bahasa Indonesia dan Inggris online yang mudah digunakan untuk membantu Anda menemukan definisi,
              sinonim, dan antonim kata.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Kamus</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kbbi" className="text-muted-foreground transition-colors hover:text-primary">
                  KBBI
                </Link>
              </li>
              <li>
                <Link href="/english" className="text-muted-foreground transition-colors hover:text-primary">
                  English Dictionary
                </Link>
              </li>
              <li>
                <Link href="/tesaurus" className="text-muted-foreground transition-colors hover:text-primary">
                  Tesaurus Indonesia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kamus Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
