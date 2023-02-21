/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
  },
};

module.exports = nextConfig;
