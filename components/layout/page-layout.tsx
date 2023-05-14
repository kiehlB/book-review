'use client';

import ModalContext from '@/context/modal-context';
import * as React from 'react';
import AuthContainer from '../auth/auth-container';
import BookModal from '../book-finder/book-modal';
import BookTalble from '../book-finder';
import FloatingHeader from '../floating';
import Header from '../app-bar';

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  const { BookIsClose, SetBookIsClose, IsClose, SetIsClose, mode, SetMode } =
    React.useContext(ModalContext);

  return (
    <div className="mxl:px-4 h-full">
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
