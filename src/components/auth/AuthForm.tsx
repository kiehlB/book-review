import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';
import Link from 'next/link';
import { Input, useInput, Grid } from '@nextui-org/react';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';
import useWhoAmI from './hooks/useWhoami';
import { toast } from 'react-toastify';

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
  error: any;
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
  console.log(error);
  const onClick = () =>
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
  return (
    <>
      {error?.graphQLErrors.map(({ message }, i) => (
        <div key={i} className=" ">
          <span>{message}</span>
        </div>
      ))}
      {error ? <div>에러발생</div> : ''}
      <div className="px-[6.46875rem] py-[1.5rem] mmd:px-[2rem]">
        <div className="flex items-center">
          <Input
            {...EB}
            clearable
            status={helper?.color}
            color={helper?.color}
            helperColor={helper?.color}
            helperText={helper?.text}
            width="100%"
            label="Email"
            className="w-full"
            type="email"
            labelPlaceholder="Email"
          />
        </div>
        <div className="flex items-center mt-12">
          <Input.Password
            {...PB}
            clearable
            status={Passwordhelper?.color}
            color={Passwordhelper?.color}
            helperColor={Passwordhelper?.color}
            helperText={Passwordhelper?.text}
            label="Password"
            className="w-full"
            type="password"
            labelPlaceholder="Password"
            width="100%"
          />
        </div>

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
