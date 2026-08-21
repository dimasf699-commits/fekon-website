import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Globe, Search, PlayCircle, Users, Award, Calendar } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/server'

export const revalidate = 0; // Prevent aggressive caching for now so user can see immediate changes

export default async function Home() {
  const supabase = await createClient();

  // Fetch active study programs
  const { data: studyPrograms } = await supabase
    .from('study_programs')
    .select('name, description, slug')
    .eq('is_active', true)
    .order('name');

  // Fetch latest 3 published posts
  const { data: latestPosts } = await supabase
    .from('posts')
    .select(`
      id, title, slug, summary, created_at,
      category:category_id(name)
    `)
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] sm:h-[600px] py-20 sm:py-0 bg-slate-900 flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
              Membangun Pemimpin Masa Depan di Bidang Ekonomi dan Bisnis
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl">
              Fakultas Ekonomi Universitas Garut berkomitmen menghasilkan lulusan yang unggul, inovatif, dan berdaya saing global melalui pendidikan berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/program-studi" className={cn(buttonVariants({ size: "lg" }), "bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 w-full sm:w-auto text-center justify-center")}>
                Jelajahi Program Studi
              </Link>
              <Link href="https://pmb.uniga.ac.id" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-slate-900 bg-white/90 hover:bg-white rounded-full px-8 w-full sm:w-auto text-center justify-center")}>
                Pendaftaran Mahasiswa Baru
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
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
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl hover:bg-blue-50 transition-colors gap-2 sm:gap-3 border sm:border-none border-slate-100"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-blue-700">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Profil Singkat */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                Tentang Fakultas
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Pusat Keunggulan Ilmu Ekonomi di Jawa Barat
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Fakultas Ekonomi Universitas Garut (FEKON UNIGA) telah berdiri dan berkontribusi dalam mencerdaskan bangsa melalui pendidikan tinggi di bidang ekonomi, manajemen, dan akuntansi. Kami didukung oleh staf pengajar profesional dan fasilitas modern.
              </p>
              <ul className="space-y-3">
                {[
                  'Kurikulum adaptif sesuai kebutuhan industri',
                  'Fasilitas laboratorium lengkap dan modern',
                  'Jejaring alumni yang luas dan solid',
                ].map((point, i) => (
                  <li key={i} className="flex items-start sm:items-center gap-3 text-slate-700 text-sm sm:text-base">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/profil" className={cn(buttonVariants({ variant: "outline" }), "w-full sm:w-auto justify-center")}>
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col sm:grid sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
              <div className="space-y-4 sm:pt-8 flex-1">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" alt="Campus" className="rounded-2xl shadow-lg w-full object-cover h-48 sm:h-auto" />
                <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=600&auto=format&fit=crop" alt="Students" className="rounded-2xl shadow-lg w-full hidden sm:block" />
              </div>
              <div className="space-y-4 flex-1">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop" alt="Graduation" className="rounded-2xl shadow-lg w-full hidden sm:block" />
                <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center shadow-lg h-[150px] sm:h-[200px] w-full">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2">25+</h3>
                  <p className="text-xs sm:text-sm opacity-90">Tahun Pengalaman Mencetak Lulusan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Studi */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Program Studi Kami</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Pilih program studi yang sesuai dengan minat dan cita-cita karier masa depan Anda.
            </p>
          </div>
          
          {studyPrograms && studyPrograms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {studyPrograms.map((prodi, idx) => (
                <Card key={idx} className="hover:shadow-xl transition-shadow group flex flex-col h-full border-slate-200">
                  <CardHeader className="p-5 sm:p-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-3 sm:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{prodi.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-5 pt-0 sm:p-6 sm:pt-0">
                    <p className="text-slate-600 text-sm line-clamp-3">
                      {prodi.description || 'Deskripsi program studi belum tersedia.'}
                    </p>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 sm:p-6 sm:pt-0">
                    <Link href={`/program-studi/${prodi.slug}`} className={cn(buttonVariants({ variant: "ghost" }), "w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 justify-between h-12")}>
                        Lihat Detail <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-500">Belum ada program studi yang dipublikasikan.</p>
            </div>
          )}
        </div>
      </section>

      {/* Statistik */}
      <section className="py-12 sm:py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { label: 'Mahasiswa Aktif', value: '2,500+', icon: Users },
              { label: 'Dosen Pengajar', value: '80+', icon: GraduationCap },
              { label: 'Program Studi', value: studyPrograms?.length || '0', icon: BookOpen },
              { label: 'Alumni Sukses', value: '10,000+', icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</h3>
                <p className="text-blue-200 text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Berita & Informasi</h2>
              <p className="text-slate-600 text-sm sm:text-base">Kabar terbaru dari Fakultas Ekonomi UNIGA.</p>
            </div>
            <Link href="/berita" className={cn(buttonVariants({ variant: "outline" }), "hidden sm:inline-flex")}>
              Lihat Semua Berita
            </Link>
          </div>

          {latestPosts && latestPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {latestPosts.map((item, idx) => (
                <Link key={item.id} href={`/berita/${item.slug}`} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-200 flex flex-col h-full">
                  <div className="aspect-video bg-slate-200 overflow-hidden relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop&sig=${idx}`} 
                      alt="News Thumbnail"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {/* @ts-ignore */}
                      {item.category?.name || 'Umum'}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm line-clamp-3">
                      {item.summary || 'Klik untuk membaca selengkapnya...'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-500">Belum ada berita yang dipublikasikan.</p>
            </div>
          )}
          
          <div className="mt-8 sm:hidden">
            <Link href="/berita" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}>
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>

      {/* CTA PMB */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M45.7,-76.4C58.9,-69.3,69.2,-55.5,77.3,-41.2C85.4,-26.9,91.3,-12.1,89.5,2.1C87.7,16.3,78.2,29.9,68.4,41.7C58.6,53.5,48.5,63.5,36,70.5C23.5,77.5,8.6,81.5,-6.3,82.9C-21.2,84.3,-36.1,83.1,-48.6,76.3C-61.1,69.5,-71.2,57.1,-78.9,43.2C-86.6,29.3,-91.9,13.9,-91.6,-1.4C-91.3,-16.7,-85.4,-31.9,-75.7,-43.8C-66,-55.7,-52.5,-64.3,-39.3,-71.4C-26.1,-78.5,-13,-84.1,1.5,-86.3C16,-88.5,32.5,-83.5,45.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Siap Menjadi Bagian dari Kami?
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-10">
            Bergabunglah dengan Fakultas Ekonomi Universitas Garut dan jadilah pemimpin masa depan yang kompeten dan inovatif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Link href="https://pmb.uniga.ac.id" target="_blank" className={cn(buttonVariants({ size: "lg" }), "bg-white text-blue-700 hover:bg-slate-100 rounded-full w-full sm:w-auto px-8 font-bold text-base h-12 sm:h-14")}>
                Daftar Sekarang
            </Link>
            <Link href="/kontak" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-white border-white hover:bg-white/10 rounded-full w-full sm:w-auto px-8 font-bold text-base h-12 sm:h-14")}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
