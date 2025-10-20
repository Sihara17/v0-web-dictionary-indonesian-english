"use client"

import { useEffect, useState } from "react"

export default function BacklinkPage() {
  const [backlinks, setBacklinks] = useState([])

  useEffect(() => {
    fetch("/api/backlink")
      .then(res => res.json())
      .then(data => setBacklinks(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Hasil Backlink</h1>
      <ul className="space-y-2">
        {backlinks.map((item, i) => (
          <li key={i}>
            <span className="font-medium">{item.platform}:</span>{" "}
            <a
              href={item.target || item.link} // klik langsung ke target asli
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.anchor}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
