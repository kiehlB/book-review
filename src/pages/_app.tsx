import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';
import { AnimatePresence } from 'framer-motion';
import { NextUIProvider } from '@nextui-org/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ModalContextProvider } from '../context/modalContext';

export default function App({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ModalContextProvider>
      <ApolloProvider client={apolloClient}>
        <NextUIProvider>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </NextUIProvider>
      </ApolloProvider>
    </ModalContextProvider>
  );
}
