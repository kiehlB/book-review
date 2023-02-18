import { useMutation } from '@apollo/client';
import { useInput } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import ModalContext from '../../../context/modalContext';
import useForms from '../../../hooks/useForm';
import { loginMutation, registerMutation } from '../../../lib/graphql/users';
import { initAuth } from '../../../store/auth';
import { inputProps } from '../AuthForm';
import useWhoAmI from './useWhoami';
import { toast } from 'react-toastify';

export default function useLogin() {
  const router = useRouter();
  const [inputs, handleChange] = useForms({
    username: '',
    password: '',
  } as inputProps);
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);
  const { loading, user } = useWhoAmI();
  const dispatch = useDispatch();

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
      SetIsClose(false);
      loading();
      dispatch(initAuth(user));
      toast.success('로그인 완료!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      inputs.username = '';
      inputs.password = '';
    },
  });

  const Submit = async e => {
    e.preventDefault();
    signIn({
      variables: {
        username: inputs.username,
        password: inputs.password,
      },
    });
  };

  const handleSubmit = useDebouncedCallback(Submit, 200);

  return {
    username: inputs.username,
    password: inputs.password,
    signIn,
    handleSubmit,
    LoginError,
    handleChange,
    Passwordhelper,
    Usernamehelper,
    SetMode,
  };
}
