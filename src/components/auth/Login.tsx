import Link from 'next/link';
import { FormEvent } from 'react';
import Modal from '../common/Modal';
import AuthForm from './authForm';
import useRegister from './hooks/useRegister';

export type SignInProps = {};

function SignIn({}: SignInProps) {
  const { inputProps, handleSubmit, errors, setError } = useRegister({
    mode: 'register',
  });

  return (
    <Modal visible={true}>
      <AuthForm />
    </Modal>
  );
}

export default SignIn;
