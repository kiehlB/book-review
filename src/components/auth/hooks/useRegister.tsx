import { useMutation } from '@apollo/client';
import { useInput } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import ModalContext from '../../../context/modalContext';
import useForms from '../../../hooks/useForm';
import { registerMutation } from '../../../lib/graphql/users';
import useWhoAmI from './useWhoami';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { initAuth } from '../../../store/auth';
import { inputProps } from '../AuthForm';

export default function useRegister() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);
  const { loading, user } = useWhoAmI();

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

  const [signUp, { error: registerError }] = useMutation(registerMutation, {
    onCompleted({ signUp }) {
      SetIsClose(false);
      loading();
      dispatch(initAuth(user));
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
  });

  const handleSubmit = async e => {
    e.preventDefault();

    signUp({
      variables: {
        email: inputs.email,
        password: inputs.password,
      },
    });
  };

  return {
    email: inputs.email,
    password: inputs.password,
    signUp,
    handleSubmit,
    registerError,
    handleChange,
    Passwordhelper,
    Emailhelper,
  };
}
