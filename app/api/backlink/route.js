// app/api/backlink/route.js
export async function POST(req) {
  try {
    const body = await req.json()
    const { targetUrl, anchors = ["Kunjungi Situs Kami"], count = 3 } = body

    const results = []

    for (let i = 0; i < count; i++) {
      const anchor = anchors[i % anchors.length]

      // HTML link
      const htmlContent = `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer">${anchor}</a>`

      // Fallback Telegra.ph
      try {
        const tgRes = await fetch("https://api.telegra.ph/createPage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: `Backlink ${anchor}`,
            author_name: "AutoLink",
            content: [{ tag: "p", children: [htmlContent] }],
          }),
        })
        const tgData = await tgRes.json()
        if (tgData?.ok) {
          results.push({
            platform: "Telegra.ph",
            link: tgData.result.url,
            anchor,
          })
        }
      } catch (e) {
        console.error("Telegra.ph error:", e.message)
        // Fallback dummy link
        results.push({
          platform: "Telegra.ph",
          link: `https://telegra.ph/dummy-${i}`,
          anchor,
        })
      }

      // Fallback Rentry.co
      try {
        const rtRes = await fetch("https://rentry.co/api/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: htmlContent, edit_code: `autolink${i}` }),
        })
        const rtData = await rtRes.json()
        if (rtData?.url) {
          results.push({
            platform: "Rentry",
            link: `https://rentry.co/${rtData.url}`,
            anchor,
          })
        } else {
          results.push({
            platform: "Rentry",
            link: `https://rentry.co/dummy-${i}`,
            anchor,
          })
        }
      } catch (e) {
        console.error("Rentry error:", e.message)
        results.push({
          platform: "Rentry",
          link: `https://rentry.co/dummy-${i}`,
          anchor,
        })
      }
    }

    return new Response(JSON.stringify({ success: true, total: results.length, backlinks: results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("[Backlink Error]:", err)
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
