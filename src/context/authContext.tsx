import React, { ReactNode, ReactElement, useMemo, useState, SetStateAction } from 'react';

type Dispatch<A> = (value: A) => void;

export interface AuthContextData {
  isAuth: string;
  SetIsAuth: Dispatch<SetStateAction<string>>;
}

const AuthContext = React.createContext<AuthContextData>({
  SetIsAuth: () => {},
  isAuth: '',
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): ReactElement => {
  const [isAuth, SetIsAuth] = useState('');

  return (
    <AuthContext.Provider value={{ isAuth, SetIsAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
