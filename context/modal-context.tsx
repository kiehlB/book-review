'use client';

import React, { ReactNode, ReactElement, useMemo, useState, SetStateAction } from 'react';

type Dispatch<A> = (value: A) => void;

export interface ModalContextData {
  IsClose: boolean;
  SetIsClose: Dispatch<SetStateAction<boolean>>;
  BookIsClose: boolean;
  SetBookIsClose: Dispatch<SetStateAction<boolean>>;
  mode: string;
  SetMode: Dispatch<SetStateAction<string>>;
  PublishClose: boolean;
  SetPublishClose: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextData>({
  IsClose: false,
  SetIsClose: () => {},
  BookIsClose: false,
  SetBookIsClose: () => {},
  SetMode: () => {},
  mode: '',
  PublishClose: false,
  SetPublishClose: () => {},
});

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps): ReactElement => {
  const [IsClose, SetIsClose] = useState(false);
  const [BookIsClose, SetBookIsClose] = useState(false);
  const [PublishClose, SetPublishClose] = useState(false);
  const [mode, SetMode] = useState('');

  return (
    <ModalContext.Provider
      value={{
        IsClose,
        SetIsClose,
        mode,
        SetMode,
        BookIsClose,
        SetBookIsClose,
        PublishClose,
        SetPublishClose,
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
