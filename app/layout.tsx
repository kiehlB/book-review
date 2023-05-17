import Head from 'next/head';

import { ApolloWrapper } from '@/lib/apollo-wapper';
import { ReduxProvider } from '@/store/provider';
import { BooksContextProvider } from '@/context/book-context';
import { ModalContextProvider } from '@/context/modal-context';

import '@/styles/globals.css';
import '@/styles/tiptap.scss';
import 'react-day-picker/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
  book: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <title>Book Reivew</title>
        <meta
          name="description"
          content="책 리뷰를 작성해 보세요 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요."
        />
        <meta name="og:title" content="Book review Main" />
        <meta
          name="og:description"
          content="책 리뷰를 작성해 보세요 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요."
        />
      </Head>
      <body className="h-full transition duration-500 dark:bg-[#1a1b1e]">
        <ReduxProvider>
          <ApolloWrapper>
            <BooksContextProvider>
              <ModalContextProvider>{props.children}</ModalContextProvider>
            </BooksContextProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
