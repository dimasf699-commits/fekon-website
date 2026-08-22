import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Pimpinan | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Pimpinan Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Pimpinan"
      description="Informasi mengenai Profil - Pimpinan Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
