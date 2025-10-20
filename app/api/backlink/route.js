// app/api/backlink/route.js
export async function POST(req) {
  try {
    const body = await req.json()
    const { targetUrl = "https://example.com", anchors = ["Kunjungi Situs Kami"], count = 3 } = body

    const results = []

    // helper: buat slug sederhana
    const makeSlug = (text, i) =>
      `${(text || "link").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}-${Date.now().toString(36)}-${i}`

    for (let i = 0; i < count; i++) {
      const anchor = anchors[i % anchors.length] || anchors[0]
      const slug = makeSlug(anchor, i)

      // Simulated Telegra.ph link (points to example.com with query so it never 404)
      results.push({
        platform: "Telegra.ph (simulated)",
        link: `https://example.com/?src=telegra-ph&slug=${encodeURIComponent(slug)}&target=${encodeURIComponent(targetUrl)}`,
        anchor,
      })

      // Simulated Rentry link
      results.push({
        platform: "Rentry (simulated)",
        link: `https://example.com/?src=rentry&slug=${encodeURIComponent(slug)}&target=${encodeURIComponent(targetUrl)}`,
        anchor,
      })
    }

    return new Response(JSON.stringify({ success: true, total: results.length, backlinks: results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("[Backlink Error]:", err)
    return new Response(JSON.stringify({ success: false, error: err?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
