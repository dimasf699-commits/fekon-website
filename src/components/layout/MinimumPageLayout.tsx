import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MinimumPageLayoutProps {
  title: string
  description: string
  parentPath?: string
  parentName?: string
  children?: React.ReactNode
  isEmpty?: boolean
}

export function MinimumPageLayout({
  title,
  description,
  parentPath = '/',
  parentName = 'Beranda',
  children,
  isEmpty = false,
}: MinimumPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-[70vh]">
      {/* Breadcrumb & Header */}
      <section className="bg-slate-50 py-10 sm:py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start gap-4">
            <Link 
              href={parentPath} 
              className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke {parentName}
            </Link>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{title}</h1>
              <p className="text-slate-600 max-w-2xl">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
              <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-10 w-10 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Segera Hadir</h2>
              <p className="text-slate-600 mb-8">
                Halaman {title} sedang dalam tahap penyusunan dan akan segera diperbarui. 
                Silakan periksa kembali nanti.
              </p>
              <Link 
                href="/" 
                className={cn(buttonVariants({ size: "lg" }), "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600")}
              >
                Kembali ke Beranda
              </Link>
            </div>
          ) : (
            children
          )}
        </div>
      </section>
    </div>
  )
}
