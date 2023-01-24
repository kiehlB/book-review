import React, {
  ReactNode,
  ReactElement,
  useMemo,
  useState,
  SetStateAction,
  useEffect,
} from 'react';

type Dispatch<A> = (value: A) => void;

export interface AuthContextData {
  isAuth: any;
  SetIsAuth: Dispatch<SetStateAction<any>>;
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
  const [isAuth, SetIsAuth] = useState(null);

  useEffect(
    () =>
      SetIsAuth(
        typeof window !== 'undefined' ? localStorage.getItem('CURRENT_USER') : null,
      ),
    [],
  );

  return (
    <AuthContext.Provider value={{ isAuth, SetIsAuth }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
