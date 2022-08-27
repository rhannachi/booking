/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false
})

/**
 * @type {import('next').NextConfig}
 */
module.exports = withBundleAnalyzer({})
