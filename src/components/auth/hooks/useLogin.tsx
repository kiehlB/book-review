import { useMutation } from '@apollo/client';
import { useInput } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';
import useForms from '../../../hooks/useForm';
import { loginMutation, registerMutation } from '../../../lib/graphql/users';

export default function useLogin() {
  const router = useRouter();
  const { value: email, reset: emailReset, bindings: EB } = useInput('');
  const { value: password, reset: passwordReset, bindings: PB } = useInput('');

  const validateEmail = value => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const validatePassword = value => {
    return value.length > 5;
  };

  const Passwordhelper = React.useMemo(() => {
    if (!password)
      return {
        text: '',
        color: '',
      };
    const isValid = validatePassword(password);
    return {
      text: isValid ? 'Correct password' : 'Enter a valid password',
      color: isValid ? 'success' : 'error',
    };
  }, [password]) as any;

  const helper = React.useMemo(() => {
    if (!email)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(email);
    return {
      text: isValid ? 'Correct email' : 'Enter a valid email',
      color: isValid ? 'success' : 'error',
    };
  }, [email]) as any;

  const [signIn, { error: LoginError }] = useMutation(loginMutation, {
    onCompleted({ signUp }) {},
  });

  const handleSubmit = async e => {
    e.preventDefault();
    signIn({
      variables: {
        email,
        password,
      },
    });
  };

  return {
    email,
    password,
    signIn,
    handleSubmit,
    LoginError,
    EB,
    PB,
    helper,
    Passwordhelper,
  };
}
