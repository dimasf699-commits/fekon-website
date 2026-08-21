'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'

export default function AdminTambahProdiPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    vision: '',
    mission: '',
    accreditation: '',
    head_of_program: '',
    is_active: true
  })

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setFormData({
      ...formData,
      name: newName,
      slug: generateSlug(newName)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name) {
      alert('Nama program studi wajib diisi')
      return
    }

    try {
      setLoading(true)
      
      const { error } = await supabase
        .from('study_programs')
        .insert([formData])

      if (error) throw error

      alert('Program studi berhasil ditambahkan!')
      router.push('/admin/prodi')
      
    } catch (error: any) {
      console.error('Error adding study program:', error)
      alert(`Gagal menyimpan program studi: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/prodi">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Program Studi</h1>
          <p className="text-sm text-slate-500">Tambahkan program studi baru di Fakultas Ekonomi.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informasi Dasar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Program Studi *</label>
                  <Input 
                    placeholder="Contoh: S1 Akuntansi" 
                    value={formData.name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug (URL)</label>
                  <Input 
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  />
                  <p className="text-xs text-slate-500">URL-friendly teks. Otomatis dibuat dari nama.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Deskripsi Singkat</label>
                  <Textarea 
                    placeholder="Tulis deskripsi program studi..." 
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Visi</label>
                  <Textarea 
                    placeholder="Visi program studi..." 
                    rows={3}
                    value={formData.vision}
                    onChange={(e) => setFormData({...formData, vision: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Misi</label>
                  <Textarea 
                    placeholder="Misi program studi..." 
                    rows={5}
                    value={formData.mission}
                    onChange={(e) => setFormData({...formData, mission: e.target.value})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detail Tambahan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ketua Program Studi</label>
                  <Input 
                    placeholder="Nama Kaprodi beserta gelar..." 
                    value={formData.head_of_program}
                    onChange={(e) => setFormData({...formData, head_of_program: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Status Akreditasi</label>
                  <Input 
                    placeholder="Contoh: Unggul, Baik Sekali" 
                    value={formData.accreditation}
                    onChange={(e) => setFormData({...formData, accreditation: e.target.value})}
                  />
                </div>

                <div className="flex items-center space-x-2 pt-2 pb-4 border-b">
                  <input 
                    type="checkbox" 
                    id="isActive"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                  />
                  <label htmlFor="isActive" className="text-sm font-medium">
                    Program Studi Aktif
                  </label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                  {loading ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Menyimpan...</>
                  ) : (
                    <><Save className="h-4 w-4 mr-2" /> Simpan Prodi</>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}
