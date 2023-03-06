import * as React from 'react';
import ModalContext from '../../context/modalContext';
import AuthContainer from '../auth/AuthContainer';
import Header from '../base/Header';
import BookTalble from '../booksTable';
import BookModal from '../booksTable/BookModal';
import FloatingHeader from '../common/Floating';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  const { BookIsClose, SetBookIsClose, IsClose, SetIsClose, mode, SetMode } =
    React.useContext(ModalContext);

  return (
    <div className="h-full mxl:px-4">
      <AuthContainer IsClose={IsClose} SetIsClose={SetIsClose} mode={mode} />
      <BookModal visible={BookIsClose} onClose={SetBookIsClose}>
        <BookTalble />
      </BookModal>

      <FloatingHeader
        IsClose={IsClose}
        SetIsClose={SetIsClose}
        SetMode={SetMode}
        BookIsClose={BookIsClose}
        SetBookIsClose={SetBookIsClose}
      />
      <Header
        IsClose={IsClose}
        SetIsClose={SetIsClose}
        SetMode={SetMode}
        BookIsClose={BookIsClose}
        SetBookIsClose={SetBookIsClose}
      />
      <main>{children}</main>
    </div>
  );
}

export { PageLayout };
