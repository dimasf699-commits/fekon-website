import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Kontak Kami | Fakultas Ekonomi Universitas Garut',
  description: 'Hubungi Fakultas Ekonomi Universitas Garut untuk informasi lebih lanjut mengenai program studi dan pendaftaran.',
}

export default function KontakPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Punya pertanyaan seputar akademik, pendaftaran, atau kerjasama? Silakan hubungi kami melalui form di bawah atau kunjungi kampus kami.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Alamat Kampus</h3>
                      <p className="text-slate-600 mt-1">Jl. Jati No. 42B Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Telepon & WhatsApp</h3>
                      <p className="text-slate-600 mt-1">(0262) 232773</p>
                      <p className="text-slate-600">+62 800 0000 0000 (WA Akademik)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <p className="text-slate-600 mt-1">info@fekon.uniga.ac.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Jam Operasional</h3>
                      <p className="text-slate-600 mt-1">Senin - Jumat: 08:00 - 16:00 WIB</p>
                      <p className="text-slate-600">Sabtu - Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="w-full h-[300px] bg-slate-200 rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.682672580791!2d107.88172915000002!3d-7.192736199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1a8d0b2cfbf%3A0xc6e4c7bc7f2e1c95!2sUniversitas%20Garut!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border h-fit">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="nama@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Perihal pesan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <textarea 
                    id="message" 
                    className="flex min-h-[120px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tuliskan pesan Anda secara rinci..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan Sekarang
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
