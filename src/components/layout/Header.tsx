'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil', href: '/profil' },
  {
    name: 'Program Studi',
    href: '/program-studi',
    children: [
      { name: 'S1 Akuntansi', href: '/program-studi/akuntansi' },
      { name: 'S1 Manajemen', href: '/program-studi/manajemen' },
      { name: 'S1 Pariwisata', href: '/program-studi/pariwisata' },
      { name: 'S1 Bisnis Digital', href: '/program-studi/bisnis-digital' },
    ],
  },
  { name: 'Akademik', href: '/akademik' },
  { name: 'E-Service', href: '/layanan' },
  { name: 'Berita', href: '/berita' },
  { name: 'PMB', href: 'https://pmb.uniga.ac.id', external: true },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xs shrink-0">
              UNIGA
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold leading-tight text-sm text-blue-950">FAKULTAS EKONOMI</span>
              <span className="text-xs text-muted-foreground leading-tight">Universitas Garut</span>
            </div>
            <div className="flex sm:hidden font-bold text-sm text-blue-950 truncate max-w-[200px]">FEKON UNIGA</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-700 transition-colors p-2">
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} render={<Link href={child.href} className="w-full cursor-pointer p-2" />}>
                          {child.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-700 transition-colors p-2"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Actions & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Link href="https://pmb.uniga.ac.id" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "hidden md:inline-flex bg-blue-700 hover:bg-blue-800")}>
              Daftar Sekarang
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden h-11 w-11")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] overflow-y-auto">
              <SheetTitle className="text-left font-bold text-blue-950 mb-4 border-b pb-4 mt-4">
                Menu Utama
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className="flex items-center justify-between w-full py-3 px-2 font-medium text-left hover:bg-slate-50 rounded-md transition-colors"
                        >
                          {item.name}
                          {openSubmenu === item.name ? (
                            <ChevronUp className="h-5 w-5 text-slate-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-500" />
                          )}
                        </button>
                        {openSubmenu === item.name && (
                          <div className="ml-4 flex flex-col gap-1 border-l-2 pl-4 border-slate-200 mt-1 mb-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="py-2.5 px-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="py-3 px-2 font-medium hover:text-blue-700 hover:bg-slate-50 rounded-md transition-colors"
                        onClick={() => setIsOpen(false)}
                        target={item.external ? '_blank' : undefined}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t">
                  <Link href="https://pmb.uniga.ac.id" target="_blank" className={cn(buttonVariants({ size: "lg" }), "w-full bg-blue-700 hover:bg-blue-800 h-12")}>
                      Daftar Sekarang
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

