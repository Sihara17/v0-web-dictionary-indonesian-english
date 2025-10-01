"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [dictionary, setDictionary] = useState("kbbi")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/${dictionary}?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-1 gap-2">
        <Select value={dictionary} onValueChange={setDictionary}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kbbi">KBBI</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="tesaurus">Tesaurus</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Cari kata..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
      </div>
      <Button type="submit" className="gap-2">
        <Search className="h-4 w-4" />
        Cari
      </Button>
    </form>
  )
}
