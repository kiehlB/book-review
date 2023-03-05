import { useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';
import { useWhoAmIQuery, WhoAmIQuery } from '../../../types/apolloComponent';

export default function useGetUser() {
  const dispatch = useDispatch();

  const { data: getUser, loading } = useQuery(whoAmIQuery, {});

  return {
    getUser,
    loading,
  };
}
