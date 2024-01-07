'use client';

import { useForm } from '@/hooks/use-form';
import { validate } from '@/lib/utils';
import React from 'react';
import SocialButton from './socal-button';
import Image from 'next/image';
import {
  LoginMutation,
  LoginMutationVariables,
  RegisterMutation,
  RegisterMutationVariables,
} from '@/types/apolloComponent';
import { ApolloError, FetchResult } from '@apollo/client';
import { toast } from 'react-toastify';
import useModalStore from '@/store/modal';
import { Google } from '@/components/icons';
import LabelInput from '@/components/input/label-input';

type LoginFunction = (options: {
  variables: LoginMutationVariables;
}) => Promise<FetchResult<LoginMutation>>;

type RegisterFunction = (options: {
  variables: RegisterMutationVariables;
}) => Promise<FetchResult<RegisterMutation>>;

interface Props {
  mode: 'login' | 'register';
  login?: LoginFunction;
  register?: RegisterFunction;
  error: ApolloError | undefined;
}

const authDescriptions = {
  login: {
    usernamePlaceholder: '아이디를 입력하세요.',
    passwordPlaceholder: '비밀번호를 입력하세요.',
    buttonText: '로그인',
    actionText: '회원가입',
  },
  register: {
    usernamePlaceholder: '5~20자 사이의 영문 소문자 숫자 입력',
    passwordPlaceholder: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력',
    buttonText: '회원가입',
  },
} as const;

function AuthForm({ mode, login, register, error }: Props) {
  const { setMode } = useModalStore();

  const naverRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (naverRef.current) {
      const firstChild = naverRef.current.children[0] as HTMLElement;
      firstChild.click();
    }
  };

  const { inputProps, handleSubmit, errors, setError } = useForm({
    form: {
      username: {
        validate: mode === 'register' ? validate.username : undefined,
        errorMessage: '5~20자 사이의 영문 소문자 또는 숫자를 입력해주세요.',
      },
      password: {
        validate: mode === 'register' ? validate.password : undefined,
        errorMessage: '8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력해주세요.',
      },
    },
    mode: 'all',
    shouldPreventDefault: false,
  });

  const { usernamePlaceholder, passwordPlaceholder, buttonText } = authDescriptions[mode];

  const onSubmit = handleSubmit(async (formData, event) => {
    event.preventDefault();

    try {
      if (mode === 'login' && login) {
        await login({
          variables: {
            username: formData.username,
            password: formData.password,
          },
        });
      } else if (mode === 'register' && register) {
        await register({
          variables: {
            username: formData.username,
            password: formData.password,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  });
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

  return (
    <>
      <form onSubmit={onSubmit} className="mx-auto flex w-[90%] flex-1 flex-col p-4 pt-6">
        <section className="flex flex-col gap-4">
          <LabelInput
            label="아이디"
            placeholder={usernamePlaceholder}
            disabled={false}
            errorMessage={errors.username}
            {...inputProps.username}
          />
          <LabelInput
            label="비밀번호"
            placeholder={passwordPlaceholder}
            disabled={false}
            errorMessage={errors.password}
            type="password"
            {...inputProps.password}
          />
        </section>
        <section className="mobile:mt-6 flex w-full flex-col items-center gap-6">
          {error?.name === 'WrongCredentials' && (
            <div className="text-center text-sm text-red-500">
              잘못된 계정 정보입니다.
            </div>
          )}

          <button className="mt-8 flex h-12 w-full items-center justify-center rounded-xl bg-yellow-100 tracking-widest text-default">
            {buttonText}
          </button>

          <p className="link flex w-full justify-end text-base mmd:px-[2rem] mxx:px-[1rem]">
            {mode == 'register' ? (
              <span
                className="cursor-pointer font-semibold text-yellow-200"
                onClick={() => setMode('login')}>
                로그인
              </span>
            ) : (
              <span
                className="cursor-pointer font-semibold text-yellow-200"
                onClick={() => setMode('register')}>
                회원가입
              </span>
            )}
            <span className="dark:text-200">으로 이동</span>
          </p>

          <div className="mx-auto flex w-[60%] justify-between pt-3 mxs:w-[80%] mxx:w-[100%] mxx:px-2">
            <SocialButton
              href={`${process.env.GOOGLE_CALLBACK}`}
              className="border border-[#DEE2E6]">
              <Google />
            </SocialButton>

            <SocialButton onClick={handleClick}>
              <div ref={naverRef} id="naverIdLogin" className="hidden" />
              <Image src="/naver.png" alt="icon" width={50} height={50} />
            </SocialButton>

            <SocialButton href={`${process.env.KAKAO_CALLBACK}`} bgColor="bg-[#fee500]">
              <Image src="/kakao.png" width={24} height={24} alt="alt" />
            </SocialButton>
          </div>
        </section>
      </form>
    </>
  );
}

export default AuthForm;
