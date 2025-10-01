"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle } from "lucide-react"

interface WordResultProps {
  word: string
  type: "kbbi" | "english" | "tesaurus"
}

interface Definition {
  word: string
  definitions?: string[]
  partOfSpeech?: string
  synonyms?: string[]
  antonyms?: string[]
  tag?: string
}

export function WordResult({ word, type }: WordResultProps) {
  const [result, setResult] = useState<Definition | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDefinition = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/search?word=${encodeURIComponent(word)}&type=${type}`)

        if (!response.ok) {
          throw new Error("Kata tidak ditemukan")
        }

        const data = await response.json()
        setResult(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan")
      } finally {
        setLoading(false)
      }
    }

    fetchDefinition()
  }, [word, type])

  if (loading) {
    return (
      <Card className="border-border bg-card">
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </CardContent>
      </Card>
    )
  }

  if (error || !result) {
    return (
      <Card className="border-border bg-card">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <AlertCircle className="mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-lg font-medium text-foreground">{error || "Kata tidak ditemukan"}</p>
          <p className="mt-2 text-sm text-muted-foreground">Silakan coba kata lain atau periksa ejaan Anda</p>
        </CardContent>
      </Card>
    )
  }

  const getTagLabel = (tag: string) => {
    const tags: Record<string, string> = {
      a: "Adjektiva",
      adv: "Adverbia",
      ki: "Kiasan",
      n: "Nomina",
      num: "Numeralia",
      p: "Partikel",
      pron: "Pronomina",
      v: "Verba",
    }
    return tags[tag] || tag
  }

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <CardTitle className="font-playfair text-3xl text-card-foreground">{result.word}</CardTitle>
            {(result.partOfSpeech || result.tag) && (
              <Badge variant="secondary">{result.partOfSpeech || getTagLabel(result.tag!)}</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {result.definitions && result.definitions.length > 0 && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Definisi</h3>
              <ol className="list-decimal space-y-2 pl-5">
                {result.definitions.map((def, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    {def}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {result.synonyms && result.synonyms.length > 0 && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Sinonim</h3>
              <div className="flex flex-wrap gap-2">
                {result.synonyms.map((synonym, index) => (
                  <Badge key={index} variant="outline">
                    {synonym}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {result.antonyms && result.antonyms.length > 0 && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">Antonim</h3>
              <div className="flex flex-wrap gap-2">
                {result.antonyms.map((antonym, index) => (
                  <Badge key={index} variant="outline">
                    {antonym}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
