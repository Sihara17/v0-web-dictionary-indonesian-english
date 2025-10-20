import fs from "fs"
import path from "path"

export async function GET(req) {
  try {
    const folderPath = path.join(process.cwd(), "data", "backlinks")
    const files = fs.readdirSync(folderPath)

    const results = files.map((file) => {
      const content = fs.readFileSync(path.join(folderPath, file), "utf-8")
      const data = JSON.parse(content)

      return {
        platform: data.platform,
        anchor: data.anchor,
        target: data.target,
        // opsional untuk tracking
        link: `https://example.com/?src=backlink&slug=${encodeURIComponent(file.replace(".json", ""))}`,
      }
    })

    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
