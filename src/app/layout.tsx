import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fakultas Ekonomi Universitas Garut',
  description: 'Website Resmi Fakultas Ekonomi Universitas Garut (FEKON UNIGA)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  )
}
