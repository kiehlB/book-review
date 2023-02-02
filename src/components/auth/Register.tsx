import React, { useMemo, useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import useRegister from './hooks/useRegister';

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
  } = useRegister();

  return (
    <AuthForm
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
