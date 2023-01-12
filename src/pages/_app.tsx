import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
