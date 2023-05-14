'use client';

import { IoSearchOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import clsx from 'clsx';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '@/store/rootReducer';
import { getcoreInfoSuccess } from '@/store/core';
import { useRouter } from 'next/navigation';

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(getcoreInfoSuccess());
      }}
      className={clsx(
        'mmx:h-12 inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 p-1 transition hover:border-[#FCD535] focus:outline-none',
        {
          'mmx:w-12 w-14': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}
      aria-label="Toggle dark mode">
      <div className="relative h-8 w-8">
        <div
          className="absolute inset-0 flex rotate-90 transform items-center justify-center text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}>
          <CiDark size={24} />
        </div>
        <div
          className="absolute inset-0 flex rotate-0 transform items-center justify-center text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}>
          <CiLight size={24} />
        </div>
      </div>
    </button>
  );
}

type Dispatch<A> = (value: A) => void;

export type HeaderProps = {
  IsClose: boolean;
  SetIsClose: Dispatch<SetStateAction<boolean>>;
  SetMode: Dispatch<SetStateAction<string>>;
  BookIsClose: boolean;
  SetBookIsClose: Dispatch<SetStateAction<boolean>>;
};

function Header({
  IsClose,
  SetIsClose,
  SetMode,
  BookIsClose,
  SetBookIsClose,
}: HeaderProps) {
  const [input, setInput] = useState('');
  const router = useRouter();

  const { auth, profileThumbnail, displayName } = useSelector(
    (state: RootState) => state.auth,
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };

  const AuthButtons = () => (
    <>
      <span
        className="dark:mxs:text-[#212529] mxs:bg-[#fcd535] mxs:px-[16px] mxs:py-[12px] cursor-pointer rounded-3xl pr-4 text-sm font-semibold  text-[#181A20] hover:text-[#495057] dark:text-[#e4e5e7] dark:hover:text-[#fcd535]"
        onClick={() => {
          SetIsClose(!IsClose);
          SetMode('login');
        }}>
        Sign in
      </span>
      <span
        className="mxs:hidden cursor-pointer rounded-3xl bg-[#FCD535] px-[20px] py-[12px] text-sm font-semibold text-[#181A20] hover:text-[#5b646d]"
        onClick={() => {
          SetIsClose(!IsClose);
          SetMode('register');
        }}>
        Sign up
      </span>
    </>
  );

  const LoggedInButtons = () => (
    <div className="flex items-center">
      <span
        onClick={() => SetBookIsClose(!BookIsClose)}
        className="mxs:hidden mr-4 cursor-pointer rounded-3xl border px-[20px] py-[10px] text-sm font-semibold text-[#212529] hover:text-[#5b646d] dark:border-none dark:bg-[#2b3139] dark:text-[#e4e5e7] dark:hover:text-white">
        Write
      </span>
      {/* <PopMenu profileThumbnail={profileThumbnail} /> */}
    </div>
  );

  const AuthControl = () => ((auth as any)?.id ? <LoggedInButtons /> : <AuthButtons />);

  return (
    <header
      className={`mxl:max-w-[75rem] mmd:grid-cols-10 mmx:grid-cols-none mmx:w-full mmx:flex mx-auto grid max-w-[98.5rem] grid-cols-10 items-center gap-6 py-[1rem]`}>
      <div
        className={`mxl:col-span-2 mmx:col-span-none col-span-2 whitespace-nowrap text-[1.5625rem] text-[#212529] transition focus:outline-none dark:text-[#e4e5e7]`}>
        <span className="flex items-center">
          <div className="mxs:mr-1 mr-2 md:hidden">
            {/* <Sidebar BookIsClose={BookIsClose} SetBookIsClose={SetBookIsClose} /> */}
          </div>
          <Link href="/" className={`font-Fredoka mxs:text-2xl ssm:hidden text-[28px]`}>
            BookReview
          </Link>
          <Link href="/" className={`font-Fredoka mxs:text-2xl sxm:hidden text-[28px]`}>
            BR
          </Link>
        </span>
      </div>

      <form
        onSubmit={e => {
          // dispatch(getSearchInput(input));
          handleSubmit(e);
        }}
        className="mxl:col-span-5 mmx:hidden col-span-6">
        <div className="relative">
          <div className="bg-[rgb(255 115 179)] absolute left-[16px] top-[50%] translate-y-[-50%] dark:text-[#e4e5e7] ">
            <IoSearchOutline />
          </div>
          {/* <HeaderInput
            value={input}
            onChange={e => setInput(e.target.value)}
            isDark={isdark}
            className="w-full rounded-full h-[42px] border-[1px] bg-[#F5F7FA] py-[0.5rem] px-[2.5rem]  text-sm focus:outline-none dark:bg-[#2b2d31] dark:border-[#1a1b1e] dark:text-[#e4e5e7]"
          /> */}
        </div>
      </form>

      <div className="mxl:col-span-3 col-span-2 ml-auto flex items-center justify-end">
        <div className="mxs:pr-2 pr-6">
          <DarkModeToggle />
        </div>

        {/* <AuthControl /> */}
      </div>
    </header>
  );
}

export default Header;

const HeaderInput = styled.input<{ isdark: string }>`
  ::selection {
    background: ${props => (props.isdark == 'dark' ? '#e4e5e7' : '')};
  }
`;
