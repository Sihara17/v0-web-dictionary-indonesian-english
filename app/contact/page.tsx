"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, you would send this to an API endpoint
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-playfair text-4xl font-bold text-foreground">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card className="mb-6 border-border bg-card">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-card-foreground">Email Kami</CardTitle>
                <CardDescription>Kirim email kepada kami untuk pertanyaan atau saran</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">support@kamusdigital.com</p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-card-foreground">Feedback</CardTitle>
                <CardDescription>Kami menghargai masukan Anda untuk meningkatkan layanan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gunakan formulir di samping untuk mengirim pesan kepada kami</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Kirim Pesan</CardTitle>
              <CardDescription>Isi formulir di bawah ini dan kami akan segera merespons</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <Send className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-medium text-foreground">Pesan Terkirim!</p>
                  <p className="mt-2 text-sm text-muted-foreground">Terima kasih telah menghubungi kami</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subjek pesan"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
