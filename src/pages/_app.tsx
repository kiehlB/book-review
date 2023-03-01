import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import '../../styles/tiptap.scss';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ModalContextProvider } from '../context/modalContext';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../store/store';
import { BooksContextProvider } from '../context/booksContext';
import Script from 'next/script';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import Head from 'next/head';

export const persistor = persistStore(store);

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#D3D3D3',
    },
    secondary: {
      main: '#0000008a',
    },
  },
});

export default function App({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    try {
      if (!window?.Kakao?.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Script src="/theme.js" strategy="beforeInteractive" />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BooksContextProvider>
              <ModalContextProvider>
                <ApolloProvider client={apolloClient}>
                  <Component
                    {...pageProps}
                    canonical={router.asPath}
                    key={router.asPath}
                  />
                  <ToastContainer />
                </ApolloProvider>
              </ModalContextProvider>
            </BooksContextProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
