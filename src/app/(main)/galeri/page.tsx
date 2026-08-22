import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Galeri Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Galeri"
      description="Informasi mengenai Galeri Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
