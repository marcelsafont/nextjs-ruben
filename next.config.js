/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: 'www.datocms-assets.com'}],
      },
      async redirects() {
        return [
          {
            source: '/categoria/tattoo=173632922',
            destination: '/categoria/tattoo',
            permanent: true,
          },
          {
            source: '/categoria/proyectos=173632921',
            destination: '/categoria/proyectos',
            permanent: true,
          },
        ]
      }
}

module.exports = nextConfig
