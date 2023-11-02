import React, { useMemo, useState, useEffect } from 'react';
import useLogin from './hooks/use-login';
import AuthForm from './auth-form';

export type LoginProps = {
  mode: string;
};

function Login({ mode }: LoginProps) {
  const {
    username,
    password,
    LoginError,
    handleSubmit,
    Passwordhelper,
    Usernamehelper,
    handleChange,
    SetMode,
  } = useLogin();

  return (
    <AuthForm
      SetMode={SetMode}
      username={username}
      password={password}
      handleSubmit={handleSubmit}
      authError={LoginError}
      auth="Loign"
      isRegister="Sign up for an entity account?"
      linkTo="/signin"
      mode={mode}
      error={LoginError}
      handleChange={handleChange}
      Passwordhelper={Passwordhelper}
      Usernamehelper={Usernamehelper}
    />
  );
}

export default Login;
