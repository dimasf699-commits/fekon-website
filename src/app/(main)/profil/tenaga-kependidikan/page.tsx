import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Tenaga Kependidikan | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Tenaga Kependidikan Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Tenaga Kependidikan"
      description="Informasi mengenai Profil - Tenaga Kependidikan Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
