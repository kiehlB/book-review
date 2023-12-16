'use client';

import { ToastContainer } from 'react-toastify';
import AuthContainer from '@/views/auth/auth-container';
import BookModal from '@/views/book-table/book-modal';
import BookTalble from '@/views/book-table';
import SearchBook from '@/views/book-table/search-book';
import useModalStore from '@/store/modal';

interface CoreProps {}

function Core({}: CoreProps) {
  const { isClose } = useModalStore();
  return (
    <>
      {isClose && <AuthContainer />}
      <BookModal>
        <BookTalble />
      </BookModal>
      <SearchBook />
      <ToastContainer />
    </>
  );
}

export { Core };
