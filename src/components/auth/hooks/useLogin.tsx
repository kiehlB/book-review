import { useMutation } from '@apollo/client';
import { useInput } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
import useForms from '../../../hooks/useForm';
import { loginMutation, registerMutation } from '../../../lib/graphql/users';
import { inputProps } from '../AuthForm';

export default function useLogin() {
  const router = useRouter();
  const [inputs, handleChange] = useForms({
    email: '',
    password: '',
  } as inputProps);

  const validateEmail = value => {
    return value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    );
  };

  const validatePassword = value => {
    return value.length > 5;
  };

  const [signIn, { error: LoginError }] = useMutation(loginMutation, {
    onCompleted({ signUp }) {},
  });

  const handleSubmit = async e => {
    e.preventDefault();
    signIn({
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
    });
  };

  return {
    email: inputs.email,
    password: inputs.password,
    signIn,
    handleSubmit,
    LoginError,
  };
}
