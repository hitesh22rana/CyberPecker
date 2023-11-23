/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
            'https://thehackernews.com',
            'https://etimg.etb2bimg.com',
            'etimg.etb2bimg.com',
            'thehackernews.com',
            'blogger.googleusercontent.com',
        ],
        minimumCacheTTL: 60,
    },
}

module.exports = nextConfig
