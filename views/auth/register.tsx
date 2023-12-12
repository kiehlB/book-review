import AuthForm from './auth-form';
import useRegister from './hooks/use-register';

export default function Register() {
  const { signUp, registerError } = useRegister();

  return <AuthForm mode="register" register={signUp} error={registerError} />;
}
