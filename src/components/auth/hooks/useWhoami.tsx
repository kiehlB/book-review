import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';
import { useWhoAmIQuery, WhoAmIQuery } from '../../../types/apolloComponent';

export default function useWhoAmI() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { data: getUser, loading } = useQuery<WhoAmIQuery>(whoAmIQuery, {
    skip: !!auth?.id,
  });

  useEffect(() => {
    if (auth?.id) return;
    if (loading || !getUser) return;

    dispatch(initAuth(getUser.whoami));
  }, [getUser, auth?.id]);

  return {
    getUser,
  };
}
