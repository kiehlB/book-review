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
      };
    const isValid = validatePassword(inputs.password);
    return {
      text: isValid ? 'Correct password' : '5자리 이상 입력해주세요.',
      color: isValid ? 'success' : 'error',
    };
  }, [inputs.password]) as any;

  const Emailhelper = React.useMemo(() => {
    if (!inputs.email)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(inputs.email);
    return {
      text: isValid
        ? 'Correct email'
        : '5~20자 사이의 영문 소문자 또는 숫자를 입력해주세요.',
      color: isValid ? 'success' : 'error',
    };
  }, [inputs.email]) as any;

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
    handleChange,
    Passwordhelper,
    Emailhelper,
  };
}
