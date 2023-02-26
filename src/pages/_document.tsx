import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-yI46tvvCxXkEd6g3Nev3/iym48KxJMcTIg7zdw/j1q3p7C0/Rt9XO7gjOzZ2V7cHvz/HuV7O8L/P5YHTueEYKQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"></Script>
      </Head>
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
