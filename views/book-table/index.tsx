'use client';

import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { IoSearchOutline } from 'react-icons/io5';
import BooksTableContainer from './table-container';
import useBookcacheStore from '@/store/book-cache';
import useBookStore, { BookData } from '@/store/book';
import { NextLink } from '@/components/arrow-button';
import useModalStore from '@/store/modal';

export interface RootObject {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: BookData[];
}

interface Action<T> {
  type: 'pending' | 'resolved' | 'rejected';
  data?: T | null;
  error?: Error | null;
}

interface AsyncAction<T> {
  type: 'pending' | 'resolved' | 'rejected';
  data?: T | null;
  error?: Error | null;
}

type DispatchFunction<T> = (action: Action<T>) => void;

interface AsyncState<T> {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: T | null;
  error: Error | null;
}
interface BooksTableForm {
  initialBookName?: string;
  BookIsClose: boolean;
  SetBookClose: (value: boolean) => void;
  searchBookName: string;
  setSearchBookName: (e: string) => void;
}

function BooksTableForm({
  searchBookName: externalBookName,
  initialBookName = externalBookName || '',
  BookIsClose,
  SetBookClose,
  setSearchBookName,
}: BooksTableForm) {
  const [BookName, setBookName] = useState(initialBookName);

  React.useEffect(() => {
    if (typeof externalBookName === 'string') {
      setBookName(externalBookName);
    }
  }, [externalBookName]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBookName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchBookName(BookName);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset className="relative flex w-full items-center justify-between">
        <legend className="bg-[rgb(255 115 179)] absolute left-[16px] top-[50%] translate-y-[-50%] dark:text-[#e4e5e7]">
          <IoSearchOutline />
        </legend>
        <input
          onChange={handleChange}
          value={BookName}
          placeholder="책을 검색해 보세요"
          name="BookName"
          className="h-[50px] w-[310px] rounded-full border-[1px] border-[#d8dae5] px-[2.5rem] py-[0.5rem] text-xs text-[#474d66] focus:outline-none dark:border-[#1a1b1e] dark:bg-dark-400 dark:text-[#e4e5e7] dark:placeholder-gray-300"
          style={{ borderRadius: '1.5rem', fontSize: '12px' }}
        />
        <MdClose
          onClick={() => SetBookClose(!BookIsClose)}
          tabIndex={1}
          size={24}
          color="#868E96"
          className="cursor-pointer sm:hidden"
        />
      </fieldset>
    </form>
  );
}

function useSafeDispatch<T>(dispatch: DispatchFunction<T>): DispatchFunction<T> {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (action: Action<T>) => {
      if (mounted.current) {
        dispatch(action);
      }
    },
    [dispatch],
  );
}

function asyncReducer<T>(state: AsyncState<T>, action: AsyncAction<T>): AsyncState<T> {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null };
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data ? action.data : null, error: null };
    }
    case 'rejected': {
      return {
        status: 'rejected',
        data: null,
        error: action.error ? action.error : null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface AsyncInitialState<T> {
  data?: T | null;
  error?: Error | null;
}

function useAsync<T>(initialState: AsyncInitialState<T>) {
  const [state, unsafeDispatch] = React.useReducer<
    React.Reducer<AsyncState<T>, AsyncAction<T>>
  >(asyncReducer, {
    status: 'idle',
    data: initialState.data ?? null,
    error: initialState.error ?? null,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = React.useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: 'pending' });
      promise.then(
        data => {
          dispatch({ type: 'resolved', data });
        },
        error => {
          dispatch({ type: 'rejected', error });
        },
      );
    },
    [dispatch],
  );

  const setData = React.useCallback(
    (data: T) => dispatch({ type: 'resolved', data }),
    [dispatch],
  );
  const setError = React.useCallback(
    (error: Error) => dispatch({ type: 'rejected', error }),
    [dispatch],
  );

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
    dispatch,
  };
}

