/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  // Vercel specific optimizations
  poweredByHeader: false,
  generateEtags: true,
  compress: true
}

module.exports = nextConfig 