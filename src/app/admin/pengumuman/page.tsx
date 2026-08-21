'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2, BellRing } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const dummyPengumuman = [
  { id: 1, title: 'Jadwal Ujian Akhir Semester Genap 2026', type: 'Akademik', isImportant: true, date: '2026-08-20' },
  { id: 2, title: 'Libur Nasional Memperingati Hari Kemerdekaan', type: 'Umum', isImportant: false, date: '2026-08-15' },
]

export default function AdminPengumumanPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Kelola Pengumuman</h1>
          <p className="text-sm text-slate-500">Kelola informasi dan pengumuman untuk civitas akademika.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Buat Pengumuman
        </Button>
      </div>

      <Card>
        <CardHeader className="py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Daftar Pengumuman</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari pengumuman..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-medium border-b">
                <tr>
                  <th className="px-4 py-3">Judul Pengumuman</th>
                  <th className="px-4 py-3">Jenis</th>
                  <th className="px-4 py-3">Penting?</th>
                  <th className="px-4 py-3">Tanggal</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {dummyPengumuman.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{item.title}</td>
                    <td className="px-4 py-3">{item.type}</td>
                    <td className="px-4 py-3">
                      {item.isImportant ? (
                        <span className="flex items-center gap-1 text-red-600 text-xs font-bold">
                          <BellRing className="h-3 w-3" /> Penting
                        </span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3">{item.date}</td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-orange-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
