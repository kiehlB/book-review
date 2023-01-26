import React, {
  ReactNode,
  ReactElement,
  useMemo,
  useState,
  SetStateAction,
  useEffect,
} from 'react';

const BooksContext = React.createContext({
  cache: null,
  dispatch: null,
});

interface BooksContextProviderProps {
  children: ReactNode;
}

function BookCacheReducer(state, action) {
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
    <BooksContext.Provider value={[cache, dispatch] as any}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
