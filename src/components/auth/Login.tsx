import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useLogin from './hooks/useLogin';
import useRegister from './hooks/useRegister';

export type LoginProps = {
  mode: string;
};

function Login({ mode }: LoginProps) {
  const {
    email,
    password,
    signUp,
    handleSubmit,
    registerError,
    EB,
    PB,
    helper,
    Passwordhelper,
  } = useLogin();

  return (
    <AuthForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      Passwordhelper={Passwordhelper}
      authError={registerError}
      auth="Register"
      isRegister="Sign up for an entity account?"
      linkTo="/signin"
      EB={EB}
      PB={PB}
      helper={helper}
      mode={mode}
    />
  );
}

export default Login;
