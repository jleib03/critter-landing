/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'hub.critter.pet'],
    unoptimized: true,
  },
}

module.exports = nextConfig
