import type { AppProps } from 'next/app';
import Head from 'next/head';

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
import 'react-day-picker/dist/style.css';
import { NextSeo } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';

export const persistor = persistStore(store);

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>Book Review</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="책 리뷰를 작성하는 곳 입니다  여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다."
        />
        <meta name="og:title" content="Book Review" />
        <meta
          name="og:image"
          content="http://res.cloudinary.com/doqurzmbt/image/upload/v1681166838/woong/duusewwde5vo8yi0rvjk.png"
        />
        <meta
          name="og:description"
          content="책 리뷰를 작성하는 곳 입니다  여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Script src="/theme.js" strategy="beforeInteractive" />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BooksContextProvider>
            <ModalContextProvider>
              <ApolloProvider client={apolloClient}>
                <Component {...pageProps} canonical={router.asPath} key={router.asPath} />
                <ToastContainer />
              </ApolloProvider>
            </ModalContextProvider>
          </BooksContextProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
