import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akademik - Kurikulum | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Akademik - Kurikulum Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Akademik - Kurikulum"
      description="Informasi mengenai Akademik - Kurikulum Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
