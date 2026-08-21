import Link from 'next/link'
import { ExternalLink, GraduationCap, Globe, BookOpen, Info, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Link Resmi | Fakultas Ekonomi Universitas Garut',
  description: 'Pusat tautan resmi layanan dan informasi Fakultas Ekonomi Universitas Garut (FEKON UNIGA).',
}

export default function LinkPage() {
  const links = [
    { title: 'Pendaftaran Mahasiswa Baru', url: 'https://pmb.uniga.ac.id', icon: GraduationCap, highlight: true },
    { title: 'Sistem Informasi Akademik (SIAKAD)', url: 'https://siakad.uniga.ac.id', icon: Globe },
    { title: 'EdLink (E-Learning)', url: 'https://edlink.id', icon: BookOpen },
    { title: 'Jurnal Ilmiah FEKON', url: 'https://ojs.fekon.uniga.ac.id', icon: BookOpen },
    { title: 'Tutorial & Panduan Akademik', url: 'https://tutorial.fekon.uniga.ac.id', icon: Info },
    { title: 'WhatsApp Layanan Akademik', url: 'https://wa.me/62800000000', icon: MessageCircle },
    { title: 'Website Utama UNIGA', url: 'https://uniga.ac.id', icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12 flex flex-col items-center">
      <div className="w-full max-w-xl px-4 space-y-8">
        
        {/* Header Profile */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-24 w-24 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-white">
            UNIGA
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Fakultas Ekonomi</h1>
            <p className="text-slate-600">Universitas Garut</p>
          </div>
          <p className="text-sm text-slate-500 max-w-sm">
            Mencetak pemimpin masa depan di bidang ekonomi, manajemen, dan akuntansi.
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                link.highlight 
                  ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md'
              }`}
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <link.icon className={`h-6 w-6 ${link.highlight ? 'text-blue-100' : 'text-blue-600'}`} />
              </div>
              <div className="flex-grow text-center font-semibold pr-10">
                {link.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 text-center text-sm text-slate-400">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Kembali ke Website Utama
          </Link>
        </div>
      </div>
    </div>
  )
}
