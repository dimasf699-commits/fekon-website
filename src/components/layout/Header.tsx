'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-xs">
              UNIGA
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold leading-tight text-sm text-blue-950">FAKULTAS EKONOMI</span>
              <span className="text-xs text-muted-foreground leading-tight">Universitas Garut</span>
            </div>
            <div className="flex sm:hidden font-bold text-sm text-blue-950">FEKON UNIGA</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation.map((item) => {
            if (item.children) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-700 transition-colors">
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} render={<Link href={child.href} className="w-full cursor-pointer" />}>
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
                className="hover:text-blue-700 transition-colors"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Actions & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="https://pmb.uniga.ac.id" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "hidden md:inline-flex bg-blue-700 hover:bg-blue-800")}>
              Daftar Sekarang
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "md:hidden")}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left font-bold text-blue-950 mb-4 border-b pb-4">
                Menu Utama
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <Link
                      href={item.href}
                      className="font-medium hover:text-blue-700"
                      onClick={() => setIsOpen(false)}
                      target={item.external ? '_blank' : undefined}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-2 border-l pl-4 border-slate-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="text-sm text-muted-foreground hover:text-blue-700"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Link href="https://pmb.uniga.ac.id" target="_blank" className={cn(buttonVariants(), "w-full bg-blue-700 hover:bg-blue-800")}>
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
