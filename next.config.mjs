/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/resources/relationship-challenges',
        destination: '/blog/10-relationship-challenges-every-couple-faces',
        permanent: true,
      },
      {
        source: '/resources/relationship-material',
        destination: '/blog/10-questions-that-reveal-relationship-material',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
