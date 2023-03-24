import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AuthForm, { AuthFormProps } from '../AuthForm';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../../lib/renderWithProviders';
import { HelmetProvider } from 'react-helmet-async';
import { registerMutation } from '../../../lib/graphql/users';

describe('AuthForm', () => {
  const setup = (props: Partial<AuthFormProps> = {}) => {
    const initialProps = {
      username: '',
      password: '',
      handleChange: () => {},
      handleSubmit: () => {},
      mode: 'register',
      auth: 'Register',
      SetMode: () => {},
    };
    return render(<AuthForm {...initialProps} {...props} />);
  };

  it('renders correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  describe('handles modes', () => {
    it('REGISTER', () => {
      const { getByTestId } = setup();
      const title = getByTestId('title');
      expect(title).toHaveTextContent('Register');
    });
    it('LOGIN', () => {
      const { getByTestId } = setup({ auth: 'Login' });
      const title = getByTestId('title');
      expect(title).toHaveTextContent('Login');
    });
  });
});

describe('AuthForm', () => {
  const Passwordhelper = {
    color: 'success',
    state: 'idle',
    text: '',
  };

  const Usernamehelper = {
    color: 'success',
    state: 'idle',
    text: '',
  };

  it('renders correctly', () => {
    const { getByLabelText } = render(
      <AuthForm Passwordhelper={Passwordhelper} Usernamehelper={Usernamehelper} />,
    );

    const usernameInput = getByLabelText('username');
    const passwordInput = getByLabelText('password');

    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });

    expect(usernameInput).toHaveValue('johndoe');
    expect(passwordInput).toHaveValue('1234');
  });

  it('handles form submission', () => {
    const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <AuthForm
        Passwordhelper={Passwordhelper}
        Usernamehelper={Usernamehelper}
        handleSubmit={handleSubmit}
      />,
    );

    const submitButton = getByTestId('title');

    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

describe('Register', () => {
  const setup = (props = {}, overrideMocks?: any) => {
    const initialProps = {
      username: 'woong',
      password: 'sample',
      mode: 'register',
      auth: 'register',
      handleChange: () => {},
      handleSubmit: () => {},

      Passwordhelper: {
        color: 'success',
        state: 'idle',
        text: '',
      },
      Usernamehelper: {
        color: 'success',
        state: 'idle',
        text: '',
      },
    };

    const utils = renderWithProviders(
      <HelmetProvider>
        <AuthForm {...initialProps} {...props} />
      </HelmetProvider>,
      {
        mocks: overrideMocks,
      },
    );
    return {
      ...utils,
    };
  };
  it('renders post correctly', async () => {
    const mocks = [
      {
        request: {
          query: registerMutation,
          variables: {
            username: 'woong',
            password: 'sample',
          },
        },
        result: {
          data: {
            register: { username: 'woong' },
          },
        },
      },
    ];

    const { getByText, getByAltText } = setup({}, mocks);

    const button = await screen.findByText('register');
    userEvent.click(button);
    const registerResponse = mocks[0].result.data.register;
    expect(registerResponse.username).toEqual('woong');
  });
});
