import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext';
import { whoAmIQuery } from '../../../lib/graphql/users';

export default function useWhoAmI() {
  const { data: getUser, loading, error } = useQuery(whoAmIQuery);
  const { isAuth, SetIsAuth } = useContext(AuthContext);

  const user = getUser?.whoami.id ? getUser?.whoami.id : undefined;

  //   useEffect(() => {
  //     if (user == undefined) return;

  //     if (isAuth !== user) {
  //       localStorage.setItem('CURRENT_USER', user);
  //       SetIsAuth(user);
  //     }
  //   }, [user]);

  return {
    loading,
    error,
    getUser,
    isAuth,
    user,
  };
}
