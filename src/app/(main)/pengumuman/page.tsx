import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pengumuman | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Pengumuman Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Pengumuman"
      description="Informasi mengenai Pengumuman Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
