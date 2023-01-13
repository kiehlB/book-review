import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from '@nextui-org/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;

  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <NextUIProvider>
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
      </NextUIProvider>
    </ApolloProvider>
  );
}
