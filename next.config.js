/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hub.critter.pet",
      },
    ],
  },
}

module.exports = nextConfig
