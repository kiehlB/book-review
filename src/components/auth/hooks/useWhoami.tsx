import { useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';
import { useWhoAmIQuery, WhoAmIQuery } from '../../../types/apolloComponent';

export default function useWhoAmI() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { data: getUser, loading } = useQuery(whoAmIQuery, {});

  useEffect(() => {
    console.log('ddd');
    dispatch(initAuth(getUser?.whoami));
  }, [loading]);

  return {
    getUser,
  };
}
