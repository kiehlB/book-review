import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useLogin from './hooks/useLogin';

export type LoginProps = {
  mode: string;
};

function Login({ mode }: LoginProps) {
  const { email, password, LoginError, handleSubmit, EB, PB, helper, Passwordhelper } =
    useLogin();

  return (
    <AuthForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      Passwordhelper={Passwordhelper}
      authError={LoginError}
      auth="Loign"
      isRegister="Sign up for an entity account?"
      linkTo="/signin"
      EB={EB}
      PB={PB}
      helper={helper}
      mode={mode}
      error={LoginError}
    />
  );
}

export default Login;
