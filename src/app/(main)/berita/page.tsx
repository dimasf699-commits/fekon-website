import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Berita | Fakultas Ekonomi Universitas Garut',
  description: 'Kumpulan berita, informasi, dan artikel terbaru dari Fakultas Ekonomi Universitas Garut.',
}

// Dummy data
const articles = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title: `Kegiatan Seminar Nasional Ekonomi Digital Seri ${i + 1}`,
  slug: `kegiatan-seminar-nasional-${i + 1}`,
  summary: 'Fakultas Ekonomi UNIGA kembali menyelenggarakan seminar nasional yang membahas tentang transformasi digital dalam dunia bisnis...',
  category: 'Kampus',
  author: 'Humas FEKON',
  date: '2026-08-21',
  image: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop&sig=${i}`,
}))

export default function BeritaPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Berita & Informasi</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan berita terbaru, pengumuman, dan liputan kegiatan dari lingkungan Fakultas Ekonomi Universitas Garut.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.id} 
                href={`/berita/${article.slug}`} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border h-full"
              >
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                    {article.summary}
                  </p>
                  <div className="text-blue-600 font-semibold text-sm group-hover:underline mt-auto">
                    Baca Selengkapnya &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">Muat Lebih Banyak</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
