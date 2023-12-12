'use client';

import useModalStore from '@/store/modal';
import { ToastContainer } from 'react-toastify';
import FloatingHeader from '../floating';
import useBookStore from '@/store/book';
import Header from '@/views/app-bar';
import { Core } from '../core';
import useGetUser from '@/views/setting/hooks/use-get-user';
import { Suspense } from 'react';

export type RequestCookie = {
  name: string;
  value: string;
};

interface PageLayoutProps {
  children: React.ReactNode;
  token?: RequestCookie | undefined;
}

function PageLayout({ children, token }: PageLayoutProps) {
  const { isClose, setClose, setMode } = useModalStore();
  const { isSearchBook, setIsSearchBook } = useBookStore();
  const { getUser } = useGetUser();

  return (
    <div className="h-full mxl:px-4">
      <ToastContainer />
      <Suspense>
        <FloatingHeader
          token={token}
          IsClose={isClose}
          SetIsClose={setClose}
          SetMode={setMode}
          BookIsClose={isSearchBook}
          SetBookClose={setIsSearchBook}
          getUser={getUser}
        />
        <Header
          getUser={getUser}
          token={token}
          IsClose={isClose}
          SetIsClose={setClose}
          SetMode={setMode}
          BookIsClose={isSearchBook}
          SetBookClose={setIsSearchBook}
        />
      </Suspense>
      <main>{children}</main>
    </div>
  );
}

export { PageLayout };
