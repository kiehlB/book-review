import * as React from 'react';
import { motion } from 'framer-motion';
import { ApolloError } from '@apollo/client';
import Google from '../../svg/google';
import FaceBook from '../../svg/facebook';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import LabelInput from '../common/LabelInput';
import clsx from 'clsx';
import Link from 'next/link';
import Router from 'next/router';

export interface inputProps {
  password: string | number | readonly string[];
  username: string | number | readonly string[];
}
export interface helperProps {
  color: string;
  state: string;
  text: string;
}

export declare type BindingsChangeTarget =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | string;

export interface AuthFormProps {
  username?: string;
  password?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
  mode: string;
  error: ApolloError;
  Passwordhelper: helperProps;
  Usernamehelper: helperProps;
  SetMode: React.Dispatch<React.SetStateAction<string>>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
  authError,
  auth,
  mode,
  error,
  username,
  password,
  handleChange,
  Passwordhelper,
  Usernamehelper,
  SetMode,
}) => {
  const naverRef: any = React.useRef(null);

  const onClick = e => {
    e.preventDefault();
    toast.error('아이디나 비밀번호가 비었습니다!', {
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

  const UsernameState = () => {
    if (username == '') {
      return '';
    } else if (Usernamehelper.color == 'error') {
      return Usernamehelper.text;
    } else {
      return Usernamehelper.text;
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

  React.useEffect(() => {
    const { naver } = window as any;
    if (naver) {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: process.env.NAVER_ID,
        callbackUrl: process.env.NAVER_CALLBACK,
        isPopup: false,
        loginButton: {},
      });

      naverLogin.init();
    }
  }, []);

  const handleClick = () => {
    naverRef.current.children[0].click();
  };

  // dark:bg-[#300313] dark:text-[#f31260]
  // dark:text-[#41ec8b] dark:bg-[#042f14]
  return (
    <>
      <div className="px-[6.46875rem] py-[1.5rem] mmd:px-[2rem] ssm:px-[1rem]">
        <div className="flex items-center">
          <LabelInput
            name="username"
            label="username"
            value={username}
            className={clsx('form__input', {
              'bg-[#dafbe8]': Usernamehelper?.color == 'success',
              'bg-[#fdd8e5]': Usernamehelper?.color == 'error',
              'focus:border-[#f0b90b] dark:bg-[#2b3139] border border-[#d3d7e2] dark:border-none':
                Usernamehelper?.state == 'idle',
            })}
            type="username"
            id="username"
            onChange={handleChange}
            helper={Usernamehelper}
          />
        </div>

        <div
          className={clsx('text-xs py-[0.5rem] px-1', {
            'text-[#17c964]': Usernamehelper?.color == 'success',
            'text-[#f31260]': Usernamehelper?.color == 'error',
          })}>
          {UsernameState()}
        </div>
        <div className="flex items-center mt-6">
          <LabelInput
            name="password"
            label="password"
            value={password}
            className={clsx('form__input border-[#d3d7e2]', {
              'focus:border-[#dafbe8] bg-[#dafbe8]': Passwordhelper?.color == 'success',
              'bg-[#fdd8e5] focus:border-[#fdd8e5]': Passwordhelper?.color == 'error',
              'focus:border-[#f0b90b] dark:bg-[#2b3139]  border border-[#d3d7e2] dark:border-none':
                Passwordhelper?.state == 'idle',
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

        <div
          onClick={(e: any) => {
            Usernamehelper.color == 'success' && Passwordhelper.color == 'success'
              ? handleSubmit(e)
              : '';

            !username || !password ? onClick(e) : '';
          }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="flex bg-[#fcd435] text-[#212529] mt-8 h-12 justify-center items-center tracking-widest w-full rounded-xl">
            {auth}
          </motion.button>
        </div>
      </div>
      <div className="px-[6.46875rem] text-base flex justify-end mmd:px-[2rem] ssm:px-[1rem]">
        {mode == 'register' ? (
          <div
            className="text-[#C99400] font-semibold cursor-pointer"
            onClick={() => SetMode('login')}>
            로그인
          </div>
        ) : (
          <div
            className="text-[#C99400] font-semibold cursor-pointer"
            onClick={() => SetMode('register')}>
            회원가입
          </div>
        )}
        <div className="dark:text-[#e4e5e7]"> 으로 이동</div>
      </div>

      <div className="flex mt-4  my-8 items-center justify-between px-1">
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
        <div className="text-[#707a8a] dark:text-[#e4e5e7]">Or</div>
        <div className="w-[136px] h-[1px] bg-[#EAECEF]"></div>
      </div>

      <div className="flex justify-between w-[60%] mx-auto pt-3">
        <Link href={`${process.env.GOOGLE_CALLBACK}`} passHref={true}>
          <div className="rounded-full border-[#DEE2E6] border w-[50px] h-[50px] flex justify-center items-center transition-all hover:hover:translate-y-[-5px] transform duration-500 ease-in-out cursor-pointer hover:shadow-md">
            <Google />
          </div>
        </Link>

        <div onClick={handleClick}>
          <div ref={naverRef} id="naverIdLogin" className="hidden" />
          <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center transition-all hover:hover:translate-y-[-5px] transform duration-500 ease-in-out cursor-pointer hover:shadow-md">
            <img src="/naver.png " />
          </div>
        </div>

        <Link href={`${process.env.KAKAO_CALLBACK}`} passHref={true}>
          <div className="rounded-full bg-[#fee500] border border-[#DEE2E6] w-[50px] h-[50px] flex justify-center items-center transition-all hover:hover:translate-y-[-5px] transform duration-500 ease-in-out cursor-pointer hover:shadow-md">
            <img src="/kakao.png" className="w-[24px] h-[24px]" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default React.memo(AuthForm);
