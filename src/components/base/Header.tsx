import { IoSearchOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import clsx from 'clsx';
import { SetStateAction, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getcoreInfoSuccess, getSearchInput } from '../../store/core';
import { RootState } from '../../store/rootReducer';
import styled from 'styled-components';
import Sidebar from '../side/Sidebar';
import { useRouter } from 'next/router';
import useWhoAmI from '../auth/hooks/useWhoami';
import PopMenu from '../common/PopMenu';

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(getcoreInfoSuccess());
      }}
      className={clsx(
        'border-gray-200 hover:border-[#FCD535] inline-flex h-14 mmx:h-12 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none',
        {
          'w-14 mmx:w-12': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}
      aria-label="Toggle dark mode">
      <div className="relative h-8 w-8">
        <div
          className="absolute inset-0 flex justify-center items-center rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}>
          <CiDark size={24} />
        </div>
        <div
          className="absolute flex justify-center items-center inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
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
  const { getUser } = useWhoAmI();
  const router = useRouter();

  const { isdark } = useSelector((state: RootState) => state.core);
  const dispatch = useDispatch();
  const { auth, profileThumbnail, displayName } = useSelector(
    (state: RootState) => state.auth,
  );

  const handleSubmit = e => {
    e.preventDefault();
    router.push(`/search/${input}`);
  };

  const AuthButtons = () => (
    <>
      <span
        className="pr-4 text-sm text-[#181A20] font-semibold cursor-pointer hover:text-[#495057] dark:text-[#e4e5e7] dark:mxs:text-[#212529] dark:hover:text-[#fcd535]  mxs:bg-[#fcd535] mxs:px-[16px] mxs:py-[12px] rounded-3xl"
        onClick={() => {
          SetIsClose(!IsClose);
          SetMode('login');
        }}>
        Sign in
      </span>
      <span
        className="text-sm font-semibold px-[20px] py-[12px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer hover:text-[#5b646d] mxs:hidden"
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
        className="text-sm border px-[20px] py-[10px] rounded-3xl mr-4 text-[#212529] cursor-pointer hover:text-[#5b646d] font-semibold dark:bg-[#2b3139] dark:text-[#e4e5e7] dark:border-none dark:hover:text-white mxs:hidden">
        Write
      </span>
      <PopMenu profileThumbnail={profileThumbnail} />
    </div>
  );

  const AuthControl = () => (auth?.id ? <LoggedInButtons /> : <AuthButtons />);

  return (
    <header
      className={`grid grid-cols-10 gap-6 max-w-[98.5rem] mx-auto mxl:max-w-[75rem] mmd:grid-cols-10 mmx:grid-cols-none items-center py-[1rem] mmx:w-full mmx:flex`}>
      <div
        className={`col-span-2 whitespace-nowrap text-[1.5625rem] transition focus:outline-none text-[#212529] mxl:col-span-2 dark:text-[#e4e5e7] mmx:col-span-none`}>
        <span className="flex items-center">
          <div className="md:hidden mr-2 mxs:mr-1">
            <Sidebar BookIsClose={BookIsClose} SetBookIsClose={SetBookIsClose} />
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
          dispatch(getSearchInput(input));
          handleSubmit(e);
        }}
        className="col-span-6 mxl:col-span-5 mmx:hidden">
        <div className="relative">
          <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)] dark:text-[#e4e5e7] ">
            <IoSearchOutline />
          </div>
          <HeaderInput
            value={input}
            onChange={e => setInput(e.target.value)}
            isDark={isdark}
            className="w-full rounded-full h-[42px] border-[1px] bg-[#F5F7FA] py-[0.5rem] px-[2.5rem]  text-sm focus:outline-none dark:bg-[#2b2d31] dark:border-[#1a1b1e] dark:text-[#e4e5e7]"
          />
        </div>
      </form>

      <div className="flex col-span-2 ml-auto items-center justify-end mxl:col-span-3">
        <div className="pr-6 mxs:pr-2">
          <DarkModeToggle />
        </div>

        <AuthControl />
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
