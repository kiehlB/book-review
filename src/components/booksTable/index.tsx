import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BooksTableContainer from './TableContainer';
import BooksContext from '../../context/booksContext';
import { SearchInput } from 'evergreen-ui';
import { ArrowLink, BackLink, NextLink } from '../common/ArrowButton';
import { RootState } from '../../store/rootReducer';
import { MdClose } from 'react-icons/md';
import {
  getBookInfoSuccess,
  getPostBody,
  getPostId,
  getPostTags,
  getPostTitle,
} from '../../store/book';
import { toast } from 'react-toastify';
import { IoSearchOutline } from 'react-icons/io5';
import ModalContext from '../../context/modalContext';

interface BookTalbleProps {}

enum HistoryTableSortOrder {
  DurationAscending = 'DURATION_ASCENDING',
  DurationDescending = 'DURATION_DESCENDING',
  TimeAscending = 'TIME_ASCENDING',
  TimeDescending = 'TIME_DESCENDING',
}

function BooksTableForm({
  BookName: externalBookName,
  initialBookName = externalBookName || '',
  onSubmit,
}) {
  const [BookName, setBookName] = React.useState(initialBookName);

  React.useEffect(() => {
    if (typeof externalBookName === 'string') {
      setBookName(externalBookName);
    }
  }, [externalBookName]);

  function handleChange(e) {
    setBookName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(BookName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)] dark:text-[#e4e5e7]">
          <IoSearchOutline />
        </div>
        <input
          onChange={handleChange}
          value={BookName}
          placeholder="책을 검색해보세요"
          name="BookName"
          className=" text-xs border-[#d8dae5] text-[#474d66] w-[310px] rounded-full h-[50px] border-[1px] py-[0.5rem] px-[2.5rem] focus:outline-none dark:bg-[#2b2d31] dark:border-[#1a1b1e] dark:text-[#e4e5e7] dark:placeholder-gray-300"
          style={{ borderRadius: '1.5rem', fontSize: '12px' }}
        />
      </div>
    </form>
  );
}

function useBookCache() {
  const context = React.useContext(BooksContext);
  if (!context) {
    throw new Error('useBookCache must be used within a BookCacheProvider');
  }
  return context;
}

function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  );
}

