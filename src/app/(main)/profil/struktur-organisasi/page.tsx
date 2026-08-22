import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Struktur Organisasi | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Struktur Organisasi Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Struktur Organisasi"
      description="Informasi mengenai Profil - Struktur Organisasi Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
