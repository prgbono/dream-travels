/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'my-json-server.typicode.com',
      'a.cdn-hotels.com',
      'cdn.aarp.net',
      'content.skyscnr.com',
      'humanidades.com',
      'cdn.britannica.com',
      'lp-cms-production.imgix.net',
      'miro.medium.com'
    ]
  }
}

export default nextConfig
