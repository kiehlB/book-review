import React, { ReactNode, ReactElement, useMemo, useState, SetStateAction } from 'react';

type Dispatch<A> = (value: A) => void;

export interface ModalContextData {
  IsClose: boolean;
  SetIsClose: Dispatch<SetStateAction<boolean>>;
  BookIsClose: boolean;
  SetBokkIsClose: Dispatch<SetStateAction<boolean>>;
  mode: string;
  SetMode: Dispatch<SetStateAction<string>>;
}

const ModalContext = React.createContext<ModalContextData>({
  IsClose: false,
  SetIsClose: () => {},
  BookIsClose: false,
  SetBokkIsClose: () => {},
  SetMode: () => {},
  mode: '',
});

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps): ReactElement => {
  const [IsClose, SetIsClose] = useState(false);
  const [BookIsClose, SetBokkIsClose] = useState(false);
  const [mode, SetMode] = useState('');

  return (
    <ModalContext.Provider
      value={{ IsClose, SetIsClose, mode, SetMode, BookIsClose, SetBokkIsClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
