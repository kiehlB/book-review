'use client';

import React, { ReactNode, ReactElement, useState } from 'react';

const CursorContext = React.createContext({
  cursor: null,
  setCursor: null,
});

interface CursorContextProviderProps {
  children: ReactNode;
}

export const CursorContextProvider = ({
  children,
}: CursorContextProviderProps): ReactElement => {
  const [cursor, setCursor] = useState(null);

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContext;
