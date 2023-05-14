'use client';

import React, {
  ReactNode,
  ReactElement,
  useState,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

type Dispatch<A> = (value: A) => void;

export interface AuthContextData {
  inputRefs: any;
  isAuth: any;
  SetIsAuth: Dispatch<SetStateAction<any>>;
}

const AuthContext = React.createContext<AuthContextData>({
  inputRefs: {},
  SetIsAuth: () => {},
  isAuth: '',
});

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProviderProps): ReactElement => {
  const [isAuth, SetIsAuth] = useState<string | null>(null);
  const inputRefs = useRef({});

  useEffect(
    () =>
      SetIsAuth(
        typeof window !== 'undefined' ? localStorage.getItem('CURRENT_USER') : null,
      ),
    [],
  );

  return (
    <AuthContext.Provider value={{ isAuth, SetIsAuth, inputRefs }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
