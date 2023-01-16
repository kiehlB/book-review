import Link from 'next/link';
import { FormEvent, useContext, useState } from 'react';
import ModalContext from '../../context/modalContext';
import LabelInput from '../common/LabelInput';
import Modal from '../common/Modal';
import AuthForm from './authForm';
import useRegister from './hooks/useRegister';

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  const { inputs, handleChange, signUp, handleSubmit, registerError } = useRegister();
  const { IsClose, SetIsClose } = useContext(ModalContext);

  return (
    <Modal visible={IsClose} onClose={SetIsClose}>
      <div className="flex justify-center py-6 text-[#2b2b2b] text-[1.5rem]">
        회원가입
      </div>
      <AuthForm
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        authError={registerError}
        auth="Register"
        isRegister="Sign up for an entity account?"
        linkTo="/signin"
      />
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

export default SignUp;
