// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

/**
 * @type {import('next').NextConfig}
 */
module.exports = withBundleAnalyzer({
  images: {
    domains: ['a0.muscache.com']
  }
})
