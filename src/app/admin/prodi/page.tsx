'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Eye, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'

export default function AdminProdiPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [studyPrograms, setStudyPrograms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchStudyPrograms()
  }, [])

  const fetchStudyPrograms = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('study_programs')
        .select('*')
        .order('name')

      if (error) throw error
      setStudyPrograms(data || [])
    } catch (error) {
      console.error('Error fetching study programs:', error)
      alert('Gagal mengambil data program studi')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus program studi ini?')) return

    try {
      const { error } = await supabase
        .from('study_programs')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      alert('Program studi berhasil dihapus')
      fetchStudyPrograms()
    } catch (error) {
      console.error('Error deleting study program:', error)
      alert('Gagal menghapus program studi')
    }
  }

  const filteredPrograms = studyPrograms.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Program Studi</h1>
          <p className="text-sm text-slate-500">Kelola informasi program studi di Fakultas Ekonomi.</p>
        </div>
        <Link href="/admin/prodi/tambah">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Prodi
          </Button>
        </Link>
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
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[800px]">
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
                {loading ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-slate-500">
                      <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
                      Memuat data...
                    </td>
                  </tr>
                ) : filteredPrograms.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-slate-500">
                      Tidak ada program studi yang ditemukan.
                    </td>
                  </tr>
                ) : (
                  filteredPrograms.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                      <td className="px-4 py-3">{item.head_of_program || '-'}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                          {item.accreditation || '-'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.is_active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.is_active ? 'Aktif' : 'Non-aktif'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <Link href={`/prodi/${item.slug}`} target="_blank">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-blue-600">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/admin/prodi/edit/${item.id}`}>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-orange-600">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-slate-500 hover:text-red-600"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
