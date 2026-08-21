'use client'

import { Upload, Image as ImageIcon, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const dummyMedia = [
  { id: 1, name: 'hero-banner.jpg', size: '1.2 MB', url: '/images/hero.jpg' },
  { id: 2, name: 'akuntansi-logo.png', size: '450 KB', url: '/images/akuntansi.png' },
  { id: 3, name: 'manajemen-logo.png', size: '420 KB', url: '/images/manajemen.png' },
  { id: 4, name: 'berita-seminar.jpg', size: '2.1 MB', url: '/images/seminar.jpg' },
  { id: 5, name: 'gedung-kampus.jpg', size: '3.4 MB', url: '/images/kampus.jpg' },
]

export default function AdminMediaPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="text-sm text-slate-500">Kelola foto, gambar, dan dokumen untuk website.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Media
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {dummyMedia.map((item) => (
          <Card key={item.id} className="overflow-hidden group">
            <div className="aspect-square bg-slate-100 flex items-center justify-center relative">
              <ImageIcon className="h-10 w-10 text-slate-300" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-slate-700 truncate">{item.name}</p>
              <p className="text-xs text-slate-500">{item.size}</p>
            </div>
          </Card>
        ))}
        
        {/* Upload Placeholder */}
        <Card className="overflow-hidden border-dashed border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer flex flex-col items-center justify-center aspect-square">
          <Upload className="h-8 w-8 text-slate-400 mb-2" />
          <p className="text-sm font-medium text-slate-600">Klik untuk Upload</p>
        </Card>
      </div>
    </div>
  )
}
