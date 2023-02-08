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
    username: '',
    password: '',
  } as inputProps);

  const validateUsername = value => {
    return value.match(/^[a-z0-9]{5,20}$/);
  };

  const validatePassword = value => {
    return value.length > 5;
  };

  const Passwordhelper = React.useMemo(() => {
    if (!inputs.password)
      return {
        text: '',
        color: '',
        state: 'idle',
      };
    const isValid = validatePassword(inputs.password);
    return {
      text: isValid ? 'Correct password' : '5자리 이상 입력해주세요.',
      color: isValid ? 'success' : 'error',
      state: inputs.password ? 'on' : 'idle',
    };
  }, [inputs.password]);

  const Usernamehelper = React.useMemo(() => {
    if (!inputs.username)
      return {
        text: '',
        color: '',
        state: 'idle',
      };
    const isValid = validateUsername(inputs.username);
    return {
      text: isValid
        ? 'Correct username'
        : '5~20자 사이의 영문 소문자 또는 숫자를 입력해주세요.',
      color: isValid ? 'success' : 'error',
      state: inputs.username ? 'on' : 'idle',
    };
  }, [inputs.username]) as any;

  const [signIn, { error: LoginError }] = useMutation(loginMutation, {
    onCompleted({ signUp }) {
      inputs.username = '';
      inputs.password = '';
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();
    signIn({
      variables: {
        username: inputs.username,
        password: inputs.password,
      },
    });
  };

  return {
    username: inputs.username,
    password: inputs.password,
    signIn,
    handleSubmit,
    LoginError,
    handleChange,
    Passwordhelper,
    Usernamehelper,
  };
}
