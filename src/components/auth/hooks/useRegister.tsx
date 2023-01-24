import { useMutation } from '@apollo/client';
import { useInput } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import ModalContext from '../../../context/modalContext';
import useForms from '../../../hooks/useForm';
import { registerMutation } from '../../../lib/graphql/users';
import useWhoAmI from './useWhoami';

export default function useRegister() {
  const router = useRouter();
  const { value: email, reset: emailReset, bindings: EB } = useInput('');
  const { value: password, reset: passwordReset, bindings: PB } = useInput('');
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);
  const { loading } = useWhoAmI();

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

  const [signUp, { error: registerError }] = useMutation(registerMutation, {
    onCompleted({ signUp }) {
      SetIsClose(false);
      loading();
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();
    signUp({
      variables: {
        email,
        password,
      },
    });
  };

  return {
    email,
    password,
    signUp,
    handleSubmit,
    registerError,
    EB,
    PB,
    helper,
    Passwordhelper,
  };
}
