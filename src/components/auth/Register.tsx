import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useRegister from './hooks/useRegister';

export type RegisterProps = {
  mode: string;
};

function Register({ mode }: RegisterProps) {
  const {
    email,
    password,
    signUp,
    handleSubmit,
    registerError,
    handleChange,
    Passwordhelper,
    Emailhelper,
  } = useRegister();

  return (
    <AuthForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      authError={registerError}
      auth="Register"
      isRegister="Sign up for an entity account?"
      linkTo="/signin"
      mode={mode}
      error={registerError}
      handleChange={handleChange}
      Passwordhelper={Passwordhelper}
      Emailhelper={Emailhelper}
    />
  );
}

export default Register;
