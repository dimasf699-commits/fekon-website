import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  return {
    title: `Detail Berita | Fakultas Ekonomi Universitas Garut`,
    description: `Baca selengkapnya mengenai ${resolvedParams.slug} di Fakultas Ekonomi Universitas Garut.`,
  }
}

export default async function BeritaDetailPage({ params }: Props) {
  const resolvedParams = await params
  // Mock fetching data
  const article = {
    title: 'Kegiatan Seminar Nasional Ekonomi Digital Seri 2026',
    content: `
      <p>Fakultas Ekonomi Universitas Garut (FEKON UNIGA) sukses menyelenggarakan Seminar Nasional bertajuk "Transformasi Bisnis di Era Ekonomi Digital". Acara ini dihadiri oleh ratusan mahasiswa, praktisi bisnis, dan akademisi dari berbagai perguruan tinggi.</p>
      
      <h2>Menjawab Tantangan Zaman</h2>
      <p>Dalam sambutannya, Dekan Fakultas Ekonomi UNIGA menyampaikan pentingnya adaptasi teknologi bagi para lulusan baru. "Kita tidak bisa lagi hanya mengandalkan metode konvensional. Ekonomi digital menuntut kelincahan, inovasi, dan pemahaman mendalam tentang ekosistem teknologi," ujarnya.</p>
      
      <p>Seminar ini menghadirkan tiga narasumber utama yang merupakan pakar di industri teknologi finansial (fintech) dan e-commerce. Para mahasiswa diajak berdiskusi mengenai strategi pemasaran digital, manajemen risiko siber, serta prospek karier di industri startup.</p>

      <h2>Harapan Kedepan</h2>
      <p>Kegiatan ini diharapkan dapat menjadi katalis bagi mahasiswa FEKON UNIGA untuk mulai membangun portofolio digital mereka sejak dini. Pihak fakultas juga berkomitmen untuk terus menghadirkan praktisi ahli sebagai dosen tamu guna memperkaya wawasan praktis mahasiswa.</p>
    `,
    category: 'Kampus',
    author: 'Humas FEKON',
    date: '2026-08-21',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
  }

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/berita" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Kembali ke Indeks Berita
          </Link>
          
          <div className="space-y-4">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 pt-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-10 bg-slate-100">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Share Sidebar (Desktop) */}
            <div className="hidden md:flex flex-col gap-4 w-12 shrink-0">
              <span className="text-xs text-slate-400 uppercase font-bold text-center tracking-widest" style={{ writingMode: 'vertical-rl' }}>Share</span>
              <Button variant="outline" size="icon" className="rounded-full"><Share2 className="h-4 w-4" /></Button>
            </div>

            {/* Content */}
            <article className="prose prose-slate prose-blue max-w-none prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600 w-full" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          {/* Share Footer (Mobile) */}
          <div className="mt-12 pt-8 border-t flex md:hidden items-center gap-4">
            <span className="font-semibold text-slate-900">Bagikan:</span>
            <Button variant="outline" size="icon" className="rounded-full"><Share2 className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>
    </div>
  )
}
