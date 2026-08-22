import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan - Administrasi | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Layanan - Administrasi Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Layanan - Administrasi"
      description="Informasi mengenai Layanan - Administrasi Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
