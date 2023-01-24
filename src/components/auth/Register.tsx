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
    EB,
    PB,
    helper,
    Passwordhelper,
  } = useRegister();

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

export default Register;
