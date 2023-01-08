/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com", "ibb.co", "i.ibb.co"],
  },
};

module.exports = nextConfig;
