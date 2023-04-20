import React, { FormEvent, SetStateAction, useContext, useState } from 'react';

import Modal from '../common/Modal';
import Login from './Login';
import Register from './Register';

type Dispatch<A> = (value: A) => void;

export type AuthContainerProps = {
  IsClose: boolean;
  SetIsClose: Dispatch<SetStateAction<boolean>>;
  mode: string;
};

function AuthContainer({ IsClose, SetIsClose, mode }: AuthContainerProps) {
  return (
    <Modal visible={IsClose} onClose={SetIsClose} className="w-[618px] h-[740px] ">
      <header className="flex justify-center py-6 text-[#212529] text-[1.3125rem] font-semibold dark:text-[#e4e5e7]">
        <h1> {mode == 'register' ? '회원가입' : '로그인'}</h1>
      </header>
      {mode == 'register' ? <Register mode={mode} /> : <Login mode={mode} />}
      <footer className="mt-auto mmx:hidden">
        <section className="shelf">
          <div className="shelf w-full sm:w-[616px]">
            {[...Array(66)].map((_, i) => (
              <div className={`book ${i > 49 ? 'sm:hidden' : ''}`} key={i}></div>
            ))}
          </div>
        </section>
      </footer>
    </Modal>
  );
}

export default AuthContainer;
