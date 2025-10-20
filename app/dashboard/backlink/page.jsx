"use client"

import { useState } from "react"
import Link from "next/link"

export default function BacklinkDashboard() {
  const [targetUrl, setTargetUrl] = useState("https://example.com")
  const [anchors, setAnchors] = useState("Contoh Anchor, Situs Terpercaya, Info Lengkap")
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!targetUrl) return alert("Masukkan Target URL dulu")
    setLoading(true)
    setResult([])

    try {
      const res = await fetch("/api/backlink", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetUrl,
          anchors: anchors.split(",").map((a) => a.trim()).filter(Boolean),
          count: 3, // jumlah iterasi (akan menghasilkan 2*count items karena 2 platform simulated)
        }),
      })

      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || "Request failed")
      }

      const data = await res.json()
      setResult(data.backlinks || [])
    } catch (err) {
      console.error("Generate error:", err)
      alert("Gagal generate backlink. Cek console untuk detail.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">🔗 Backlink Generator (Demo)</h1>

      <div className="mb-6 space-y-4">
        <div>
          <label className="font-semibold">Target URL:</label>
          <input
            type="text"
            placeholder="https://example.com"
            value={targetUrl}
            onChange={(e) => setTargetUrl(e.target.value)}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label className="font-semibold">Anchor Text (pisahkan dengan koma):</label>
          <input
            type="text"
            value={anchors}
            onChange={(e) => setAnchors(e.target.value)}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Backlinks"}
        </button>
      </div>

      {result.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-3 text-2xl font-semibold">Hasil Backlink:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {result.map((item, i) => (
              <li key={i}>
                <span className="font-medium">{item.platform}:</span>{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.link}
                </a>
                <div className="text-sm text-muted-foreground">Anchor: {item.anchor}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
