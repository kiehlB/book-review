import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;

  console.log(router.route);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
  );
}
