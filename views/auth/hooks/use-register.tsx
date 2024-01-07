'use client';

import { useMutation } from '@apollo/client';
import { registerMutation, whoAmIQuery } from '@/lib/graphql/users';
import { useAuthStore } from '@/store/auth';
import useModalStore from '@/store/modal';
import { toast } from 'react-toastify';

export default function useRegister() {
  const { setAuthImg, setAuthName, setAuthBio, setAuthInfo } = useAuthStore();
  const { setClose } = useModalStore();

  const [signUp, { error: registerError }] = useMutation(registerMutation, {
    errorPolicy: 'all',
    onCompleted(signUp) {
      setAuthInfo(signUp?.register);
      setClose(false);
      const profile = signUp?.register?.profile;

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
    signUp,
    registerError,
  };
}
