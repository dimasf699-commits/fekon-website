import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/link',
        destination: '/layanan',
        permanent: true,
      },
      {
        source: '/profile',
        destination: '/profil',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/berita',
        permanent: true,
      },
      {
        source: '/event',
        destination: '/agenda',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/layanan',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
