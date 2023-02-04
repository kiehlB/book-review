import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutMutation } from '../../../lib/graphql/users';
import { persistor } from '../../../pages/_app';
import { initAuth } from '../../../store/auth';
import { RootState } from '../../../store/rootReducer';

export default function useLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [logout] = useMutation(logoutMutation, {
    onCompleted({ logout }) {
      persistor.purge();
      dispatch(initAuth(''));
    },
  });

  const handleSubmitLogout = async e => {
    e.preventDefault();

    logout({});
  };

  return {
    handleSubmitLogout,
  };
}
