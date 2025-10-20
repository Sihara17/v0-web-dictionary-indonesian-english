// app/page.tsx
import Link from "next/link"
import { Book, BookOpen, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchBar } from "@/components/search-bar"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 font-playfair text-4xl font-bold text-balance text-foreground md:text-6xl">
          Kamus Digital Indonesia & Inggris
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-pretty text-muted-foreground">
          Temukan definisi, sinonim, dan antonim kata dalam Bahasa Indonesia dan Inggris dengan mudah dan cepat
        </p>

        {/* Search Bar */}
        <div className="mx-auto max-w-2xl">
          <SearchBar />
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="mb-8 text-center font-playfair text-3xl font-bold text-foreground">Fitur Kamus</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Book className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">KBBI</CardTitle>
              <CardDescription>Kamus Besar Bahasa Indonesia dengan ribuan entri kata</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/kbbi">
                <Button className="w-full">Buka KBBI</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Languages className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">English Dictionary</CardTitle>
              <CardDescription>Comprehensive English dictionary with definitions</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/english">
                <Button className="w-full">Open Dictionary</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-card-foreground">Tesaurus</CardTitle>
              <CardDescription>Cari sinonim dan antonim kata Bahasa Indonesia</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tesaurus">
                <Button className="w-full">Buka Tesaurus</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Ad Space */}
      <section className="mb-16">
        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-muted p-8 text-center">
          <p className="text-sm text-muted-foreground">Advertisement</p>
          <div className="mt-4 flex min-h-[250px] items-center justify-center">
            <p className="text-muted-foreground">Google Ads Placeholder</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center mb-16">
        <h2 className="mb-4 font-playfair text-3xl font-bold text-foreground">Tentang Kamus Digital</h2>
        <p className="mx-auto max-w-3xl text-pretty text-muted-foreground leading-relaxed">
          Kamus Digital adalah platform online yang menyediakan akses mudah ke Kamus Besar Bahasa Indonesia (KBBI),
          kamus Bahasa Inggris, dan tesaurus. Kami berkomitmen untuk membantu Anda meningkatkan pemahaman bahasa dengan
          menyediakan definisi yang akurat, sinonim, dan antonim untuk ribuan kata.
        </p>

        {/* 🔗 Tambahkan link Backlink di bawah ini */}
        <div className="mt-6">
          <Link href="/bolagila" className="text-blue-600 hover:underline font-medium">
            Lihat Partner & Backlink
          </Link>
        </div>
      </section>
    </div>
    <div className="mt-6">
  <Link
    href="/backlink" // sesuaikan dengan folder/route yang kamu buat
    className="text-blue-600 hover:underline font-medium"
  >
     Backlink
  </Link>
</div>
  )
}
