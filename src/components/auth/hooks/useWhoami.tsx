import { useLazyQuery, useQuery } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { whoAmIQuery } from '../../../lib/graphql/users';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';
import { useWhoAmIQuery } from '../../../types/apolloComponent';

export default function useWhoAmI() {
  const dispatch = useDispatch();

  // const [loading, { data: getUser, error }] = useLazyQuery(whoAmIQuery, {});
  const { data: getUser } = useQuery(whoAmIQuery);

  // useEffect(() => {
  //   if (getUser?.whoami?.id) {
  //     console.log('dasdas');
  //     dispatch(initAuth(getUser?.whoami));
  //   }
  // }, [dispatch, getUser]);

  return {
    getUser,
  };
}
