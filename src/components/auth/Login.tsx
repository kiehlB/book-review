import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useLogin from './hooks/useLogin';

export type LoginProps = {
  mode: string;
};

function Login({ mode }: LoginProps) {
  const { email, password, LoginError, handleSubmit } = useLogin();

  return (
    <AuthForm
      email={email}
      password={password}
      handleSubmit={handleSubmit}
      authError={LoginError}
      auth="Loign"
      isRegister="Sign up for an entity account?"
      linkTo="/signin"
      mode={mode}
      error={LoginError}
    />
  );
}

export default Login;
