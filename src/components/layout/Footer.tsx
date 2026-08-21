import Link from 'next/link'
import { MapPin, Phone, Mail, Camera, Globe, Video } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About & Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-sm">
                UNIGA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-tight">FAKULTAS EKONOMI</span>
                <span className="text-sm text-slate-300 leading-tight">Universitas Garut</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              Mencetak lulusan unggul, profesional, dan berdaya saing global di bidang ekonomi dan bisnis.
            </p>
            <div className="space-y-2 mt-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400" />
                <span>Jl. Jati No. 42B Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>(0262) 232773</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <span>info@fekon.uniga.ac.id</span>
              </div>
            </div>
          </div>

          {/* Column 2: Program Studi */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Program Studi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/program-studi/akuntansi" className="hover:text-blue-400 transition-colors">
                  S1 Akuntansi
                </Link>
              </li>
              <li>
                <Link href="/program-studi/manajemen" className="hover:text-blue-400 transition-colors">
                  S1 Manajemen
                </Link>
              </li>
              <li>
                <Link href="/program-studi/pariwisata" className="hover:text-blue-400 transition-colors">
                  S1 Pariwisata
                </Link>
              </li>
              <li>
                <Link href="/program-studi/bisnis-digital" className="hover:text-blue-400 transition-colors">
                  S1 Bisnis Digital
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tautan Cepat */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/akademik/kalender" className="hover:text-blue-400 transition-colors">
                  Kalender Akademik
                </Link>
              </li>
              <li>
                <Link href="https://pmb.uniga.ac.id" className="hover:text-blue-400 transition-colors" target="_blank">
                  Pendaftaran Mahasiswa Baru
                </Link>
              </li>
              <li>
                <Link href="https://ojs.fekon.uniga.ac.id" className="hover:text-blue-400 transition-colors" target="_blank">
                  Jurnal Ilmiah
                </Link>
              </li>
              <li>
                <Link href="/dokumen" className="hover:text-blue-400 transition-colors">
                  Download Dokumen
                </Link>
              </li>
              <li>
                <Link href="/link" className="hover:text-blue-400 transition-colors">
                  Link Layanan Terpadu
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Media Sosial */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-lg">Ikuti Kami</h3>
            <p className="text-sm text-slate-400">
              Dapatkan informasi terbaru melalui media sosial resmi Fakultas Ekonomi UNIGA.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Camera className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Video className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 bg-blue-950/50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Fakultas Ekonomi Universitas Garut. Hak Cipta Dilindungi.</p>
          <div className="flex gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-white">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="/admin" className="hover:text-white">Login Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
