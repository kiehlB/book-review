import * as React from 'react';
import ModalContext from '../../context/modalContext';
import AuthContainer from '../auth/AuthContainer';
import Header from '../base/Header';
import TestHeader from '../base/TestHeader';
import BookTalble from '../booksTable';
import BookModal from '../booksTable/BookModal';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  const { BookIsClose, SetBookIsClose } = React.useContext(ModalContext);

  return (
    <div className="px-[1rem] dark:bg-[#1a1b1e] h-full">
      <AuthContainer />
      <BookModal
        visible={BookIsClose}
        onClose={SetBookIsClose}
        className="flex max-w-[80rem] mx-auto w-full h-[100%] shadow-md bg-[#E9E9E9] mmd:max-w-full">
        <BookTalble />
      </BookModal>

      <Header />
      <main>{children}</main>
    </div>
  );
}

function TestPageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <TestHeader />
      <main>{children}</main>
    </div>
  );
}

export { PageLayout, TestPageLayout };
