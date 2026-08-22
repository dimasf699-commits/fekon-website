import Link from 'next/link'
import { MapPin, Phone, Mail, Camera, Globe, Video } from 'lucide-react'
import { footerLinks, contactInfo, PMB_URL } from '@/config/navigation'

export function Footer() {
  return (
    <footer className="bg-blue-950 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About & Contact */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-xs sm:text-sm shrink-0">
                UNIGA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-white leading-tight">FAKULTAS EKONOMI</span>
                <span className="text-xs sm:text-sm text-slate-300 leading-tight">Universitas Garut</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-4 max-w-xs leading-relaxed">
              Mencetak lulusan unggul, profesional, dan berdaya saing global di bidang ekonomi dan bisnis.
            </p>
            <div className="space-y-3 mt-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400 mt-0.5" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">{contactInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
              </div>
            </div>
          </div>

          {/* Column 2: Program Studi */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base sm:text-lg pb-2 border-b border-white/10">Program Studi</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tautan Cepat */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base sm:text-lg pb-2 border-b border-white/10">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-blue-400 transition-colors block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded-sm"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Media Sosial */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base sm:text-lg pb-2 border-b border-white/10">Ikuti Kami</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dapatkan informasi terbaru melalui media sosial resmi Fakultas Ekonomi UNIGA.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={contactInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                <Camera className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={contactInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={contactInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                <Video className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 bg-blue-950/50">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center md:text-left">
          <p>© {new Date().getFullYear()} Fakultas Ekonomi Universitas Garut. Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/kebijakan-privasi" className="hover:text-white p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm">Kebijakan Privasi</Link>
            <Link href="/syarat-ketentuan" className="hover:text-white p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm">Syarat & Ketentuan</Link>
            <Link href="/admin" className="hover:text-white p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm">Login Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
