import { useDispatch, useSelector } from 'react-redux';

import { getAuthInfoSuccess, initAuth } from '../../../store/auth';
import { LogoutMutation, useLogoutMutation } from '../../../types/apolloComponent';
import { persistor } from '@/store/provider';

export default function useLogout() {
  const dispatch = useDispatch();

  const [logout, { client }] = useLogoutMutation();

  const handleSubmitLogout = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await logout();

    await client.clearStore().then(() => {
      client.resetStore();
      persistor.purge();

      dispatch(getAuthInfoSuccess(null));
    });
  };

  return {
    handleSubmitLogout,
  };
}
