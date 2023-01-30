import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BooksTableContainer from './TableContainer';
import BooksContext from '../../context/booksContext';
import { SearchInput } from 'evergreen-ui';
import { ArrowLink } from '../common/ArrowButton';

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
    <form onSubmit={handleSubmit} className="Book-form">
      <div>
        <SearchInput
          onChange={handleChange}
          value={BookName}
          placeholder="책을 검색해보세요"
          name="BookName"
          height={50}
          style={{ borderRadius: '1.5rem', width: '300px' }}
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

  function handleSubmit(booksName) {
    setBookName(booksName);
  }

  return (
    <>
      <div className="grid grid-rows-12 px-[2rem] h-[calc(100vh-8rem)] mmd:px-[1rem] w-full">
        <div className="flex items-end row-span-1 pb-4">
          <BooksTableForm BookName={bookName} onSubmit={handleSubmit} />
        </div>
        <div className="row-span-10 overflow-y-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-w-2 scrollbar-thumb-rounded-3xl border rounded-md border-[#EDEFF5]">
          <BookInfo bookName={bookName} />
        </div>
        <div className="flex justify-end pr-4 mt-4">
          <ArrowLink href={'/write'} direction="right" className="mr-8" textSize="small">
            Skip
          </ArrowLink>
          <ArrowLink
            href={'/write'}
            direction="right"
            className="font-semibold"
            textSize="small">
            다음
          </ArrowLink>
        </div>
      </div>
    </>
  );
};

export default BookTalble;
