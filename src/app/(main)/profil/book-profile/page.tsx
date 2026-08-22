import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profil - Book Profile | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Profil - Book Profile Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Profil - Book Profile"
      description="Informasi mengenai Profil - Book Profile Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
