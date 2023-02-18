import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useLogin from './hooks/useLogin';

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
