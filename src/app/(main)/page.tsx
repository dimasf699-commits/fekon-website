import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, Globe, Search, PlayCircle, Users, Award, Calendar, BellRing } from 'lucide-react'
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

  // Fetch latest 3 published posts (Berita)
  const { data: latestPosts } = await supabase
    .from('posts')
    .select(`
      id, title, slug, summary, created_at,
      category:category_id(name)
    `)
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(3);

  // Fetch latest 4 published announcements (Pengumuman)
  const { data: latestAnnouncements } = await supabase
    .from('announcements')
    .select('id, title, slug, created_at, is_important')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section (Video Banner) */}
      <section className="relative w-full h-[500px] sm:h-[650px] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Video (fallback image handled via poster or mix-blend) */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="object-cover w-full h-full"
            poster="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://i.imgur.com/qiZRt9V.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 flex flex-col items-center text-center -mt-10 sm:-mt-20">
          <Link 
            href="https://pmb.uniga.ac.id" 
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full px-8 py-3.5 sm:px-10 sm:py-4 transition-all duration-300 shadow-xl"
          >
            <Users className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="font-semibold text-base sm:text-lg tracking-wide">Penerimaan Mahasiswa Baru</span>
          </Link>

          {/* Logos/Badges row */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-10 sm:mt-12">
            <div className="bg-yellow-500 h-16 w-16 sm:h-20 sm:w-20 rounded-full flex flex-col items-center justify-center font-bold text-slate-900 text-[10px] sm:text-xs text-center border-4 border-white shadow-xl">
              <span>AKREDITASI</span>
              <span className="text-sm sm:text-base leading-none">UNGGUL</span>
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-blue-800 text-xs sm:text-sm shadow-xl flex items-center gap-2">
              <span className="text-xl">🏆</span> LAMEMBA
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-blue-800 text-xs sm:text-sm shadow-xl flex items-center gap-2">
              <span className="text-xl">🎖️</span> BAN-PT
            </div>
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] sm:h-[120px]"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.36,120.3,203.4,110.8,244.42,105,284.14,83,321.39,56.44Z" 
              className="fill-white"
            ></path>
          </svg>
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

      {/* Berita & Pengumuman */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Berita (Kiri) - 2 Kolom di Desktop */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Berita Terbaru</h2>
                  <p className="text-slate-600 text-sm">Kabar dan artikel dari kampus.</p>
                </div>
                <Link href="/berita" className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}>
                  Lihat Semua
                </Link>
              </div>

              {latestPosts && latestPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {latestPosts.map((item, idx) => (
                    <Link key={item.id} href={`/berita/${item.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200 flex flex-col h-full">
                      <div className="aspect-[16/10] bg-slate-200 overflow-hidden relative">
                        <img 
                          src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop&sig=${idx}`} 
                          alt="News Thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {/* @ts-ignore */}
                          {item.category?.name || 'Umum'}
                        </div>
                      </div>
                      <div className="p-5 flex-grow flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">
                          {item.summary || 'Klik untuk membaca selengkapnya...'}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
                  <p className="text-slate-500">Belum ada berita yang dipublikasikan.</p>
                </div>
              )}
            </div>

            {/* Pengumuman (Kanan) - 1 Kolom di Desktop */}
            <div className="lg:col-span-1">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Pengumuman</h2>
                  <p className="text-slate-600 text-sm">Informasi akademik & kampus.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {latestAnnouncements && latestAnnouncements.length > 0 ? (
                  <div className="divide-y divide-slate-100">
                    {latestAnnouncements.map((item) => (
                      <Link 
                        key={item.id} 
                        href={`/pengumuman/${item.slug}`} 
                        className="flex flex-col p-5 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          {item.is_important && (
                            <span className="ml-auto flex items-center gap-1 text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded">
                              <BellRing className="h-3 w-3" /> Penting
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-slate-500 text-sm">Tidak ada pengumuman terbaru saat ini.</p>
                  </div>
                )}
                
                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <Link href="/pengumuman" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1">
                    Lihat Semua Pengumuman <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

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
