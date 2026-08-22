import Link from 'next/link'
import { ArrowLeft, Search, FileQuestion } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 sm:px-6 bg-slate-50">
      <div className="text-center max-w-lg mx-auto">
        {/* Animated Icon */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
          <div className="relative bg-blue-50 text-blue-600 rounded-full w-full h-full flex items-center justify-center shadow-inner">
            <FileQuestion className="w-12 h-12" />
          </div>
        </div>

        {/* 404 Header */}
        <h1 className="text-7xl sm:text-9xl font-black text-slate-200 mb-4 tracking-tighter">404</h1>
        
        {/* Title & Description */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia. 
          Pastikan URL yang Anda masukkan sudah benar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2")}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link 
            href="/program-studi" 
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2")}
          >
            Lihat Program Studi
          </Link>
        </div>
      </div>
    </div>
  )
}
