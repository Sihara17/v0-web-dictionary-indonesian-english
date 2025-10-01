import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-playfair text-4xl font-bold text-foreground">Privacy Policy</h1>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">1. Informasi yang Kami Kumpulkan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti ketika Anda menggunakan
              layanan pencarian kamus kami. Informasi ini dapat mencakup kata-kata yang Anda cari dan preferensi bahasa
              Anda.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">2. Penggunaan Informasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Menyediakan, memelihara, dan meningkatkan layanan kami</li>
              <li>Memahami dan menganalisis bagaimana Anda menggunakan layanan kami</li>
              <li>Mengembangkan fitur, produk, dan layanan baru</li>
              <li>Berkomunikasi dengan Anda tentang pembaruan dan informasi lainnya</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">3. Cookies dan Teknologi Pelacakan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami menggunakan cookies dan teknologi pelacakan serupa untuk mengumpulkan dan melacak informasi tentang
              layanan kami dan meningkatkan serta menganalisis layanan kami.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">4. Iklan Pihak Ketiga</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami menggunakan Google AdSense untuk menampilkan iklan di situs web kami. Google dapat menggunakan
              cookies untuk menampilkan iklan berdasarkan kunjungan Anda ke situs ini dan situs web lainnya.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">5. Keamanan Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kami mengambil langkah-langkah yang wajar untuk membantu melindungi informasi pribadi Anda dari
              kehilangan, pencurian, penyalahgunaan, dan akses tidak sah.
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
