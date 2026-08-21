import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Globe, Search, PlayCircle, Users, Award, Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] bg-slate-900 flex items-center overflow-hidden">
        {/* Placeholder image background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Membangun Pemimpin Masa Depan di Bidang Ekonomi dan Bisnis
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
              Fakultas Ekonomi Universitas Garut berkomitmen menghasilkan lulusan yang unggul, inovatif, dan berdaya saing global melalui pendidikan berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/program-studi" className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8")}>
                Jelajahi Program Studi
              </Link>
              <Link href="https://pmb.uniga.ac.id" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-slate-900 bg-white/90 hover:bg-white rounded-full px-8")}>
                Pendaftaran Mahasiswa Baru
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { title: 'SIAKAD', icon: Globe, href: 'https://siakad.uniga.ac.id' },
              { title: 'PMB', icon: GraduationCap, href: 'https://pmb.uniga.ac.id' },
              { title: 'EdLink', icon: PlayCircle, href: 'https://edlink.id' },
              { title: 'Jurnal', icon: BookOpen, href: 'https://ojs.fekon.uniga.ac.id' },
              { title: 'Dokumen', icon: Search, href: '/dokumen' },
              { title: 'Link Layanan', icon: ArrowRight, href: '/link' },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-blue-50 transition-colors gap-3"
              >
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Singkat */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                Tentang Fakultas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Pusat Keunggulan Ilmu Ekonomi di Jawa Barat
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Fakultas Ekonomi Universitas Garut (FEKON UNIGA) telah berdiri dan berkontribusi dalam mencerdaskan bangsa melalui pendidikan tinggi di bidang ekonomi, manajemen, dan akuntansi. Kami didukung oleh staf pengajar profesional dan fasilitas modern.
              </p>
              <ul className="space-y-3">
                {[
                  'Kurikulum adaptif sesuai kebutuhan industri',
                  'Fasilitas laboratorium lengkap dan modern',
                  'Jejaring alumni yang luas dan solid',
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/profil" className={buttonVariants({ variant: "outline" })}>
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" alt="Campus" className="rounded-2xl shadow-lg" />
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600&auto=format&fit=crop" alt="Students" className="rounded-2xl shadow-lg" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" alt="Graduation" className="rounded-2xl shadow-lg" />
                <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center shadow-lg h-[200px]">
                  <h3 className="text-4xl font-bold mb-2">25+</h3>
                  <p className="text-sm opacity-90">Tahun Pengalaman Mencetak Lulusan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Studi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Program Studi Kami</h2>
            <p className="text-slate-600">
              Pilih program studi yang sesuai dengan minat dan cita-cita karier masa depan Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'S1 Akuntansi', desc: 'Mencetak akuntan profesional yang andal dan berintegritas tinggi.', link: '/program-studi/akuntansi' },
              { name: 'S1 Manajemen', desc: 'Membentuk manajer dan wirausahawan tangguh yang mampu bersaing global.', link: '/program-studi/manajemen' },
              { name: 'S1 Pariwisata', desc: 'Mengembangkan ahli pariwisata yang inovatif dengan standar internasional.', link: '/program-studi/pariwisata' },
              { name: 'S1 Bisnis Digital', desc: 'Menyiapkan talenta digital untuk memimpin transformasi bisnis masa depan.', link: '/program-studi/bisnis-digital' },
            ].map((prodi, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow group flex flex-col h-full">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{prodi.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600 text-sm">{prodi.desc}</p>
                </CardContent>
                <CardFooter>
                  <Link href={prodi.link} className={cn(buttonVariants({ variant: "ghost" }), "w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 justify-between")}>
                      Lihat Detail <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Mahasiswa Aktif', value: '2,500+', icon: Users },
              { label: 'Dosen Pengajar', value: '80+', icon: GraduationCap },
              { label: 'Program Studi', value: '4', icon: BookOpen },
              { label: 'Alumni Sukses', value: '10,000+', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-3">
                <stat.icon className="h-8 w-8 text-blue-300" />
                <h3 className="text-3xl md:text-4xl font-bold">{stat.value}</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Berita & Informasi</h2>
              <p className="text-slate-600">Kabar terbaru dari Fakultas Ekonomi UNIGA.</p>
            </div>
            <Link href="/berita" className={cn(buttonVariants({ variant: "outline" }), "hidden sm:inline-flex")}>
              Lihat Semua Berita
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder News Cards */}
            {[1, 2, 3].map((item) => (
              <Link key={item} href={`/berita/sample-berita-${item}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border">
                <div className="aspect-video bg-slate-200 overflow-hidden relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop&sig=${item}`} 
                    alt="News Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Kampus
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    Kegiatan Seminar Nasional Ekonomi Digital dan Kewirausahaan 2026
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    Fakultas Ekonomi UNIGA kembali menyelenggarakan seminar nasional yang membahas tentang transformasi digital dalam dunia bisnis masa kini...
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/berita" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* CTA PMB */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.3,69.2,-55.5,77.3,-41.2C85.4,-26.9,91.3,-12.1,89.5,2.1C87.7,16.3,78.2,29.9,68.4,41.7C58.6,53.5,48.5,63.5,36,70.5C23.5,77.5,8.6,81.5,-6.3,82.9C-21.2,84.3,-36.1,83.1,-48.6,76.3C-61.1,69.5,-71.2,57.1,-78.9,43.2C-86.6,29.3,-91.9,13.9,-91.6,-1.4C-91.3,-16.7,-85.4,-31.9,-75.7,-43.8C-66,-55.7,-52.5,-64.3,-39.3,-71.4C-26.1,-78.5,-13,-84.1,1.5,-86.3C16,-88.5,32.5,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Menjadi Bagian dari Kami?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Bergabunglah dengan Fakultas Ekonomi Universitas Garut dan jadilah pemimpin masa depan yang kompeten dan inovatif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://pmb.uniga.ac.id" target="_blank" className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-700 hover:bg-slate-100 rounded-full px-8 font-bold text-base")}>
                Daftar Sekarang
            </Link>
            <Link href="/kontak" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-white border-white hover:bg-white/10 rounded-full px-8 font-bold text-base")}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
