import { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <body className="transition duration-500 h-full dark:bg-[#1a1b1e]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
