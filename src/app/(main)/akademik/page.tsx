import { Metadata } from 'next'
import { Calendar, BookOpen, GraduationCap, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Akademik | Fakultas Ekonomi Universitas Garut',
  description: 'Informasi akademik, kalender pendidikan, dan pedoman perkuliahan Fakultas Ekonomi UNIGA.',
}

export default function AkademikPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Informasi Akademik</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Segala informasi mengenai pedoman akademik, kalender perkuliahan, dan layanan akademik lainnya.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3 text-blue-800">
                  <Calendar className="h-6 w-6" />
                  <CardTitle className="text-2xl">Kalender Akademik</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Kalender Akademik merupakan jadwal kegiatan tahunan yang mengatur waktu perkuliahan, ujian, dan kegiatan akademik lainnya.
                </p>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <ul className="space-y-2 font-medium">
                    <li className="flex justify-between border-b pb-2">
                      <span>Masa KRS Ganjil</span>
                      <span>Agustus - September</span>
                    </li>
                    <li className="flex justify-between border-b pb-2 pt-2">
                      <span>Perkuliahan Ganjil</span>
                      <span>September - Januari</span>
                    </li>
                    <li className="flex justify-between border-b pb-2 pt-2">
                      <span>Ujian Tengah Semester (UTS)</span>
                      <span>November</span>
                    </li>
                    <li className="flex justify-between pt-2">
                      <span>Ujian Akhir Semester (UAS)</span>
                      <span>Januari</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3 text-blue-800">
                  <BookOpen className="h-6 w-6" />
                  <CardTitle className="text-2xl">Pedoman Akademik</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Buku Pedoman Akademik memuat seluruh peraturan dan ketentuan yang berlaku bagi mahasiswa Fakultas Ekonomi Universitas Garut selama masa studi.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sistem Kredit Semester (SKS)</li>
                  <li>Persyaratan kelulusan dan predikat</li>
                  <li>Tata tertib perkuliahan dan ujian</li>
                  <li>Panduan penyusunan tugas akhir/skripsi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3 text-blue-800">
                  <GraduationCap className="h-6 w-6" />
                  <CardTitle className="text-2xl">Tugas Akhir & Skripsi</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Tugas Akhir (Skripsi) merupakan karya ilmiah wajib bagi mahasiswa program S1 sebagai salah satu syarat kelulusan.
                </p>
                <p>
                  Proses penyusunan skripsi diawasi oleh dosen pembimbing yang ditunjuk oleh program studi. Mahasiswa wajib mematuhi panduan penulisan karya ilmiah Fakultas Ekonomi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardHeader>
                <div className="flex items-center gap-3 text-blue-800">
                  <Award className="h-6 w-6" />
                  <CardTitle className="text-2xl">Beasiswa & Prestasi</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Universitas Garut dan instansi mitra menyediakan berbagai program beasiswa bagi mahasiswa berprestasi maupun kurang mampu.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Beasiswa KIP-Kuliah</li>
                  <li>Beasiswa Prestasi Akademik (BPA)</li>
                  <li>Beasiswa dari Mitra Perusahaan</li>
                  <li>Penghargaan Mahasiswa Teladan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
