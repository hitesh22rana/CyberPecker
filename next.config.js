/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["https://jsln0v.deta.dev/"],
  },
}

module.exports = nextConfig
