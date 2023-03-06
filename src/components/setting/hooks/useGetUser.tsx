import { useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect, useLayoutEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { WhoAmIQuery } from '../../../types/apolloComponent';
export default function useGetUser() {
  const dispatch = useDispatch();

  const { data: getUser, loading } = useQuery<WhoAmIQuery>(whoAmIQuery, {});

  return {
    getUser,
    loading,
  };
}
