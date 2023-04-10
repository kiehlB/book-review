import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { persistor } from '../../../pages/_app';
import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { LogoutMutation, useLogoutMutation } from '../../../types/apolloComponent';

export default function useLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [logout, { client }] = useLogoutMutation();

  const handleSubmitLogout = async e => {
    e.preventDefault();
    await logout();

    await client.clearStore().then(() => {
      client.resetStore();
      persistor.purge();

      dispatch(getAuthInfoSuccess(null));

      router.push('/');
    });
  };

  return {
    handleSubmitLogout,
  };
}
