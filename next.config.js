/*
* @type {import('next').NextConfig}
*/

const nextConfig = require('next-optimized-images')

module.exports = nextConfig({
  
  /** Next Optimized Images */
  imagesName: '[name]__[hash].[ext]',

  /** Next.js  */
  
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  }
})
