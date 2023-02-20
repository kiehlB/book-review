import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="transition duration-500 h-full dark:bg-[#1a1b1e]">
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
}
