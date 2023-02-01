import { useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';

export default function useWhoAmI() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const [loading, { data: getUser, error }] = useLazyQuery(whoAmIQuery, {});

  const user = getUser?.whoami.id ? getUser?.whoami.id : undefined;

  useEffect(() => {
    if (user == undefined) return;

    dispatch(initAuth(user));
  }, [user, dispatch]);

  return {
    loading,
    error,
    getUser,
    auth,
    user,
  };
}
