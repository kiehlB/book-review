/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.bookreview.pro/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
