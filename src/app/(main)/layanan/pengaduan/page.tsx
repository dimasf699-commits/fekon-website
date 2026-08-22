import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan - Pengaduan | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Layanan - Pengaduan Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Layanan - Pengaduan"
      description="Informasi mengenai Layanan - Pengaduan Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
