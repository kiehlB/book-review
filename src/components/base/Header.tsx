import { Fira_Mono } from '@next/font/google';
import localFont from '@next/font/local';
import { PageGrid } from '../layout/GridLayout';
import { IoSearchOutline } from 'react-icons/io5';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';

import useDarkMode from './useDarkmode';
import clsx from 'clsx';

const myFont = localFont({ src: '../../font/Regular.otf' });

const roboto = Fira_Mono({
  weight: '400',
});

const iconTransformOrigin = { transformOrigin: '50% 100px' };

function DarkModeToggle({ variant = 'icon' }: { variant?: 'icon' | 'labelled' }) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      onClick={() => {
        setTheme(previousTheme => (previousTheme === 'dark' ? 'light' : 'dark'));
      }}
      className={clsx(
        'border-gray-200 hover:border-gray-900 focus:border-gray-900 inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition focus:outline-none',
        {
          'w-14': variant === 'icon',
          'px-8': variant === 'labelled',
        },
      )}>
      <div className="relative h-8 w-8">
        <span
          className="absolute inset-0 flex justify-center items-center rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
          style={iconTransformOrigin}>
          <CiDark size={24} />
        </span>
        <span
          className="absolute flex justify-center items-center inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
          style={iconTransformOrigin}>
          <CiLight size={24} />
        </span>
      </div>
    </button>
  );
}

function Header() {
  return (
    <PageGrid as="nav" className={`${roboto.className} items-center py-[1rem]`}>
      <h1
        className={`${myFont.className} col-span-2 whitespace-nowrap text-[1.5625rem] font-medium transition focus:outline-none`}>
        Books
      </h1>
      <div className="col-span-6">
        <div className="relative">
          <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)]">
            <IoSearchOutline />
          </div>
          <input className="w-full rounded-full h-[42px] border-[1px] bg-[#F5F7FA] py-[0.5rem] px-[2.5rem] outline-[#3466f6] outline-offset-2 text-sm" />
        </div>
      </div>
      <div className="flex col-span-2 ml-auto items-center">
        <div className="pr-4">
          <DarkModeToggle />
        </div>
        <div className="pr-4">Log in</div>
        <div>Sign up</div>
      </div>
    </PageGrid>
  );
}

export default Header;
