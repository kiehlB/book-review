'use client';

import React, {
  ReactNode,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface CursorContextType {
  cursor: any;
  setCursor: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<null>> | null;
}

const CursorContext = React.createContext<CursorContextType>({
  cursor: null,
  setCursor: () => {},
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
