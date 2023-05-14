import React, { useMemo, useState, useEffect } from 'react';
import useRegister from './hooks/useRegister';
import AuthForm from './auth-form';

export type RegisterProps = {
  mode: string;
};

function Register({ mode }: RegisterProps) {
  const {
    username,
    password,
    signUp,
    handleSubmit,
    registerError,
    handleChange,
    Passwordhelper,
    Usernamehelper,
    SetMode,
  } = useRegister();

  return (
    <AuthForm
      SetMode={SetMode}
      username={username}
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
      Usernamehelper={Usernamehelper}
    />
  );
}

export default Register;
