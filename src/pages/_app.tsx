import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { NextUIProvider } from '@nextui-org/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ModalContextProvider } from '../context/modalContext';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../store/store';
import { BooksContextProvider } from '../context/booksContext';

export const persistor = persistStore(store);

export default function App({ Component, pageProps, router }: AppProps) {
  const url = `http://localhost:3000/${router.route}`;

  const apolloClient = useApollo(pageProps);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BooksContextProvider>
          <ModalContextProvider>
            <ApolloProvider client={apolloClient}>
              <NextUIProvider>
                <AnimatePresence
                  mode="wait"
                  initial={false}
                  onExitComplete={() => window.scrollTo(0, 0)}>
                  <Component {...pageProps} canonical={url} key={url} />
                  <ToastContainer />
                </AnimatePresence>
              </NextUIProvider>
            </ApolloProvider>
          </ModalContextProvider>
        </BooksContextProvider>
      </PersistGate>
    </Provider>
  );
}
