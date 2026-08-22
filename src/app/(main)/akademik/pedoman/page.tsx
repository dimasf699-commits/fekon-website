import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akademik - Pedoman | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Akademik - Pedoman Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Akademik - Pedoman"
      description="Informasi mengenai Akademik - Pedoman Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
