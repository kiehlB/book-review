'use client';

import useModalStore from '@/store/modal';
import { ToastContainer } from 'react-toastify';
import FloatingHeader from '../floating';
import Header from '@/views/app-bar';
import useGetUser from '@/views/setting/hooks/use-get-user';

export type RequestCookie = {
  name: string;
  value: string;
};

interface PageLayoutProps {
  children: React.ReactNode;
  token?: RequestCookie | undefined;
}

function PageLayout({ children, token }: PageLayoutProps) {
  const { isClose, setClose, setMode, isSearchBook, setIsSearchBook } = useModalStore();

  const { getUser } = useGetUser();

  return (
    <div className="h-full mxl:px-4">
      <ToastContainer />
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

      <main>{children}</main>
    </div>
  );
}

export { PageLayout };
