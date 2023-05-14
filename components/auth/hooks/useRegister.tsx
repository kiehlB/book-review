'use client';

import { useMutation } from '@apollo/client';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import ModalContext from '@/context/modal-context';
import useForms from '@/hooks/useForm';
import { inputProps } from '../auth-form';
import { RegisterMutation } from '@/types/apolloComponent';
import { registerMutation } from '@/lib/graphql/users';
import {
  getAuthBioSuccess,
  getAuthImgSuccess,
  getAuthNameSuccess,
  initAuth,
} from '@/store/auth';
import { useRouter } from 'next/navigation';

export default function useRegister() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);

  const [inputs, handleChange] = useForms({
    username: '',
    password: '',
  } as inputProps);

  const validateUsername = (value: string) => {
    return value.match(/^[a-z0-9]{5,20}$/);
  };

  const validatePassword = (value: string) => {
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
  }, [inputs.password]) as any;

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

  const [signUp, { error: registerError }] = useMutation<RegisterMutation>(
    registerMutation,
    {
      onCompleted(signUp) {
        SetIsClose(false);

        dispatch(
          getAuthImgSuccess(
            signUp?.register?.profile?.thumbnail
              ? signUp?.register?.profile?.thumbnail
              : '',
          ),
        );
        dispatch(
          getAuthNameSuccess(
            signUp?.register?.profile?.profile_name
              ? signUp.register?.profile?.profile_name
              : '',
          ),
        );
        dispatch(
          getAuthBioSuccess(
            signUp?.register?.profile?.bio ? signUp?.register?.profile?.bio : '',
          ),
        );
        dispatch(initAuth(signUp?.register) as any);
        toast.success('회원가입 완료!', {
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
        router.push('/');
      },
    },
  );

  const Submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signUp({
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
    signUp,
    handleSubmit,
    registerError,
    handleChange,
    Passwordhelper,
    Usernamehelper,
    SetMode,
  };
}
