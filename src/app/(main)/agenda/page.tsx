import { MinimumPageLayout } from '@/components/layout/MinimumPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda | Fakultas Ekonomi Universitas Garut',
  description: 'Halaman Agenda Fakultas Ekonomi Universitas Garut.',
}

export default function Page() {
  return (
    <MinimumPageLayout 
      title="Agenda"
      description="Informasi mengenai Agenda Fakultas Ekonomi Universitas Garut."
      isEmpty={true}
    />
  )
}
