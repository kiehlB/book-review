import React, { SetStateAction } from 'react';

import Register from './register';
import Login from './login';
import Modal from '@/components/modal';
import useModalStore from '@/store/modal';
 
export type AuthContainerProps = {};

function AuthContainer({}: AuthContainerProps) {
  const { isClose, setClose, mode } = useModalStore();

  return (
    <>
      <Modal visible={isClose} onClose={setClose} className="h-[46.25rem] w-[38.625rem]">
        <header className="flex justify-center py-6 text-[1.3125rem] font-semibold">
          <h1 className="text-default dark:text-dark-200">
            {mode == 'register' ? '회원가입' : '로그인'}
          </h1>
        </header>
        {mode == 'register' ? <Register /> : <Login />}
        <footer className="mt-auto mms:hidden">
          <div className="shelf">
            <div className="shelf w-full sm:w-[616px]">
              {[...Array(66)].map((_, i) => (
                <div className={`book ${i > 65 ? 'sm:hidden' : ''}`} key={i}></div>
              ))}
            </div>
          </div>
        </footer>
      </Modal>
    </>
  );
}

export default AuthContainer;
