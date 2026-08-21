'use client'

import { useState, useEffect } from 'react'
import { Save, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'

export default function AdminSettingsPage() {
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  
  const [settings, setSettings] = useState({
    site_name: 'Fakultas Ekonomi Universitas Garut',
    site_abbr: 'FEKON UNIGA',
    footer_desc: 'Fakultas Ekonomi Universitas Garut berkomitmen menghasilkan lulusan unggul di bidang ekonomi, bisnis, dan pariwisata yang adaptif terhadap perkembangan teknologi digital.',
    address: 'Jl. Raya Samarang No. 52A, Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151',
    phone: '(0262) 233556',
    email: 'info@fekon.uniga.ac.id',
    instagram: 'https://instagram.com/fekon_uniga'
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('key', 'general_settings')
        .single()
        
      if (error && error.code !== 'PGRST116') {
        throw error // Ignore no rows error (PGRST116) initially
      }
      
      if (data && data.value) {
        setSettings({
          ...settings,
          ...data.value
        })
      }
    } catch (error) {
      console.error('Error fetching settings:', error)
    } finally {
      setFetching(false)
    }
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      
      // Upsert: update if exists, insert if not
      const { error } = await supabase
        .from('site_settings')
        .upsert({
          key: 'general_settings',
          value: settings,
          updated_at: new Date().toISOString()
        }, { onConflict: 'key' })

      if (error) throw error
      
      alert('Pengaturan berhasil disimpan!')
    } catch (error: any) {
      console.error('Error saving settings:', error)
      alert(`Gagal menyimpan pengaturan: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pengaturan Website</h1>
          <p className="text-sm text-slate-500">Konfigurasi informasi umum fakultas dan kontak.</p>
        </div>
        <Button 
          className="bg-blue-600 hover:bg-blue-700" 
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          Simpan Perubahan
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Umum</CardTitle>
            <CardDescription>Nama dan deskripsi singkat website.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nama Website</label>
              <Input 
                value={settings.site_name}
                onChange={(e) => handleChange('site_name', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Singkatan / Akronim</label>
              <Input 
                value={settings.site_abbr}
                onChange={(e) => handleChange('site_abbr', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Deskripsi Footer</label>
              <Textarea 
                value={settings.footer_desc}
                onChange={(e) => handleChange('footer_desc', e.target.value)}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kontak & Sosial Media</CardTitle>
            <CardDescription>Informasi kontak resmi fakultas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Alamat Lengkap</label>
              <Textarea 
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nomor Telepon / WhatsApp</label>
              <Input 
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Resmi</label>
              <Input 
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Link Instagram</label>
              <Input 
                value={settings.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
