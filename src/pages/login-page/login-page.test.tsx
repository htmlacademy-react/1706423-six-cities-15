import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {HelmetProvider} from 'react-helmet-async';
import {withStore} from '../../utils/mock-component';
import LoginPage from './login-page';
import {BrowserRouter} from 'react-router-dom';
import {AuthStatus, RequestStatus} from '../../const';
import {makeFakeStore} from '../../utils/mocks';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const expectedTestId = 'login-page';
    const {withStoreComponent} = withStore(<LoginPage />, makeFakeStore());

    render(
      <BrowserRouter>
        <HelmetProvider>
          {withStoreComponent}
        </HelmetProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailElementTestId = 'email';
    const passwordElementTestId = 'password';
    const expectedEmailValue = 'test@test.com';
    const expectedPasswordValue = 'qwerty123456';
    const {withStoreComponent} = withStore(<LoginPage />, {
      user: {
        authStatus: AuthStatus.NoAuth,
        userData: null,
        status: RequestStatus.Success,
        hasErrorLogin: RequestStatus.Idle,
      }
    });

    render(
      <BrowserRouter>
        <HelmetProvider>
          {withStoreComponent}
        </HelmetProvider>
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );
    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
