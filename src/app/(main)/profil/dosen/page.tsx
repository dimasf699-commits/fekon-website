import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Dosen | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Dosen Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Dosen"
      description="Informasi mengenai Profil - Dosen Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
