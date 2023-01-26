import { useInput } from '@nextui-org/react';
import Link from 'next/link';
import React, { FormEvent, useContext, useState } from 'react';
import ModalContext from '../../context/modalContext';
import LabelInput from '../common/LabelInput';
import Modal from '../common/Modal';
import useRegister from './hooks/useRegister';
import Login from './Login';
import Register from './Register';

export type AuthContainerProps = {};

function AuthContainer({}: AuthContainerProps) {
  const { IsClose, SetIsClose, mode, SetMode } = useContext(ModalContext);

  return (
    <Modal
      visible={IsClose}
      onClose={SetIsClose}
      className="w-[618px] h-[680px] flex shadow-md bg-[#fff]">
      <div className="flex justify-center py-6 text-[#2b2b2b] text-[1.5rem]">
        {mode == 'register' ? '회원가입' : '로그인'}
      </div>
      {mode == 'register' ? <Register mode={mode} /> : <Login mode={mode} />}
      <div className="shelf mt-auto">
        <div className="shelf">
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
        </div>
      </div>
    </Modal>
  );
}

export default AuthContainer;
