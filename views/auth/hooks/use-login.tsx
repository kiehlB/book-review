'use client';

import { useMutation } from '@apollo/client';
import { LoginMutation } from '@/types/apolloComponent';
import { loginMutation } from '@/lib/graphql/users';

export default function useLogin() {
  const [signIn, { error }] = useMutation<LoginMutation>(loginMutation, {
    errorPolicy: 'all',
  });

  return {
    signIn,
    error,
  };
}
