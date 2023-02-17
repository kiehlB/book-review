import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="transition duration-500 h-full dark:bg-[#1a1b1e]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
