import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import BooksTableContainer from './TableContainer';

interface BookTalbleProps {}

function useSafeDispatch(dispatch) {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return React.useCallback(
    (...args) => (mountedRef.current ? dispatch(...args) : void 0),
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

  return {
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
        Authorization: `KakaoAK ecd3dff4c7ec63086a758f1408180a29`,
      },
    })
    .then(res => {
      return res.data.documents;
    })
    .catch(err => {
      throw new Error(err);
    });
};

function BooksInfo(booksName) {
  const {
    data: books,
    status,
    error,
    run,
  } = useAsync({
    status: booksName ? 'pending' : 'idle',
  });

  React.useEffect(() => {
    if (!booksName) {
      return;
    }
    run(bookApi(booksName));
  }, [booksName, run]);

  switch (status) {
    case 'idle':
      return <span>Submit a books</span>;
    case 'pending':
      return <div>pen</div>;
    case 'rejected':
      throw error;
    case 'resolved':
      return (
        <BooksTableContainer
          autoFocus={true}
          disabled={false}
          isLoading={false}
          data={books}
        />
      );
    default:
      throw new Error('다시 시도해주세요!');
  }
}

const BookTalble = ({}) => {
  const [booksName, setBooksName] = useState('');
  const [data, setData] = useState([]);

  return (
    <>
      <BooksInfo booksName="파인만" />
    </>
  );
};

export default BookTalble;

//  isLoading={!isInitialized}

//View.Body className="h-5/6 p-4"
