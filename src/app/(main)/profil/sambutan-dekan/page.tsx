import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Sambutan Dekan | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Sambutan Dekan Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Sambutan Dekan"
      description="Informasi mengenai Profil - Sambutan Dekan Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
