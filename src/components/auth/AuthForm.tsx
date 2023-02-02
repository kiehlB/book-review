import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';

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
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
  mode: string;
  error: ApolloError;
  Passwordhelper;
  Emailhelper;
}

const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  authError,
  auth,
  mode,
  error,
  email,
  password,
  handleChange,
  Passwordhelper,
  Emailhelper,
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

  const EmailState = () => {
    if (email == '') {
      return '';
    } else if (Emailhelper.color == 'error') {
      return Emailhelper.text;
    } else {
      return Emailhelper.text;
    }
  };

  const PasswordState = () => {
    if (password == '') {
      return '';
    } else if (Passwordhelper.color == 'error') {
      return Passwordhelper.text;
    } else {
      return Passwordhelper.text;
    }
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

  return (
    <>
      <form className="px-[6.46875rem] py-[1.5rem] mmd:px-[2rem]">
        <div className="flex items-center">
          <LabelInput
            name="email"
            label="Email"
            value={email}
            className={clsx('form__input', {
              'focus:border-[#dafbe8] bg-[#dafbe8]': Emailhelper?.color == 'success',
              'bg-[#fdd8e5] focus:border-[#fdd8e5]': Emailhelper?.color == 'error',
            })}
            type="email"
            id="email"
            onChange={handleChange}
            helper={Emailhelper}
          />
        </div>

        <div
          className={clsx('text-xs py-[0.5rem] px-1', {
            'text-[#17c964]': Emailhelper?.color == 'success',
            'text-[#f31260]': Emailhelper?.color == 'error',
          })}>
          {EmailState()}
        </div>
        <div className="flex items-center mt-6">
          <LabelInput
            name="password"
            label="Password"
            value={password}
            className={clsx('form__input', {
              'focus:border-[#dafbe8] bg-[#dafbe8]': Passwordhelper?.color == 'success',
              'bg-[#fdd8e5] focus:border-[#fdd8e5]': Passwordhelper?.color == 'error',
            })}
            type="password"
            id="password"
            onChange={handleChange}
            helper={Passwordhelper}
          />
        </div>
        <div
          className={clsx('text-xs py-[0.5rem] px-1', {
            'text-[#17c964]': Passwordhelper?.color == 'success',
            'text-[#f31260]': Passwordhelper?.color == 'error',
          })}>
          {PasswordState()}
        </div>

        <motion.button
          onClick={(e: any) => {
            handleSubmit(e);

            !email && !password ? onClick() : '';
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="flex bg-[#fcd435] text-[#212529] mt-12 h-12 justify-center items-center tracking-widest w-full rounded-xl">
          {auth}
        </motion.button>
      </form>
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
