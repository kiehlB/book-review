import * as React from 'react';
import { useSelector } from 'react-redux';
import ModalContext from '../../context/modalContext';
import { RootState } from '../../store/rootReducer';
import AuthContainer from '../auth/AuthContainer';
import Header from '../base/Header';
import TestHeader from '../base/TestHeader';
import BookTalble from '../booksTable';
import BookModal from '../booksTable/BookModal';
import FloatingHeader from '../common/Floating';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  const { BookIsClose, SetBookIsClose } = React.useContext(ModalContext);

  return (
    <div className="h-full mxl:px-3">
      <AuthContainer />
      <BookModal visible={BookIsClose} onClose={SetBookIsClose} className="">
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
