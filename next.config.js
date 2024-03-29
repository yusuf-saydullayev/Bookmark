// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

// @ts-ignore
const prod = process.env.NODE_ENV === 'production'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: prod ? false : true,
})
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  async headers() {
    return [
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            // Instead of this value:
            value: 'public, no-cache, no-store',
            // Cache-Control response header is `public, max-age=60` in production
            // and `public, max-age=0, must-revalidate` in development
          },
        ],
      },
    ]
  },
}

module.exports = withPWA(nextConfig)
module.exports = withBundleAnalyzer({})
