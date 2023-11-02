'use client';

import React, { ReactNode, ReactElement } from 'react';

interface BookAction {
  type: 'ADD_Book';
  BookName: string;
  BookData: any;
}

const BookContext = React.createContext({
  cache: null,
  dispatch: null,
});

interface BooksContextProviderProps {
  children: ReactNode;
}

function BookCacheReducer(state: any, action: BookAction) {
  switch (action.type) {
    case 'ADD_Book': {
      return { ...state, [action.BookName]: action.BookData };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const BooksContextProvider = ({
  children,
}: BooksContextProviderProps): ReactElement => {
  const [cache, dispatch] = React.useReducer(BookCacheReducer, {});

  return (
    <BookContext.Provider value={[cache, dispatch] as any}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
