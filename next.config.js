/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["https://thehackernews.com", "https://etimg.etb2bimg.com", "etimg.etb2bimg.com", "thehackernews.com"],
  },
}

module.exports = nextConfig
