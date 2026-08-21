import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Building2, Target, History, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Profil Fakultas | Fakultas Ekonomi Universitas Garut',
  description: 'Sejarah, Visi, Misi, dan Struktur Organisasi Fakultas Ekonomi Universitas Garut.',
}

export default function ProfilPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="bg-blue-900 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Fakultas</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat Fakultas Ekonomi Universitas Garut, sejarah, visi, misi, dan struktur organisasi kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          
          {/* Sejarah */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-800">
              <History className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Sejarah Singkat</h2>
            </div>
            <div className="prose max-w-none text-slate-700 leading-relaxed">
              <p>
                Fakultas Ekonomi Universitas Garut didirikan dengan komitmen untuk berpartisipasi aktif dalam mencerdaskan kehidupan bangsa, khususnya di bidang ilmu ekonomi, manajemen, dan akuntansi. Sejak awal berdirinya, kami terus beradaptasi dengan perkembangan zaman dan kebutuhan dunia usaha.
              </p>
              <p>
                Dengan dukungan tenaga pengajar profesional dan fasilitas pembelajaran yang memadai, Fakultas Ekonomi terus berkembang menjadi salah satu fakultas unggulan di lingkungan Universitas Garut dan wilayah Jawa Barat.
              </p>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-blue-800">
                  <Target className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Menjadi Fakultas Ekonomi yang unggul, kompetitif, dan berwawasan kewirausahaan di tingkat nasional pada tahun 2030, serta berkontribusi nyata dalam pembangunan masyarakat.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-blue-800">
                  <Building2 className="h-6 w-6" />
                  <h3 className="text-2xl font-bold">Misi</h3>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
                  <li>Menyelenggarakan pendidikan dan pengajaran yang berkualitas.</li>
                  <li>Melaksanakan penelitian terapan di bidang ekonomi dan bisnis.</li>
                  <li>Melaksanakan pengabdian kepada masyarakat yang berdampak.</li>
                  <li>Membangun kemitraan dengan dunia industri dan institusi lainnya.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pimpinan Fakultas */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-blue-800 border-b pb-4">
              <Users className="h-8 w-8" />
              <h2 className="text-3xl font-bold">Pimpinan Fakultas</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Dr. Nama Dekan, S.E., M.Si.', role: 'Dekan' },
                { name: 'Nama Wakil Dekan I, S.E., M.M.', role: 'Wakil Dekan I' },
                { name: 'Nama Wakil Dekan II, S.E., M.Ak.', role: 'Wakil Dekan II' },
              ].map((pimpinan, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-48 h-48 mx-auto bg-slate-200 rounded-2xl overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&sig=${index}`} 
                      alt={pimpinan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{pimpinan.name}</h4>
                    <p className="text-blue-600 font-medium">{pimpinan.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
