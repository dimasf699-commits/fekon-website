export type NavItem = {
  name: string
  href: string
  external?: boolean
  children?: NavItem[]
}

export const PMB_URL = 'https://uniga.siakadcloud.com/spmbfront/'

export const mainNavigation: NavItem[] = [
  { name: 'Beranda', href: '/' },
  {
    name: 'Profil Fakultas',
    href: '/profil',
    children: [
      { name: 'Tentang Fakultas', href: '/profil' },
      { name: 'Visi, Misi & Tujuan', href: '/profil/visi-misi' },
      { name: 'Sambutan Dekan', href: '/profil/sambutan-dekan' },
      { name: 'Pimpinan Fakultas', href: '/profil/pimpinan' },
      { name: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
      { name: 'Dosen', href: '/profil/dosen' },
      { name: 'Tenaga Kependidikan', href: '/profil/tenaga-kependidikan' },
      { name: 'Akreditasi', href: '/profil/akreditasi' },
      { name: 'Kerja Sama', href: '/profil/kerja-sama' },
      { name: 'Book Profile', href: '/profil/book-profile' },
    ],
  },
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
  {
    name: 'Akademik',
    href: '/akademik',
    children: [
      { name: 'Informasi Akademik', href: '/akademik' },
      { name: 'Kalender Akademik', href: '/akademik/kalender' },
      { name: 'Kurikulum', href: '/akademik/kurikulum' },
      { name: 'Pedoman Akademik', href: '/akademik/pedoman' },
      { name: 'Dokumen Unduhan', href: '/dokumen' },
    ],
  },
  {
    name: 'Layanan',
    href: '/layanan',
    children: [
      { name: 'Portal Layanan', href: '/layanan' },
      { name: 'SIAKAD', href: 'https://siakad.uniga.ac.id', external: true },
      { name: 'E-Learning (EdLink)', href: 'https://edlink.id', external: true },
      { name: 'Jurnal Ilmiah', href: 'https://ojs.fekon.uniga.ac.id', external: true },
      { name: 'Layanan Administrasi', href: '/layanan/administrasi' },
      { name: 'Layanan Pengaduan', href: '/layanan/pengaduan' },
    ],
  },
  {
    name: 'Informasi',
    href: '/berita',
    children: [
      { name: 'Berita Terbaru', href: '/berita' },
      { name: 'Pengumuman', href: '/pengumuman' },
      { name: 'Agenda & Event', href: '/agenda' },
      { name: 'Galeri', href: '/galeri' },
    ],
  },
]

export const footerLinks = {
  about: [
    { name: 'Tentang Fakultas', href: '/profil' },
    { name: 'Visi Misi', href: '/profil/visi-misi' },
    { name: 'Pimpinan', href: '/profil/pimpinan' },
    { name: 'Kontak', href: '/kontak' },
  ],
  programs: [
    { name: 'S1 Akuntansi', href: '/program-studi/akuntansi' },
    { name: 'S1 Manajemen', href: '/program-studi/manajemen' },
    { name: 'S1 Pariwisata', href: '/program-studi/pariwisata' },
    { name: 'S1 Bisnis Digital', href: '/program-studi/bisnis-digital' },
  ],
  quickLinks: [
    { name: 'Pendaftaran Mahasiswa Baru', href: PMB_URL, external: true },
    { name: 'Kalender Akademik', href: '/akademik/kalender' },
    { name: 'Jurnal Ilmiah', href: 'https://ojs.fekon.uniga.ac.id', external: true },
    { name: 'Download Dokumen', href: '/dokumen' },
    { name: 'Layanan Pengaduan', href: '/layanan/pengaduan' },
  ]
}

export const contactInfo = {
  address: 'Jl. Jati No. 42B Tarogong Kaler, Kabupaten Garut, Jawa Barat 44151',
  phone: '(0262) 232773',
  email: 'info@fekon.uniga.ac.id',
  socials: {
    instagram: 'https://instagram.com/fekon_uniga',
    facebook: 'https://facebook.com/fekonuniga',
    youtube: 'https://youtube.com/@fekonuniga',
  }
}
