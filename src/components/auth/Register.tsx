import Link from 'next/link';
import { FormEvent } from 'react';
import LabelInput from '../common/LabelInput';
import Modal from '../common/Modal';
import AuthForm from './authForm';
import useRegister from './hooks/useRegister';

export type SignUpProps = {};

function SignUp({}: SignUpProps) {
  const { inputs, handleChange, signUp, handleSubmit, registerError } = useRegister();

  return (
    <Modal visible={true}>
      <div className="flex justify-center py-3">회원가입</div>
      <AuthForm
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        authError={registerError}
        auth="Register"
        isRegister="Sign up for an entity account?"
        linkTo="/signin"
      />
    </Modal>
  );
}

export default SignUp;
