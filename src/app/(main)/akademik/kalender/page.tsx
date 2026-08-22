import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akademik - Kalender | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Akademik - Kalender Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Akademik - Kalender"
      description="Informasi mengenai Akademik - Kalender Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
