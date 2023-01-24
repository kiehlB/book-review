import { PageGrid } from '../layout/GridLayout';
import { IoSearchOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';

import useDarkMode from './useDarkmode';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import ModalContext from '../../context/modalContext';
import useWhoAmI from '../auth/hooks/useWhoami';
import AuthContext from '../../context/authContext';
import AuthItem from './AuthItem';

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      onClick={() => {
        setTheme(previousTheme => (previousTheme === 'dark' ? 'light' : 'dark'));
      }}
      className={clsx(
        'border-gray-200 hover:border-[#FCD535] inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none',
        {
          'w-14': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}>
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

function Header() {
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);
  const { isAuth, SetIsAuth } = useContext(AuthContext);
  const { auth } = useWhoAmI();

  return (
    <PageGrid as="header" className={`items-center py-[1rem] px-[1rem]`}>
      <h1
        className={`col-span-2 whitespace-nowrap text-[1.5625rem] font-medium transition focus:outline-none`}>
        Books
      </h1>
      <div className="col-span-6 mlg:hidden">
        <div className="relative">
          <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)]">
            <IoSearchOutline />
          </div>
          <input className="w-full rounded-full h-[42px] border-[1px] bg-[#F5F7FA] py-[0.5rem] px-[2.5rem]  text-sm focus:outline-none" />
        </div>
      </div>

      <div className="flex col-span-2 ml-auto items-center mlg:col-span-10">
        <div className="pr-4">
          <DarkModeToggle />
        </div>

        {auth ? (
          <div className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]">
            Logout
          </div>
        ) : (
          <>
            <div
              className="pr-4 text-sm text-[#181A20] font-medium"
              onClick={() => {
                SetIsClose(!IsClose);
                SetMode('login');
              }}>
              Sign in
            </div>
            <div
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]"
              onClick={() => {
                SetIsClose(!IsClose);
                SetMode('register');
              }}>
              Sign up
            </div>
          </>
        )}
      </div>
    </PageGrid>
  );
}

export default Header;
