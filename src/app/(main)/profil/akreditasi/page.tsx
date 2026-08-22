import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Akreditasi | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Akreditasi Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Akreditasi"
      description="Informasi mengenai Profil - Akreditasi Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