function asyncReducer(state, action) {
  switch (action.type) {
    case 'pending': {
      return { status: 'pending', data: null, error: null };
    }
    case 'resolved': {
      return { status: 'resolved', data: action.data, error: null };
    }
    case 'rejected': {
      return { status: 'rejected', data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useAsync(initialState) {
  const [state, unsafeDispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch);

  const { data, error, status } = state;

  const run = React.useCallback(
    promise => {
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
    data => dispatch({ type: 'resolved', data }),
    [dispatch],
  );
  const setError = React.useCallback(
    error => dispatch({ type: 'rejected', error }),
    [dispatch],
  );

  return {
    setData,
    setError,
    error,
    status,
    data,
    run,
  };
}

export const bookApi = title => {
  return axios
    .request({
      method: 'get',
      url: `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=50&sort=accuracy`,
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO}`,
      },
    })
    .then(res => {
      return res.data.documents;
    })
    .catch(err => {
      throw new Error(err);
    });
};

function BookInfo({ bookName }): any {
  const [cache, dispatch]: any = useBookCache();

  const BookName = bookName?.toLowerCase();
  const {
    data: Book,
    status,
    error,
    run,
    setData,
  } = useAsync({
    status: BookName ? 'pending' : 'idle',
  });

  React.useEffect(() => {
    if (!BookName) {
      return;
    } else if (cache[BookName]) {
      setData(cache[BookName]);
    } else {
      run(
        bookApi(bookName).then(BookData => {
          dispatch({ type: 'ADD_Book', BookName, BookData });
          return BookData;
        }),
      );
    }
  }, [cache, dispatch, BookName, run, setData]);

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

const BookTalble = ({}) => {
  const [bookName, setBookName] = useState('');
  const { BookIsClose, SetBookIsClose } = React.useContext(ModalContext);
  const { book } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();

  function handleSubmit(booksName) {
    setBookName(booksName);
  }

  const withoutBookInfo = () => {
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
  };

  return (
    <>
      <div className="grid grid-rows-12 px-[2rem] h-[calc(100vh-8rem)] mmd:h-[100vh] mmd:px-[1rem] w-full mxs:px-[0.5rem]">
        <div className="flex items-end row-span-1 pb-4 mxs:px-[0rem]">
          <BooksTableForm BookName={bookName} onSubmit={handleSubmit} />
        </div>
        <div className="row-span-10 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 scrollbar-thumb-rounded-3xl border rounded-md border-[#EDEFF5] dark:border-none">
          <BookInfo bookName={bookName} />
        </div>

        <div className="flex justify-between dark:text-[#e4e5e7] pt-4 mmd:hidden items-center">
          <div className="flex ml-2">
            {book?.thumbnail ? (
              <img src={book?.thumbnail} width="45px" height="70px" />
            ) : (
              ''
            )}

            <div className="ml-2">{book?.title ? book?.title : ''}</div>
            {book?.title ? (
              <MdClose
                onClick={() => dispatch(getBookInfoSuccess(''))}
                tabIndex={1}
                size={20}
                color="#f31260"
                className="ml-1 hover:bg-[#cfd2e2] transition-all rounded-full hover:p-1"
              />
            ) : (
              ''
            )}
          </div>
          <div className="flex">
            <div
              onClick={() => {
                dispatch(getPostTitle(''));
                dispatch(getPostBody(''));
                dispatch(getPostTags(''));
                dispatch(getPostId(''));
                SetBookIsClose(!BookIsClose);
              }}>
              <ArrowLink
                href={'/write'}
                direction="right"
                className="mr-8"
                textSize="small">
                Skip
              </ArrowLink>
            </div>

            <div
              onClick={() => {
                dispatch(getPostTitle(''));
                dispatch(getPostBody(''));
                dispatch(getPostTags(''));
                dispatch(getPostId(''));
                book?.title ? SetBookIsClose(!BookIsClose) : '';
                book?.title ? '' : withoutBookInfo();
              }}>
              <ArrowLink
                href={book?.title ? '/write' : ''}
                direction="right"
                className=""
                textSize="small">
                다음
              </ArrowLink>
            </div>
          </div>
        </div>
      </div>

      <div className="fxied bottom-0 bg-[#e9e9e9] py-2 mmd:fixed mmd:bottom-0 w-full mmd:px-[2rem] md:hidden mxs:px-[0.5rem]">
        <div className="flex justify-between">
          <div className="flex">
            {book?.thumbnail ? (
              <img
                src={book?.thumbnail}
                width="45px"
                height="60px"
                className="mxs:hidden"
              />
            ) : (
              ''
            )}
            <div className="ml-2 text-sm truncate max-w-[100px] w-full">
              {book?.title ? book?.title : ''}
            </div>
            {book?.title ? (
              <MdClose
                onClick={() => dispatch(getBookInfoSuccess(''))}
                tabIndex={1}
                size={20}
                color="#f31260"
                className="ml-1 hover:bg-[#cfd2e2] transition-all rounded-full hover:p-1"
              />
            ) : (
              ''
            )}
          </div>

          <div className="flex items-center">
            <NextLink
              className=""
              click={() => {
                dispatch(getPostTitle(''));
                dispatch(getPostBody(''));
                dispatch(getPostTags(''));
                dispatch(getPostId(''));
                SetBookIsClose(!BookIsClose);
              }}
              href="/write">
              <div className="text-[#334155] text-base flex items-center justify-between font-semibold mr-2">
                Skip
              </div>
            </NextLink>

            <NextLink
              click={() => {
                dispatch(getPostTitle(''));
                dispatch(getPostBody(''));
                dispatch(getPostTags(''));
                dispatch(getPostId(''));
                book?.title ? SetBookIsClose(!BookIsClose) : '';
                book?.title ? '' : withoutBookInfo();
              }}
              href={book?.title ? '/write' : ''}>
              <div className="text-[#334155] text-base flex items-center justify-between font-semibold pl-6 mxs:pl-2 mr-2">
                다음
              </div>
            </NextLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTalble;
