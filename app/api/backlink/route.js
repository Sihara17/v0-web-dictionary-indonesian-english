export async function POST(req) {
  try {
    const body = await req.json()
    const { targetUrl, anchors = ["Kunjungi Situs Kami"], count = 10 } = body

    const results = []

    for (let i = 0; i < count; i++) {
      const anchor = anchors[i % anchors.length]
      const htmlContent = `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer">${anchor}</a>`

      // Pastebin (tanpa API key)
      try {
        const params = new URLSearchParams({
          api_dev_key: "oRANDOMAPIKEY123",
          api_option: "paste",
          api_paste_code: htmlContent,
          api_paste_private: "1",
          api_paste_expire_date: "N",
        })
        const pbRes = await fetch("https://pastebin.com/api/api_post.php", {
          method: "POST",
          body: params,
        })
        const pbUrl = await pbRes.text()
        results.push({
          platform: "Pastebin",
          link: pbUrl,
          anchor,
        })
      } catch (e) {
        console.error("Pastebin error:", e.message)
      }

      // Telegra.ph
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
        results.push({
          platform: "Telegra.ph",
          link: tgData?.result?.url,
          anchor,
        })
      } catch (e) {
        console.error("Telegraph error:", e.message)
      }

      // Rentry.co
      try {
        const rtRes = await fetch("https://rentry.co/api/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: htmlContent, edit_code: "autolink" }),
        })
        const rtData = await rtRes.json()
        results.push({
          platform: "Rentry",
          link: `https://rentry.co/${rtData?.url}`,
          anchor,
        })
      } catch (e) {
        console.error("Rentry error:", e.message)
      }
    }

    return Response.json({
      success: true,
      total: results.length,
      backlinks: results,
    })
  } catch (err) {
    console.error("[Backlink Error]:", err)
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    )
  }
}
