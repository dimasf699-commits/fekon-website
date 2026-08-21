import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, User, Book, Target } from 'lucide-react'

// Dummy data to simulate DB fetch
const prodiData: Record<string, any> = {
  akuntansi: {
    name: 'S1 Akuntansi',
    accreditation: 'Unggul',
    head: 'Dr. Nama Kaprodi, S.E., M.Ak.',
    vision: 'Menjadi program studi akuntansi yang bereputasi internasional dalam menghasilkan lulusan yang profesional, beretika, dan berwawasan teknologi pada tahun 2030.',
    mission: [
      'Menyelenggarakan pendidikan akuntansi yang inovatif dan adaptif terhadap teknologi.',
      'Mengembangkan penelitian terapan di bidang akuntansi yang bermanfaat bagi dunia usaha.',
      'Melakukan pengabdian kepada masyarakat untuk meningkatkan literasi keuangan.'
    ],
    prospects: ['Akuntan Publik', 'Auditor Internal', 'Konsultan Pajak', 'Analis Keuangan', 'Wirausaha'],
  },
  manajemen: {
    name: 'S1 Manajemen',
    accreditation: 'Baik Sekali',
    head: 'Dr. Nama Kaprodi, S.E., M.M.',
    vision: 'Menjadi pusat unggulan pendidikan manajemen yang menghasilkan pemimpin bisnis adaptif dan inovatif.',
    mission: [
      'Menyelenggarakan pendidikan manajemen berbasis kewirausahaan.',
      'Mengembangkan riset di bidang ilmu manajemen yang aplikatif.',
      'Membangun jejaring dengan dunia industri dan bisnis.'
    ],
    prospects: ['Manajer Pemasaran', 'Manajer SDM', 'Wirausaha', 'Analis Bisnis', 'Konsultan Manajemen'],
  },
  pariwisata: {
    name: 'S1 Pariwisata',
    accreditation: 'Baik',
    head: 'Dr. Nama Kaprodi, S.Par., M.Par.',
    vision: 'Menjadi program studi pariwisata terkemuka yang menghasilkan lulusan kompeten berwawasan kearifan lokal dan global.',
    mission: [
      'Menyelenggarakan pendidikan pariwisata yang berkualitas.',
      'Melakukan penelitian yang berkontribusi pada pengembangan destinasi pariwisata.',
      'Meningkatkan kapasitas masyarakat sadar wisata melalui pengabdian.'
    ],
    prospects: ['Manajer Destinasi', 'Konsultan Pariwisata', 'Hospitality Manager', 'Event Organizer', 'Travel Consultant'],
  },
  'bisnis-digital': {
    name: 'S1 Bisnis Digital',
    accreditation: 'Baik',
    head: 'Dr. Nama Kaprodi, S.Kom., M.M.',
    vision: 'Menjadi pelopor pendidikan bisnis digital yang menghasilkan technopreneur tangguh dan inovatif.',
    mission: [
      'Mengintegrasikan ilmu bisnis dan teknologi digital dalam kurikulum.',
      'Mengembangkan ekosistem startup di lingkungan kampus.',
      'Mendorong hilirisasi riset teknologi bisnis.'
    ],
    prospects: ['Digital Marketing Strategist', 'Startup Founder', 'Data Analyst', 'Product Manager', 'E-commerce Specialist'],
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const prodi = prodiData[resolvedParams.slug]
  if (!prodi) return { title: 'Tidak Ditemukan' }
  return {
    title: `${prodi.name} | Fakultas Ekonomi Universitas Garut`,
    description: `Informasi lengkap mengenai program studi ${prodi.name} di Fakultas Ekonomi Universitas Garut.`,
  }
}

export default async function ProdiDetailPage({ params }: Props) {
  const resolvedParams = await params
  const prodi = prodiData[resolvedParams.slug]

  if (!prodi) {
    notFound()
  }

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-blue-800 text-blue-100 rounded-full text-sm font-medium mb-4">
              Akreditasi: {prodi.accreditation}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{prodi.name}</h1>
            <div className="flex items-center gap-2 text-blue-200">
              <User className="h-5 w-5" />
              <span>Ketua Program Studi: {prodi.head}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-12">
              
              {/* Visi Misi */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-blue-800 border-b pb-2">
                  <Target className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Visi & Misi</h2>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Visi</h3>
                  <p className="text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    "{prodi.vision}"
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Misi</h3>
                  <ul className="space-y-3">
                    {prodi.mission.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Kurikulum Singkat (Placeholder) */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-blue-800 border-b pb-2">
                  <Book className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Struktur Kurikulum</h2>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Kurikulum program studi disusun berdasarkan standar Kerangka Kualifikasi Nasional Indonesia (KKNI) dan Merdeka Belajar Kampus Merdeka (MBKM), dirancang untuk memberikan keseimbangan antara teori dan praktik.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-slate-50 border-none shadow-md">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-bold text-lg text-slate-900 border-b pb-2">Prospek Karier</h3>
                  <ul className="space-y-3">
                    {prodi.prospects.map((career: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
