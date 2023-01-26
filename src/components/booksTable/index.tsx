import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BooksTableContainer from './TableContainer';
import BooksContext from '../../context/booksContext';
import { SearchInput } from 'evergreen-ui';

interface BookTalbleProps {}

enum HistoryTableSortOrder {
  DurationAscending = 'DURATION_ASCENDING',
  DurationDescending = 'DURATION_DESCENDING',
  TimeAscending = 'TIME_ASCENDING',
  TimeDescending = 'TIME_DESCENDING',
}

const SORT_OPTIONS = [
  {
    buttonLabel: 'Sorted by 정확도순 (Descending)',
    optionLabel: 'Sorted by 정확도순',
    optionSublabel: 'Descending',
    value: '정확도순_DESCENDING' as HistoryTableSortOrder,
    sort: 'accuracy',
  },
  {
    buttonLabel: 'Sorted 발간일순 (Ascending)',
    optionLabel: 'Sorted 발간일순',
    optionSublabel: 'Ascending',
    value: 'TIME_ASCENDING' as HistoryTableSortOrder,
    sort: 'latest',
  },
  {
    buttonLabel: 'Sorted 기본값 (Descending)',
    optionLabel: 'Sorted 기본값',
    optionSublabel: 'Descending',
    value: 'TIME_DESCENDING' as HistoryTableSortOrder,
    sort: 'accuracy',
  },
];

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
      <div className="py-2">
        <SearchInput
          onChange={handleChange}
          value={BookName}
          placeholder="책을 검색해보세요"
          name="BookName"
          width={'320px'}
          height={50}
          style={{ borderRadius: '1.5rem' }}
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
      url: `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=50`,
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

  if (status === 'idle') {
    return (
      <BooksTableContainer
        autoFocus={true}
        disabled={false}
        isLoading={false}
        data={Book}
      />
    );
  } else if (status === 'pending') {
    return <div>pending</div>;
  } else if (status === 'rejected') {
    throw error;
  } else if (status === 'resolved') {
    return (
      <BooksTableContainer
        autoFocus={true}
        disabled={false}
        isLoading={false}
        data={Book}
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
    <div className="px-[2rem]">
      <BooksTableForm BookName={bookName} onSubmit={handleSubmit} />
      <BookInfo bookName={bookName} />
    </div>
  );
};

export default BookTalble;
