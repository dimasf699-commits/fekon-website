'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, Users, Settings, LogOut, Menu, X, BookOpen, ImageIcon, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sidebarNav = [
  { title: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { title: 'Berita', href: '/admin/berita', icon: FileText },
  { title: 'Pengumuman', href: '/admin/pengumuman', icon: Bell },
  { title: 'Program Studi', href: '/admin/prodi', icon: BookOpen },
  { title: 'Media Library', href: '/admin/media', icon: ImageIcon },
  { title: 'Pengguna', href: '/admin/users', icon: Users },
  { title: 'Pengaturan', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-slate-50">{children}</div>
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 bg-slate-950">
          <Link href="/admin" className="text-white font-bold text-lg flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-xs">UNIGA</div>
            Admin Panel
          </Link>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 py-6 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {sidebarNav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.title}
              </Link>
            )
          })}

          <div className="pt-8 mt-8 border-t border-slate-800">
            <Button variant="ghost" className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800">
              <LogOut className="h-5 w-5 mr-3" />
              Keluar
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-500 hover:text-slate-700" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-semibold text-slate-800 hidden sm:block">Dashboard</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-sm text-blue-600 hover:underline hidden sm:block">
              Lihat Website &rarr;
            </Link>
            <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
