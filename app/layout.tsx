import { BooksContextProvider } from '@/context/book-context';
import { ModalContextProvider } from '@/context/modal-context';
import { ApolloWrapper } from '@/lib/apollo-wapper';
import { ReduxProvider } from '@/store/provider';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReduxProvider>
          <ApolloWrapper>
            <BooksContextProvider>
              <ModalContextProvider>{children}</ModalContextProvider>
            </BooksContextProvider>
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
