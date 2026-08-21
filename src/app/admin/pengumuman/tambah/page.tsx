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

export default function AdminTambahPengumumanPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [loading, setLoading] = useState(false)
  const [studyPrograms, setStudyPrograms] = useState<any[]>([])
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    study_program_id: '',
    summary: '',
    content: '',
    status: 'draft',
    is_important: false
  })

  useEffect(() => {
    fetchStudyPrograms()
  }, [])

  const fetchStudyPrograms = async () => {
    const { data } = await supabase.from('study_programs').select('id, name').order('name')
    if (data) setStudyPrograms(data)
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setFormData({
      ...formData,
      title: newTitle,
      slug: generateSlug(newTitle)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.title || !formData.content) {
      alert('Judul dan konten wajib diisi')
      return
    }

    try {
      setLoading(true)
      
      const payload = {
        title: formData.title,
        slug: formData.slug,
        study_program_id: formData.study_program_id || null,
        summary: formData.summary,
        content: formData.content,
        status: formData.status,
        is_important: formData.is_important
      }

      const { error } = await supabase
        .from('announcements')
        .insert([payload])

      if (error) throw error

      alert('Pengumuman berhasil ditambahkan!')
      router.push('/admin/pengumuman')
      
    } catch (error: any) {
      console.error('Error adding announcement:', error)
      alert(`Gagal menyimpan pengumuman: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/pengumuman">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Buat Pengumuman</h1>
          <p className="text-sm text-slate-500">Sebarkan informasi ke mahasiswa dan dosen.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Konten Utama</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Judul Pengumuman *</label>
                  <Input 
                    placeholder="Masukkan judul pengumuman..." 
                    value={formData.title}
                    onChange={handleTitleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug (URL)</label>
                  <Input 
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  />
                  <p className="text-xs text-slate-500">URL-friendly teks. Otomatis dibuat dari judul.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Ringkasan Singkat</label>
                  <Textarea 
                    placeholder="Tulis ringkasan pengumuman..." 
                    rows={2}
                    value={formData.summary}
                    onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Isi Pengumuman *</label>
                  <Textarea 
                    placeholder="Tulis detail lengkap di sini..." 
                    rows={12}
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pengaturan Tambahan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base md:text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Prodi</label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base md:text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    value={formData.study_program_id}
                    onChange={(e) => setFormData({...formData, study_program_id: e.target.value})}
                  >
                    <option value="">Semua Prodi (Umum)</option>
                    {studyPrograms.map((prodi) => (
                      <option key={prodi.id} value={prodi.id}>{prodi.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="isImportant"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={formData.is_important}
                    onChange={(e) => setFormData({...formData, is_important: e.target.checked})}
                  />
                  <label htmlFor="isImportant" className="text-sm font-medium text-red-600">
                    Tandai sebagai Penting (Prioritas)
                  </label>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-4" disabled={loading}>
                  {loading ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Menyimpan...</>
                  ) : (
                    <><Save className="h-4 w-4 mr-2" /> Simpan Pengumuman</>
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
