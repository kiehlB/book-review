import { PageGrid } from '../layout/GridLayout';
import { IoSearchOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
import useDarkMode from './useDarkmode';
import clsx from 'clsx';
import { useContext, useEffect } from 'react';
import ModalContext from '../../context/modalContext';
import useWhoAmI from '../auth/hooks/useWhoami';
import Link from 'next/link';

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      onClick={() => {
        setTheme(previousTheme => (previousTheme === 'dark' ? 'light' : 'dark'));
      }}
      className={clsx(
        'border-gray-200 hover:border-[#FCD535] inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition  focus:outline-none',
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
  const { IsClose, SetIsClose, mode, SetMode, BookIsClose, SetBookIsClose } =
    useContext(ModalContext);

  const { auth } = useWhoAmI();

  return (
    <PageGrid as="header" className={`items-center py-[1rem]`}>
      <h1
        style={{ fontFamily: 'Peace' }}
        className={`col-span-2 whitespace-nowrap text-[1.5625rem] font-medium transition focus:outline-none text-[#212529] mxl:col-span-2`}>
        <Link href="/"> BookReview </Link>
      </h1>

      <div className="col-span-6 mxl:col-span-5 mmd:hidden">
        <div className="relative">
          <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)]">
            <IoSearchOutline />
          </div>
          <input className="w-full rounded-full h-[42px] border-[1px] bg-[#F5F7FA] py-[0.5rem] px-[2.5rem]  text-sm focus:outline-none" />
        </div>
      </div>

      <div className="flex col-span-2 ml-auto items-center mxl:col-span-3 mmd:col-span-10 justify-end w-full">
        <div className="pr-6">
          <DarkModeToggle />
        </div>

        {auth ? (
          <div className="flex items-center">
            <div
              onClick={() => SetBookIsClose(!BookIsClose)}
              className="text-sm font-medium border px-[20px] py-[10px] rounded-3xl mr-4 text-[#212529]">
              Write
            </div>
            <div className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20]">
              Logout
            </div>
          </div>
        ) : (
          <>
            <div
              className="pr-4 text-sm text-[#181A20] font-semibold cursor-pointer hover:text-[#495057]"
              onClick={() => {
                SetIsClose(!IsClose);
                SetMode('login');
              }}>
              Sign in
            </div>
            <div
              className="text-sm font-semibold px-[20px] py-[12px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer hover:text-[#5b646d]"
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
