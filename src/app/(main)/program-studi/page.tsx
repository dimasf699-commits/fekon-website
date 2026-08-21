import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GraduationCap, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Program Studi | Fakultas Ekonomi Universitas Garut',
  description: 'Daftar Program Studi di Fakultas Ekonomi Universitas Garut.',
}

const programs = [
  {
    name: 'S1 Akuntansi',
    slug: 'akuntansi',
    desc: 'Mencetak akuntan profesional yang andal dan berintegritas tinggi.',
  },
  {
    name: 'S1 Manajemen',
    slug: 'manajemen',
    desc: 'Membentuk manajer dan wirausahawan tangguh yang mampu bersaing secara global.',
  },
  {
    name: 'S1 Pariwisata',
    slug: 'pariwisata',
    desc: 'Mengembangkan ahli pariwisata yang inovatif dengan standar internasional.',
  },
  {
    name: 'S1 Bisnis Digital',
    slug: 'bisnis-digital',
    desc: 'Menyiapkan talenta digital untuk memimpin transformasi bisnis masa depan.',
  },
]

export default function ProgramStudiPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Program Studi</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan program studi yang sesuai dengan minat Anda di Fakultas Ekonomi Universitas Garut. Kami menawarkan pendidikan berkualitas yang relevan dengan kebutuhan industri.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((prodi, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow flex flex-col h-full border-t-4 border-t-blue-600">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{prodi.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-600">{prodi.desc}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/program-studi/${prodi.slug}`} className={cn(buttonVariants(), "w-full justify-between bg-blue-600 hover:bg-blue-700")}>
                      Detail Program Studi <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
