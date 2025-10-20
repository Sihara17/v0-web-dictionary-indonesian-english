import axios from "axios"

export async function POST(req) {
  try {
    const body = await req.json()
    const { targetUrl, anchors = ["Kunjungi Situs"], count = 3 } = body

    const results = []

    for (let i = 0; i < count; i++) {
      const anchor = anchors[i % anchors.length]
      const htmlContent = `<a href="${targetUrl}" target="_blank" rel="noopener noreferrer">${anchor}</a>`

      // 🔹 Pastebin
      try {
        const pb = await axios.post(
          "https://pastebin.com/api/api_post.php",
          new URLSearchParams({
            api_dev_key: "oRANDOMAPIKEY123", // ganti kalau punya key kamu sendiri
            api_option: "paste",
            api_paste_code: htmlContent,
            api_paste_private: 1,
            api_paste_expire_date: "N",
          }),
        )
        results.push({ platform: "Pastebin", link: pb.data })
      } catch (e) {
        console.error("Pastebin Error:", e.message)
      }

      // 🔹 Telegra.ph
      try {
        const tg = await axios.post("https://api.telegra.ph/createPage", {
          title: `Backlink ${anchor}`,
          author_name: "AutoLink",
          content: [{ tag: "p", children: [htmlContent] }],
        })
        results.push({ platform: "Telegra.ph", link: tg.data.result.url })
      } catch (e) {
        console.error("Telegraph Error:", e.message)
      }

      // 🔹 Rentry
      try {
        const rt = await axios.post("https://rentry.co/api/new", {
          text: htmlContent,
          edit_code: "autolink",
        })
        results.push({ platform: "Rentry", link: `https://rentry.co/${rt.data.url}` })
      } catch (e) {
        console.error("Rentry Error:", e.message)
      }
    }

    return Response.json({ success: true, backlinks: results })
  } catch (err) {
    console.error(err)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
