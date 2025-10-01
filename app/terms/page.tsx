import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-playfair text-4xl font-bold text-foreground">Terms of Use</h1>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">1. Penerimaan Ketentuan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Dengan mengakses dan menggunakan Kamus Digital, Anda menyetujui untuk terikat oleh Ketentuan Penggunaan
              ini. Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">2. Penggunaan Layanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan ketentuan ini.
              Anda tidak boleh:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Menggunakan layanan dengan cara yang melanggar hukum</li>
              <li>Mencoba mengganggu atau merusak layanan kami</li>
              <li>Menggunakan layanan untuk tujuan komersial tanpa izin</li>
              <li>Menyalin atau mendistribusikan konten tanpa izin</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">3. Hak Kekayaan Intelektual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Konten kamus yang tersedia di situs ini berasal dari sumber-sumber yang tersedia untuk umum, termasuk
              Kamus Besar Bahasa Indonesia (KBBI) dan Tesaurus Bahasa Indonesia. Kami menghormati hak cipta dan kekayaan
              intelektual pihak lain.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">4. Penafian</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Layanan kami disediakan "sebagaimana adanya" tanpa jaminan apa pun. Kami tidak menjamin bahwa layanan akan
              selalu tersedia, tidak terganggu, atau bebas dari kesalahan.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">5. Batasan Tanggung Jawab</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan atau ketidakmampuan
              menggunakan layanan kami.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">6. Perubahan Ketentuan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami berhak untuk mengubah ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diposting di
              situs web ini.
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Terakhir diperbarui: {new Date().toLocaleDateString("id-ID")}</p>
        </div>
      </div>
    </div>
  )
}
