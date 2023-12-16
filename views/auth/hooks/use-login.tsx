'use client';

import { useMutation } from '@apollo/client';
import { LoginMutation } from '@/types/apolloComponent';
import { loginMutation, whoAmIQuery } from '@/lib/graphql/users';
import { useAuthStore } from '@/store/auth';
import useModalStore from '@/store/modal';
import { toast } from 'react-toastify';

export default function useLogin() {
  const { setAuthImg, setAuthName, setAuthBio, setAuthInfo } = useAuthStore();
  const { setClose } = useModalStore();

  const [signIn, { error }] = useMutation(loginMutation, {
    errorPolicy: 'all',
    onCompleted(signIn) {
      setAuthInfo(signIn?.login);
      setClose(false);
      const profile = signIn?.login?.profile;

      setAuthImg(profile?.thumbnail || '');
      setAuthName(profile?.profile_name || '');
      setAuthBio(profile?.bio || '');

      toast.success('회원가입 완료!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    refetchQueries: [{ query: whoAmIQuery }],
  });

  return {
    signIn,
    error,
  };
}
