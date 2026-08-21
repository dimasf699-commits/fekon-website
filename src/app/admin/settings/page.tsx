'use client'

import { Save } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pengaturan Website</h1>
          <p className="text-sm text-slate-500">Konfigurasi informasi umum fakultas dan kontak.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
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
              <Input defaultValue="Fakultas Ekonomi Universitas Garut" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Singkatan / Akronim</label>
              <Input defaultValue="FEKON UNIGA" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Deskripsi Footer</label>
              <Textarea 
                defaultValue="Fakultas Ekonomi Universitas Garut berkomitmen menghasilkan lulusan unggul di bidang ekonomi, bisnis, dan pariwisata yang adaptif terhadap perkembangan teknologi digital." 
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
                defaultValue="Jl. Raya Samarang No. 52A, Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151" 
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Nomor Telepon / WhatsApp</label>
              <Input defaultValue="(0262) 233556" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Resmi</label>
              <Input defaultValue="info@fekon.uniga.ac.id" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Link Instagram</label>
              <Input defaultValue="https://instagram.com/fekon_uniga" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
