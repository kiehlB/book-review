'use client';

import { CiDark, CiRead, CiUser } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { useTheme } from 'next-themes';
import useCoreStore from '@/store/core';
import Sidebar from './sidebar';
import { useRouter } from 'next/navigation';
import { RequestCookie } from '@/components/layout/page-layout';
import PopMenu from '@/components/popup-menu';
import SearchInput from '@/components/input/search-input';
import { AiOutlineEdit, AiOutlineUser } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { RiBookOpenLine } from 'react-icons/ri';
import { IoSearchOutline } from 'react-icons/io5';

const iconTransformOrigin = { transformOrigin: '50% 100px' };
function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const { theme, setTheme } = useTheme();
  const { toggleDarkMode } = useCoreStore();

  const darkMode = theme == 'dark' ? 'light' : 'dark';

  const handleClick = () => {
    setTheme(darkMode);
    toggleDarkMode(darkMode);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-gray-200 p-1 transition hover:border-yellow-100 focus:outline-none dark:border-dark-200 dark:hover:border-dark-300 mms:h-12',
        {
          'w-14 mms:w-12': variant === 'icon',
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
export type HeaderProps = {
  IsClose: boolean;
  SetIsClose: (value: boolean) => void;
  SetMode: (value: string) => void;
  BookIsClose: boolean;
  SetBookClose: () => void;
  token: RequestCookie | undefined;
  getUser: any;
};

function Header({
  BookIsClose,
  IsClose,
  SetIsClose,
  SetMode,
  SetBookClose,
  token,
  getUser,
}: HeaderProps) {
  const [input, setInput] = useState('');
  const router = useRouter();

  const profile = getUser?.whoami?.profile?.thumbnail;
  const auth = getUser?.whoami?.id;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = input.trim();

    if (trimmedValue === '') {
      return;
    }

    router.push(`/search/${input}`);
  };

  const AuthButtons = () => (
    <>
      <div
        className="cursor-pointer rounded-3xl pr-4 font-[Fredoka] text-sm font-semibold text-[#181A20] hover:text-[#495057] dark:text-darkText dark:hover:text-yellow-100 mxs:bg-yellow-100 mxs:px-[16px] mxs:py-[12px] dark:mxs:text-[#212529]"
        onClick={() => {
          SetMode('login');
          SetIsClose(!IsClose);
        }}>
        Sign in
      </div>

      <div
        className="cursor-pointer rounded-3xl bg-yellow-100 bg-opacity-90 px-[20px] py-[12px] font-[Fredoka] text-sm font-semibold text-[#181A20]  dark:hover:brightness-90  mxs:hidden"
        onClick={() => {
          SetMode('register');
          SetIsClose(!IsClose);
        }}>
        Sign up
      </div>
    </>
  );

  const LoggedInButtons = () => (
    <div className="flex items-center">
      <div
        onClick={SetBookClose}
        className="mr-4 cursor-pointer rounded-3xl border px-[20px] py-[10px] font-[Fredoka] text-sm font-semibold text-default hover:text-[#5b646d] dark:border-none dark:bg-dark-400 dark:text-[#cfcfcf] dark:hover:text-white mxs:hidden">
        Write
      </div>

      <PopMenu
        profileThumbnail={profile}
        primaryItems={[
          [
            { href: '/profile', icon: AiOutlineEdit, label: '내 정보' },
            { href: '/temporaryPost', icon: TfiWrite, label: '임시 글' },
            { href: '/myPost', icon: RiBookOpenLine, label: '내가 쓴 글' },
            { href: '/readPost', icon: CiRead, label: '내가 읽은 글 목록' },
          ],
        ]}
        secondaryItems={[
          [
            { onClick: SetBookClose, icon: AiOutlineEdit, label: '글 쓰기' },
            { href: '/profile', icon: AiOutlineUser, label: '내 정보' },
            { href: '/temporaryPost', icon: TfiWrite, label: '임시 글' },
            { href: '/myPost', icon: RiBookOpenLine, label: '내가 쓴 글' },
            { href: '/readPost', icon: CiRead, label: '내가 읽은 글 목록' },
          ],
        ]}
      />
    </div>
  );

  const AuthControl = auth ? <LoggedInButtons /> : <AuthButtons />;

  return (
    <header
      className={`mx-auto grid max-w-[98.5rem] grid-cols-10 items-center gap-6 py-[1rem] mxl:max-w-[75rem] mmd:flex mmd:w-full mmd:grid-cols-none`}>
      <div
        className={`mms:col-span-none col-span-2 whitespace-nowrap text-[1.5625rem] text-default transition focus:outline-none dark:text-[#ececec] mxl:col-span-2`}>
        <span className="flex items-center">
          <div className="mr-2 md:hidden mxs:mr-1"></div>
          <div className="mr-2 md:hidden mxs:mr-1">
            <Sidebar
              BookIsClose={BookIsClose}
              SetBookClose={SetBookClose}
              getUser={auth}
            />
          </div>

          <Link href="/" className={`font-Fredoka text-[28px] mxs:hidden mxs:text-2xl`}>
            BookReview
          </Link>
          <Link href="/" className={`font-Fredoka text-[28px] sm:hidden mxs:text-2xl`}>
            BR
          </Link>
        </span>
      </div>

      <SearchInput input={input} setInput={setInput} handleSubmit={handleSubmit} />

      <div className="col-span-2 ml-auto flex items-center justify-end mxl:col-span-3">
        <button
          className={clsx(
            'mr-6 inline-flex items-center justify-center overflow-hidden rounded-full border-gray-200 transition hover:border-yellow-100 focus:outline-none dark:border-dark-200 dark:hover:border-dark-300 md:hidden mms:h-12 mms:w-12 mxs:mr-2',
          )}
          aria-label="Search">
          <div className="relative h-8 w-8">
            <Link href={'/search'}>
              <div
                className="absolute inset-0 flex items-center justify-center text-black transition duration-1000 motion-reduce:duration-[0s]"
                style={iconTransformOrigin}>
                <IoSearchOutline size={26} className="text-gray-600 dark:text-white" />
              </div>
            </Link>
          </div>
        </button>
        <div className="pr-6 mxs:pr-2">
          <DarkModeToggle />
        </div>
        {AuthControl}
      </div>
    </header>
  );
}

export default Header;
