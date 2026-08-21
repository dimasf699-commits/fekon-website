import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink, Globe, BookOpen, FileText, MonitorPlay, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Service & Layanan Digital | Fakultas Ekonomi Universitas Garut',
  description: 'Pusat layanan digital dan portal akademik Fakultas Ekonomi Universitas Garut.',
}

export default function LayananPage() {
  const services = [
    {
      title: 'SIAKAD',
      desc: 'Sistem Informasi Akademik untuk mahasiswa dan dosen (KRS, KHS, Jadwal).',
      url: 'https://siakad.uniga.ac.id',
      icon: Globe,
    },
    {
      title: 'EdLink',
      desc: 'Platform e-learning resmi untuk perkuliahan daring dan tugas.',
      url: 'https://edlink.id',
      icon: MonitorPlay,
    },
    {
      title: 'PMB UNIGA',
      desc: 'Portal Penerimaan Mahasiswa Baru Universitas Garut.',
      url: 'https://pmb.uniga.ac.id',
      icon: GraduationCap,
    },
    {
      title: 'Jurnal OJS',
      desc: 'Kumpulan jurnal ilmiah dan publikasi penelitian Fakultas Ekonomi.',
      url: 'https://ojs.fekon.uniga.ac.id',
      icon: BookOpen,
    },
    {
      title: 'Tutorial Akademik',
      desc: 'Panduan penggunaan sistem akademik dan layanan digital.',
      url: 'https://tutorial.fekon.uniga.ac.id',
      icon: FileText,
    },
    {
      title: 'Perpustakaan Digital',
      desc: 'Akses ke koleksi e-book, repositori, dan jurnal eksternal berlangganan.',
      url: 'https://perpus.uniga.ac.id',
      icon: BookOpen,
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">E-Service & Layanan Digital</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Akses seluruh layanan sistem informasi, portal akademik, dan panduan digital Fakultas Ekonomi Universitas Garut di satu tempat.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <a 
                key={idx} 
                href={service.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mt-4 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
