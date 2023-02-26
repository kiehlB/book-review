import { useInput } from '@nextui-org/react';
import Link from 'next/link';
import React, { FormEvent, useContext, useState } from 'react';
import ModalContext from '../../context/modalContext';
import Modal from '../common/Modal';
import useRegister from './hooks/useRegister';
import Login from './Login';
import Register from './Register';

export type AuthContainerProps = {};

function AuthContainer({}: AuthContainerProps) {
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);

  return (
    <Modal visible={IsClose} onClose={SetIsClose} className="w-[618px] h-[740px] ">
      <div className="flex justify-center py-6 text-[#212529] text-[1.3125rem] font-semibold dark:text-[#e4e5e7]">
        {mode == 'register' ? '회원가입' : '로그인'}
      </div>
      {mode == 'register' ? <Register mode={mode} /> : <Login mode={mode} />}
      <div className="mt-auto mmx:hidden">
        <div className="shelf">
          <div className="shelf w-full sm:w-[616px] mmx:hidden">
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
            <div className="book sm:hidden"></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AuthContainer;
