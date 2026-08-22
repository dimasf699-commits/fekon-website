import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Kerja Sama | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Kerja Sama Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Kerja Sama"
      description="Informasi mengenai Profil - Kerja Sama Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
