import * as React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ApolloError } from '@apollo/client';
import { toast } from 'react-toastify';

import Google from '../../svg/google';
import Link from 'next/link';
import Image from 'next/image';
import LabelInput from '../label-input';

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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  authError?: ApolloError;
  auth?: string;
  isRegister?: string;
  linkTo?: string;
  mode?: string;
  error?: ApolloError;
  Passwordhelper: helperProps;
  Usernamehelper: helperProps;
  SetMode: React.Dispatch<React.SetStateAction<string>>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  handleSubmit,
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
  const naverRef = React.useRef(null) as any;

  const onClick = (e: { preventDefault: () => void }) => {
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
    const isUserInputError = error?.graphQLErrors?.map(e => e.message) ?? [];
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
      const naverLogin = new (window as any).naver.LoginWithNaverId({
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
              'border border-[#d3d7e2] focus:border-[#f0b90b] dark:border-none dark:bg-[#2b3139]':
                Usernamehelper?.state == 'idle',
            })}
            type="username"
            id="username"
            onChange={handleChange}
            helper={Usernamehelper}
          />
        </div>

        <span
          className={clsx('px-1 py-[0.5rem] text-xs', {
            'text-[#17c964]': Usernamehelper?.color == 'success',
            'text-[#f31260]': Usernamehelper?.color == 'error',
          })}>
          {UsernameState()}
        </span>
        <div className="mt-6 flex items-center">
          <LabelInput
            name="password"
            label="password"
            value={password}
            className={clsx('form__input border-[#d3d7e2]', {
              'bg-[#dafbe8] focus:border-[#dafbe8]': Passwordhelper?.color == 'success',
              'bg-[#fdd8e5] focus:border-[#fdd8e5]': Passwordhelper?.color == 'error',
              'border border-[#d3d7e2]  focus:border-[#f0b90b] dark:border-none dark:bg-[#2b3139]':
                Passwordhelper?.state == 'idle',
            })}
            type="password"
            id="password"
            onChange={handleChange}
            helper={Passwordhelper}
          />
        </div>
        <span
          className={clsx('px-1 py-[0.5rem] text-xs', {
            'text-[#17c964]': Passwordhelper?.color == 'success',
            'text-[#f31260]': Passwordhelper?.color == 'error',
          })}>
          {PasswordState()}
        </span>

        <div
          onClick={(e: any) => {
            Usernamehelper.color == 'success' && Passwordhelper.color == 'success'
              ? handleSubmit(e)
              : '';

            !username || !password ? onClick(e) : '';
          }}>
          <motion.button
            data-testid="title"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-[#fcd435] tracking-widest text-[#212529]">
            {auth}
          </motion.button>
        </div>
      </div>
      <p className="link flex justify-end px-[6.46875rem] text-base mmd:px-[2rem] ssm:px-[1rem]">
        {mode == 'register' ? (
          <span
            className="cursor-pointer font-semibold text-[#C99400]"
            onClick={() => SetMode('login')}>
            로그인
          </span>
        ) : (
          <span
            className="cursor-pointer font-semibold text-[#C99400]"
            onClick={() => SetMode('register')}>
            회원가입
          </span>
        )}
        <span className="dark:text-[#e4e5e7]"> 으로 이동</span>
      </p>

      <div className="my-8 mt-4 flex items-center justify-between px-1">
        <div className="h-[1px] w-[136px] bg-[#EAECEF]"></div>
        <span className="text-[#707a8a] dark:text-[#e4e5e7]">Or</span>
        <div className="h-[1px] w-[136px] bg-[#EAECEF]"></div>
      </div>

      <div className="mx-auto flex w-[60%] justify-between pt-3">
        <Link href={`${process.env.GOOGLE_CALLBACK}`} passHref={true}>
          <div className="flex h-[50px] w-[50px] transform cursor-pointer items-center justify-center rounded-full border border-[#DEE2E6] transition-all duration-500 ease-in-out hover:hover:translate-y-[-5px] hover:shadow-md">
            <Google />
          </div>
        </Link>

        <div onClick={handleClick}>
          <div ref={naverRef} id="naverIdLogin" className="hidden" />
          <div className="flex h-[50px] w-[50px] transform cursor-pointer items-center justify-center rounded-full transition-all duration-500 ease-in-out hover:hover:translate-y-[-5px] hover:shadow-md">
            <Image src="/naver.png " alt="icon" width={50} height={50} />
          </div>
        </div>

        <Link href={`${process.env.KAKAO_CALLBACK}`} passHref={true}>
          <div className="flex h-[50px] w-[50px] transform cursor-pointer items-center justify-center rounded-full bg-[#fee500] transition-all duration-500 ease-in-out hover:hover:translate-y-[-5px] hover:shadow-md">
            <Image src="/kakao.png" width={24} height={24} alt="alt" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default React.memo(AuthForm);
