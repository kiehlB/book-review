import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';

import { NextUIProvider } from '@nextui-org/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ModalContextProvider } from '../context/modalContext';
import { AnimatePresence } from 'framer-motion';
import HomeTab from '../components/home/HomeTab';
import AuthContext, { AuthContextProvider } from '../context/authContext';
import { useContext, useEffect } from 'react';

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;

  const apolloClient = useApollo(pageProps);

  return (
    <ModalContextProvider>
      <AuthContextProvider>
        <ApolloProvider client={apolloClient}>
          <NextUIProvider>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
          </NextUIProvider>
        </ApolloProvider>
      </AuthContextProvider>
    </ModalContextProvider>
  );
}
