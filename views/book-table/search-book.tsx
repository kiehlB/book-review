'use client';

import useBookStore from '@/store/book';
import useModalStore from '@/store/modal';
import React, { startTransition, useEffect, useState, useTransition } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

interface SearchBookProps {}

function SearchBook({}: SearchBookProps) {
  const { bookIsClose, setBookClose, isSearchBook, setIsSearchBook } = useModalStore();
  const { setSearchBookName } = useBookStore();

  const [isPending, startTransition] = useTransition();
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    startTransition(() => {
      setIsDisplayed(isSearchBook);
    });

    if (!isSearchBook) {
      const timer = setTimeout(() => {
        startTransition(() => {
          setIsDisplayed(false);
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSearchBook]);

  const containerStyle: React.CSSProperties = {
    opacity: isSearchBook ? 1 : 0,
    visibility: isDisplayed ? 'visible' : 'hidden',
    transition: 'opacity 0.5s ease, visibility 0.5s ease',
    zIndex: 1000,
  };

  const enterBooktable = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const trimmedText = searchText.trim();
      if (!trimmedText) {
        return;
      }

      setSearchText('');
      setSearchBookName(searchText);
      setIsSearchBook();
      setBookClose(!bookIsClose);
    }
  };

  return (
    <div
      style={containerStyle}
      className="top-0flex fixed left-0  h-full w-full justify-center bg-[#000000c5] mxs:bg-gray-200">
      <div className="relative flex h-full w-full translate-y-[-10rem] items-center justify-center">
        <div className="relative flex h-full w-[768px] max-w-[768px] items-center mxs:w-[80%]  mxx:w-[95%]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch className="h-5 w-5 text-gray-700" />
          </div>
          <input
            value={searchText}
            onKeyDown={enterBooktable}
            onChange={e => setSearchText(e.target.value)}
            className="h-20 w-full bg-gray-200 pl-10 pr-10 text-gray-700 placeholder-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 mxs:border-b-2 mxs:border-dark-300"
            type="text"
            placeholder="책을 검색해 보세요"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={setIsSearchBook}>
              <IoMdClose className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBook;
