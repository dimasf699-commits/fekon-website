import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Visi Misi | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Visi Misi Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Visi Misi"
      description="Informasi mengenai Profil - Visi Misi Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
