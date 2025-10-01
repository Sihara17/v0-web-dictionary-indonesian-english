"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SearchBar } from "@/components/search-bar"
import { WordResult } from "@/components/word-result"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function TesaurusContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4 font-playfair text-4xl font-bold text-foreground">Tesaurus Bahasa Indonesia</h1>
        <SearchBar />
      </div>

      {query ? (
        <WordResult word={query} type="tesaurus" />
      ) : (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Selamat Datang di Tesaurus</CardTitle>
            <CardDescription>
              Gunakan kolom pencarian di atas untuk mencari sinonim dan antonim kata dalam Bahasa Indonesia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tesaurus Bahasa Indonesia membantu Anda menemukan kata-kata yang memiliki makna serupa (sinonim) atau
              berlawanan (antonim) untuk memperkaya kosakata Anda.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Ad Space */}
      <div className="mt-8 rounded-lg border border-border bg-muted p-6 text-center">
        <p className="text-sm text-muted-foreground">Advertisement</p>
        <div className="mt-4 flex min-h-[200px] items-center justify-center">
          <p className="text-muted-foreground">Google Ads Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default function TesaurusPage() {
  return (
    <Suspense fallback={<Skeleton className="h-96" />}>
      <TesaurusContent />
    </Suspense>
  )
}
