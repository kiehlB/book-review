import request from 'graphql-request';
import React, { ReactNode, ReactElement, useMemo, useState, SetStateAction } from 'react';

type Dispatch<A> = (value: A) => void;

export interface ModalContextData {
  IsClose: boolean;
  SetIsClose: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = React.createContext<ModalContextData>({
  IsClose: false,
  SetIsClose: () => {},
});

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps): ReactElement => {
  const [IsClose, SetIsClose] = useState(false);

  return (
    <ModalContext.Provider value={{ IsClose, SetIsClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