export const bookApi = async (title: string) => {
  const prod =
    process.env.NODE_ENV == 'production'
      ? process.env.API_ROUTE
      : 'http://localhost:4000';
  try {
    const response = await fetch(`${prod}/api/book?title=${title}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data?.item;
  } catch (err) {
    throw new Error(`Error fetching data: ${err}`);
  }
};
function BookInfo({ bookName }: { bookName: string }) {
  const { cache, addBook } = useBookcacheStore();
  const BookName = bookName?.toLowerCase();
  const { data: Book, status, error, run, setData, dispatch } = useAsync<BookData[]>({});

  React.useEffect(() => {
    if (!BookName) {
      return;
    } else if (cache[BookName]) {
      setData(cache[BookName]);
    } else {
      run(
        bookApi(BookName).then(BookData => {
          addBook(BookName, BookData);
          setData(BookData);
          return BookData;
        }),
      );
    }
  }, [BookName, cache, setData, run, addBook]);

  if (status) {
    return (
      <BooksTableContainer
        autoFocus={true}
        disabled={false}
        isLoading={false}
        data={Book}
        status={status}
      />
    );
  }

  throw new Error('다시 시도해주세요');
}

interface BookTableDisplayProps {
  book: BookData | null;
  onClearBook: (e: BookData | null) => void;
  isMobile: boolean;
}
const BookDisplay = ({ book, onClearBook, isMobile }: BookTableDisplayProps) => {
  if (!book?.title) return null;

  return (
    <>
      {book.cover && (
        <img
          src={book.cover}
          width="45px"
          height={isMobile ? '60px' : '70px'}
          className={isMobile ? 'h-[60px] mxs:hidden' : ''}
        />
      )}
      <div className={`ml-2 w-full truncate text-sm ${isMobile ? 'max-w-[100px]' : ''}`}>
        {book.title}
      </div>
      <MdClose
        onClick={() => onClearBook(null)}
        tabIndex={1}
        size={20}
        color="#f31260"
        className="ml-1 rounded-full transition-all hover:bg-[#cfd2e2] hover:p-1"
      />
    </>
  );
};

interface NavigationLinksProps {
  onAction: (isMobile: boolean) => void;
  bookTitle: string | undefined;
  isMobile: boolean;
}

const NavigationLinks = ({ onAction, bookTitle, isMobile }: NavigationLinksProps) => (
  <>
    <NextLink
      href="/write"
      onClick={() => onAction(true)}
      className={isMobile ? 'mr-2' : 'mr-8'}>
      Skip
    </NextLink>
    <NextLink
      href={bookTitle ? '/write' : ''}
      onClick={() => onAction(false)}
      className={isMobile ? 'mr-2 pl-6 mxs:pl-2' : ''}>
      다음
    </NextLink>
  </>
);

interface BookTableProps {}

const BookTalble = ({}: BookTableProps) => {
  const [isClient, setIsClient] = useState(false);

  const {
    searchBookName,
    book,
    setSearchBookName,
    setBook,
    setTitle,
    setBody,
    setTags,
    setPostId,
    setThumbnail,
    setIsOpen,
  } = useBookStore();

  const { bookIsClose, setBookClose } = useModalStore();

  const resetPostData = () => {
    setTitle('');
    setBody('');
    setTags([]);
    setPostId('');
    setThumbnail('');
  };

  const handleAction = (hasBook: boolean) => {
    resetPostData();
    if (!book?.title && !hasBook) {
      toast.error('책을 선택해주세요.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error',
      });
    } else {
      setBookClose(!bookIsClose);

      setIsOpen();
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <main className="grid h-[calc(100vh-8rem)] w-full grid-rows-12 px-[2rem] mmd:h-[100vh] mmd:px-[1rem] mxs:px-[0.5rem]">
        <section className="row-span-1 flex w-full items-end pb-4 mxs:px-[0rem]">
          <BooksTableForm
            BookIsClose={bookIsClose}
            SetBookClose={setBookClose}
            searchBookName={searchBookName}
            setSearchBookName={setSearchBookName}
          />
        </section>
        <article className="row-span-10 overflow-y-scroll rounded-md border border-[#EDEFF5] scrollbar scrollbar-track-gray-100 scrollbar-thumb-dark-300 scrollbar-thumb-rounded-3xl scrollbar-w-2 dark:border-none dark:scrollbar-track-dark-400">
          <BookInfo bookName={searchBookName} />
        </article>

        <footer className="flex items-center justify-between pt-4 dark:text-[#e4e5e7] mmd:hidden">
          <div className="ml-2 flex">
            <BookDisplay book={book} onClearBook={setBook} isMobile={false} />
          </div>

          <div className="flex">
            <NavigationLinks
              onAction={handleAction}
              bookTitle={book?.title}
              isMobile={false}
            />
          </div>
        </footer>
      </main>

      <nav className="fxied bottom-0 w-full bg-dark-200 py-2 dark:bg-dark-500 md:hidden mmd:fixed mmd:bottom-0 mmd:px-[2rem] mmd:pr-[3rem] mxs:px-[0.5rem]">
        <div className="flex items-center justify-between">
          <div className="flex">
            <BookDisplay book={book} onClearBook={setBook} isMobile={true} />
          </div>

          <div className="flex justify-between">
            <NavigationLinks
              onAction={handleAction}
              bookTitle={book?.title}
              isMobile={true}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default BookTalble;
