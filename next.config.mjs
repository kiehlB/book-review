import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['search1.kakaocdn.net', 'res.cloudinary.com', 'image.aladin.co.kr'],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
    KAKAO: process.env.KAKAO,
    NAVER_ID: process.env.NAVER_ID,
    NAVER_CALLBACK: process.env.NAVER_CALLBACK,
    GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK,
    KAKAO_CALLBACK: process.env.KAKAO_CALLBACK,
    API_ROUTE: process.env.API_ROUTE,
  },
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'globalThis.__DEV__': false,
      }),
    );
    return config;
  },
};

export default withPlaiceholder(nextConfig);
