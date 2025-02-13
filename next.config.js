/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'www.datocms-assets.com'}],
      },
}

module.exports = nextConfig
