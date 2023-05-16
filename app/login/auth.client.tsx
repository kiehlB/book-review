'use client';

import Login from '@/components/auth/login';
import Register from '@/components/auth/register';
import { useContext } from 'react';
import ModalContext from '@/context/modal-context';

export default function AuthModalClient({}) {
  const { mode } = useContext(ModalContext);

  return (
    <>
      <header className="flex justify-center py-6 text-[1.3125rem] font-semibold text-[#212529] dark:text-[#e4e5e7]">
        <h1> {mode == 'register' ? '회원가입' : '로그인'}</h1>
      </header>
      {mode == 'register' ? <Register mode={mode} /> : <Login mode={mode} />}
    </>
  );
}
