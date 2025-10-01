import { type NextRequest, NextResponse } from "next/server"

// Sample data structure - In production, you would load this from the GitHub repos
// or use a database
const sampleKBBIData: Record<string, any> = {
  rumah: {
    word: "rumah",
    partOfSpeech: "nomina",
    definitions: [
      "bangunan untuk tempat tinggal",
      "bangunan pada umumnya (seperti gedung dan sebagainya)",
      "tempat (badan dan sebagainya)",
    ],
  },
  belajar: {
    word: "belajar",
    partOfSpeech: "verba",
    definitions: [
      "berusaha memperoleh kepandaian atau ilmu",
      "berlatih",
      "berubah tingkah laku atau tanggapan yang disebabkan oleh pengalaman",
    ],
  },
}

const sampleTesaurusData: Record<string, any> = {
  unik: {
    word: "unik",
    tag: "a",
    synonyms: [
      "distingtif",
      "eksklusif",
      "idiosinkratis",
      "individual",
      "istimewa",
      "khas",
      "khusus",
      "partikular",
      "singularis",
      "solo",
      "spesial",
      "spesifik",
      "tersendiri",
      "tunggal",
    ],
    antonyms: ["biasa"],
  },
  cantik: {
    word: "cantik",
    tag: "a",
    synonyms: ["elok", "indah", "molek", "rupawan", "ayu", "jelita", "permai"],
    antonyms: ["buruk", "jelek"],
  },
}

const sampleEnglishData: Record<string, any> = {
  hello: {
    word: "hello",
    partOfSpeech: "interjection",
    definitions: ["used as a greeting or to begin a phone conversation", 'an utterance of "hello"; a greeting'],
  },
  beautiful: {
    word: "beautiful",
    partOfSpeech: "adjective",
    definitions: ["pleasing the senses or mind aesthetically", "of a very high standard; excellent"],
    synonyms: [
      "attractive",
      "pretty",
      "handsome",
      "good-looking",
      "nice-looking",
      "pleasing",
      "alluring",
      "gorgeous",
      "lovely",
      "stunning",
    ],
  },
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const word = searchParams.get("word")?.toLowerCase()
  const type = searchParams.get("type")

  if (!word || !type) {
    return NextResponse.json({ error: "Missing word or type parameter" }, { status: 400 })
  }

  let result = null

  switch (type) {
    case "kbbi":
      result = sampleKBBIData[word]
      break
    case "tesaurus":
      result = sampleTesaurusData[word]
      break
    case "english":
      result = sampleEnglishData[word]
      break
    default:
      return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 })
  }

  if (!result) {
    return NextResponse.json({ error: "Word not found" }, { status: 404 })
  }

  return NextResponse.json(result)
}
