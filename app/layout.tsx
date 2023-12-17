import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import '@/styles/book.scss';
import '@/styles/app.css';
import '@/styles/prose.css';

import { ApolloWrapper } from '@/lib/apollo-wapper';
import CustomThemeProvider from '@/lib/theme-provider';
import StyledComponentsRegistry from '@/lib/registry';

import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV! === 'production'
      ? process.env.API_URL!
      : 'http://localhost:3000',
  ),
  title: '북리뷰',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  description:
    '책 리뷰를 작성하는 곳 입니다. 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다.',
  icons: {
    icon: '/logo10.png',
    shortcut: '/logo10.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token');

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="h-full transition duration-100 dark:bg-dark-500">
        <StyledComponentsRegistry>
          <ApolloWrapper token={token?.value}>
            <CustomThemeProvider>{children}</CustomThemeProvider>
          </ApolloWrapper>
        </StyledComponentsRegistry>

        <Script
          defer
          strategy="lazyOnload"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></Script>

        <Script
          defer
          strategy="lazyOnload"
          src="https://developers.kakao.com/sdk/js/kakao.js"></Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R64H1TLKCP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-R64H1TLKCP');
        `}
        </Script>
      </body>
    </html>
  );
}
