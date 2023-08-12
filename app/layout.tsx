import { ApolloWrapper } from '@/lib/apollo-wapper';
import { ReduxProvider } from '@/store/provider';
import { BooksContextProvider } from '@/context/book-context';
import { ModalContextProvider } from '@/context/modal-context';
import '@/styles/globals.css';
import '@/styles/tiptap.scss';
import MuiProvider from '@/lib/mui-provider';

import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.bookreview.pro'
      : 'http://localhost:3000',
  ),
  title: 'Book Review',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  description:
    '책 리뷰를 작성하는 곳 입니다. 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다.',
  icons: {
    icon: '/logo10.png',
    shortcut: '/logo10.png',
  },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  book: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="h-full transition duration-500 dark:bg-[#1a1b1e]">
        <ReduxProvider>
          <ApolloWrapper>
            <BooksContextProvider>
              <ModalContextProvider>
                <MuiProvider>{props.children}</MuiProvider>
              </ModalContextProvider>
            </BooksContextProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
      {/* <Script src="/theme.js" strategy="beforeInteractive" /> */}

      <Script
        defer
        src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></Script>

      <Script defer src="https://developers.kakao.com/sdk/js/kakao.js"></Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R64H1TLKCP"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-R64H1TLKCP');
        `}
      </Script>
    </html>
  );
}
