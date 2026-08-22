'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { use } from 'react'

export default function AdminEditProdiPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const supabase = createClient()
  const { id } = use(params)
  
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    vision: '',
    mission: '',
    accreditation: '',
    head_of_program: '',
    concentration: '',
    bg_image: '',
    is_active: true
  })

  useEffect(() => {
    fetchStudyProgramData()
  }, [])

  const fetchStudyProgramData = async () => {
    try {
      const { data, error } = await supabase
        .from('study_programs')
        .select('*')
        .eq('id', id)
        .single()
        
      if (error) throw error
      if (data) {
        setFormData({
          name: data.name || '',
          slug: data.slug || '',
          description: data.description || '',
          vision: data.vision || '',
          mission: data.mission || '',
          accreditation: data.accreditation || '',
          head_of_program: data.head_of_program || '',
          concentration: data.concentration || '',
          bg_image: data.bg_image || '',
          is_active: data.is_active !== false // default true if undefined
        })
      }
    } catch (error) {
      console.error('Error fetching study program:', error)
      alert('Gagal mengambil data program studi')
    } finally {
      setFetching(false)
    }
  }

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
        .update(formData)
        .eq('id', id)

      if (error) throw error

      alert('Program studi berhasil diperbarui!')
      router.push('/admin/prodi')
      
    } catch (error: any) {
      console.error('Error updating study program:', error)
      alert(`Gagal memperbarui program studi: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
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
          <h1 className="text-2xl font-bold text-slate-900">Edit Program Studi</h1>
          <p className="text-sm text-slate-500">Perbarui informasi program studi.</p>
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
                  <label className="text-sm font-medium">Konsentrasi (Peminatan)</label>
                  <Textarea 
                    placeholder="Contoh: Akuntansi Keuangan, Akuntansi Manajemen..." 
                    rows={3}
                    value={formData.concentration}
                    onChange={(e) => setFormData({...formData, concentration: e.target.value})}
                  />
                  <p className="text-xs text-slate-500">Pisahkan dengan koma atau baris baru.</p>
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
                  <label className="text-sm font-medium">Gambar Background Hover (Link)</label>
                  <Input 
                    placeholder="https://..." 
                    value={formData.bg_image}
                    onChange={(e) => setFormData({...formData, bg_image: e.target.value})}
                  />
                  <p className="text-xs text-slate-500">Masukkan link gambar (Unsplash, Imgur, dll) untuk latar belakang card saat di-hover.</p>
                </div>

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
                    <><Save className="h-4 w-4 mr-2" /> Simpan Perubahan</>
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
