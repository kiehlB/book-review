import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';
import Link from 'next/link';
import { Input, useInput, Grid } from '@nextui-org/react';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useDarkMode from '../base/useDarkmode';

export interface inputProps {
  password: string | number | readonly string[];
  email: string | number | readonly string[];
}

export declare type BindingsChangeTarget =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

export interface AuthFormProps {
  email?: string;
  password?: string;
  EB: {
    value: string;
    onChange: (event: BindingsChangeTarget) => void;
  };
  PB: {
    value: string;
    onChange: (event: BindingsChangeTarget) => void;
  };
  helper: {
    color: 'error' | 'default' | 'primary' | 'secondary' | 'success' | 'warning';
    text: 'error' | 'default' | 'primary' | 'secondary' | 'success' | 'warning';
  };
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
  Passwordhelper: {
    color: 'error' | 'default' | 'primary' | 'secondary' | 'success' | 'warning';
    text: 'error' | 'default' | 'primary' | 'secondary' | 'success' | 'warning';
  };
  mode: string;
  error: ApolloError;
}

const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  authError,
  auth,
  EB,
  PB,
  helper,
  Passwordhelper,
  mode,
  error,
  email,
  password,
}) => {
  const onClick = () => {
    toast.error('아이디와 비밀번호가 비었습니다!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,

      type: 'error',
    });
  };

  React.useEffect(() => {
    const isUserInputError = error?.graphQLErrors?.map(e => e.message);
    if (error) {
      toast.error(
        isUserInputError.length > 0 ? isUserInputError[0] : '서버에 문제가 생겼습니다',
        {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

          type: 'error',
        },
      );
    }
  }, [error]);

  //  labelPlaceholder="Email"
  return (
    <>
      <div className="px-[6.46875rem] py-[1.5rem] mmd:px-[2rem]">
        <InputPlaceHolder className="flex items-center">
          <Input
            {...EB}
            clearable
            status={helper?.color}
            color={helper?.color}
            helperColor={helper?.color}
            helperText={helper?.text}
            width="100%"
            className="w-full"
            type="email"
            placeholder="Email"
          />
        </InputPlaceHolder>
        <InputPlaceHolder className="flex items-center mt-12">
          <Input.Password
            {...PB}
            clearable
            status={Passwordhelper?.color}
            color={Passwordhelper?.color}
            helperColor={Passwordhelper?.color}
            helperText={Passwordhelper?.text}
            className="w-full"
            type="password"
            placeholder="Password"
            width="100%"
          />
        </InputPlaceHolder>

        <motion.button
          onClick={(e: any) => {
            helper.color == 'success' && Passwordhelper.color == 'success'
              ? handleSubmit(e)
              : null;
            !email && !password ? onClick() : '';
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="flex bg-[#fcd435] text-[#212529] mt-12 h-12 justify-center items-center tracking-widest w-full rounded-xl">
          {auth}
        </motion.button>
      </div>
      <div className="px-[6rem]">
        {/* {mode == 'register' ? '회원가입' : '로그인'}으로 이동 */}
      </div>

      <div className="flex my-4 items-center justify-between px-1">
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
        <div className="text-[#707a8a] font-Roboto">Or</div>
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
      </div>

      <div className="flex justify-between w-[50%] mx-auto pt-3">
        <Google />
        <FaceBook />
      </div>
    </>
  );
};

export default React.memo(AuthForm);

const InputPlaceHolder = styled.div`
  .nextui-c-hzQjrs {
  }
`;
