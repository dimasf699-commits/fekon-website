'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const dummyProdi = [
  { id: 1, name: 'S1 Akuntansi', head: 'Dr. Ahmad, S.E., M.Ak.', accreditation: 'Unggul', status: 'Aktif' },
  { id: 2, name: 'S1 Manajemen', head: 'Dr. Budi, S.E., M.M.', accreditation: 'Baik Sekali', status: 'Aktif' },
  { id: 3, name: 'S1 Pariwisata', head: 'Dr. Citra, S.Par., M.Par.', accreditation: 'Baik', status: 'Aktif' },
  { id: 4, name: 'S1 Bisnis Digital', head: 'Dr. Diana, S.Kom., M.M.', accreditation: 'Baik', status: 'Aktif' },
]

export default function AdminProdiPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Program Studi</h1>
          <p className="text-sm text-slate-500">Kelola informasi program studi di Fakultas Ekonomi.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Prodi
        </Button>
      </div>

      <Card>
        <CardHeader className="py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Daftar Program Studi</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari prodi..."
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
                  <th className="px-4 py-3">Nama Prodi</th>
                  <th className="px-4 py-3">Ketua Program Studi</th>
                  <th className="px-4 py-3">Akreditasi</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {dummyProdi.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                    <td className="px-4 py-3">{item.head}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {item.accreditation}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-blue-600">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-orange-600">
                        <Edit className="h-4 w-4" />
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
