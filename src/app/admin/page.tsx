import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Users, Bell, Eye } from 'lucide-react'

export const metadata = {
  title: 'Dashboard | Admin FEKON UNIGA',
}

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Berita', value: '124', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Pengumuman Aktif', value: '12', icon: Bell, color: 'text-amber-600', bg: 'bg-amber-100' },
    { title: 'Kunjungan Harian', value: '850', icon: Eye, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Pengguna Admin', value: '8', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Selamat Datang, Admin</h1>
        <p className="text-slate-500">Berikut adalah ringkasan aktivitas website Fakultas Ekonomi hari ini.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              </div>
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terakhir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 text-sm border-b pb-3 last:border-0 last:pb-0">
                  <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <FileText className="h-4 w-4 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">Berita baru ditambahkan</p>
                    <p className="text-slate-500 line-clamp-1">"Seminar Nasional Ekonomi Digital..."</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">2 jam lalu</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Draft Konten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8 text-slate-500">
                <p>Tidak ada konten draft saat ini.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
