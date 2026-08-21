import { Metadata } from 'next'
import { FileText, Download, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Pusat Dokumen | Fakultas Ekonomi Universitas Garut',
  description: 'Unduh dokumen akademik, pedoman, formulir, dan materi lainnya dari Fakultas Ekonomi UNIGA.',
}

// Dummy data
const documents = [
  { title: 'Pedoman Akademik Mahasiswa 2026/2027', category: 'Pedoman', type: 'PDF', size: '2.4 MB', date: '2026-08-01' },
  { title: 'Kalender Akademik Ganjil 2026/2027', category: 'Akademik', type: 'PDF', size: '1.1 MB', date: '2026-07-15' },
  { title: 'Buku Panduan Penulisan Skripsi', category: 'Panduan', type: 'PDF', size: '3.5 MB', date: '2026-06-20' },
  { title: 'Formulir Pendaftaran Ujian Komprehensif', category: 'Formulir', type: 'DOCX', size: '150 KB', date: '2026-05-10' },
  { title: 'Sertifikat Akreditasi S1 Akuntansi', category: 'Akreditasi', type: 'PDF', size: '1.8 MB', date: '2026-01-12' },
  { title: 'Sertifikat Akreditasi S1 Manajemen', category: 'Akreditasi', type: 'PDF', size: '1.7 MB', date: '2026-01-12' },
]

export default function DokumenPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Pusat Dokumen</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan dan unduh berbagai dokumen akademik, pedoman, formulir, dan informasi penting lainnya.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input placeholder="Cari dokumen..." className="pl-10 h-12 text-base" />
            </div>
            <Button variant="outline" className="h-12 px-6 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Kategori
            </Button>
          </div>

          <div className="space-y-4">
            {documents.map((doc, idx) => (
              <Card key={idx} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{doc.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-slate-500">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{doc.category}</span>
                        <span>{doc.type}</span>
                        <span>{doc.size}</span>
                        <span>{new Date(doc.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto shrink-0 flex items-center gap-2">
                    <Download className="h-4 w-4" /> Unduh
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="ghost" className="text-slate-500">Muat Lebih Banyak Dokumen</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
