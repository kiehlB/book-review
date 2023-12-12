import AuthForm from './auth-form';
import useLogin from './hooks/use-login';

export default function Login() {
  const { signIn, error } = useLogin();

  return <AuthForm mode="login" login={signIn} error={error} />;
}
