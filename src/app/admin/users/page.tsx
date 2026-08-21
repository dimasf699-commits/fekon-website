'use client'

import { useState } from 'react'
import { Plus, Search, Edit, Trash2, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const dummyUsers = [
  { id: 1, name: 'Admin Utama', email: 'admin@fekon.uniga.ac.id', role: 'Super Admin', status: 'Aktif' },
  { id: 2, name: 'Staf Akuntansi', email: 'akuntansi@fekon.uniga.ac.id', role: 'Admin Prodi', status: 'Aktif' },
  { id: 3, name: 'Tim Publikasi', email: 'humas@fekon.uniga.ac.id', role: 'Editor', status: 'Aktif' },
]

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pengguna & Akses</h1>
          <p className="text-sm text-slate-500">Kelola akun admin, staf prodi, dan editor.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Tambah Pengguna
        </Button>
      </div>

      <Card>
        <CardHeader className="py-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">Daftar Pengguna</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Cari email/nama..."
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
                  <th className="px-4 py-3">Nama</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Hak Akses</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {dummyUsers.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                    <td className="px-4 py-3 text-slate-500">{item.email}</td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1">
                        {item.role === 'Super Admin' && <Shield className="h-3 w-3 text-purple-600" />}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.role === 'Super Admin' ? 'bg-purple-100 text-purple-700' :
                          item.role === 'Admin Prodi' ? 'bg-blue-100 text-blue-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {item.role}
                        </span>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-orange-600">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {item.role !== 'Super Admin' && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
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
