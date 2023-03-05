import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutMutation } from '../../../lib/graphql/users';
import { persistor } from '../../../pages/_app';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';
import { useLogoutMutation } from '../../../types/apolloComponent';

export default function useLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [logout, { client }] = useLogoutMutation();

  // const [logout] = useMutation(logoutMutation, {
  //   onCompleted({ logout }) {
  //     persistor.purge();
  //   },
  // });

  const handleSubmitLogout = async e => {
    e.preventDefault();
    await logout();

    await client.clearStore().then(() => {
      client.resetStore();
      persistor.purge();

      dispatch(getAuthInfoSuccess(null));
      // dispatch(userLogout());
      router.push('/');
    });
  };

  return {
    handleSubmitLogout,
  };
}
