import {render, screen} from '@testing-library/react';
import {Route, Routes, MemoryRouter} from 'react-router-dom';
import {AppRoute, AuthStatus, RequestStatus} from '../../const';
import PrivateRoute from './private-route';
import {withStore} from '../../utils/mock-component';
import {makeFakeStore, makeFakeUser} from '../../utils/mocks';

describe('Component: PrivateRoute', () => {

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';

    const {withStoreComponent: withStorePrivateRoute} = withStore((
      <PrivateRoute>
        <span>{notExpectedText}</span>
      </PrivateRoute>
    ), makeFakeStore({
      user: {
        authStatus: AuthStatus.NoAuth,
        userData: null,
        status: RequestStatus.Failed,
        hasErrorLogin: RequestStatus.Idle,
      }
    }));

    const preparedComponent = (
      <MemoryRouter initialEntries={[AppRoute.Favorites]}>
        <Routes>
          <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
          <Route path={AppRoute.Favorites} element={withStorePrivateRoute} />
        </Routes>
      </MemoryRouter>
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';

    const {withStoreComponent: withStorePrivateRoute} = withStore((
      <PrivateRoute>
        <span>{expectedText}</span>
      </PrivateRoute>
    ), makeFakeStore({
      user: {
        authStatus: AuthStatus.Auth,
        userData: makeFakeUser(),
        status: RequestStatus.Success,
        hasErrorLogin: RequestStatus.Success,
      }
    }));
    const preparedComponent = (
      <MemoryRouter initialEntries={[AppRoute.Favorites]}>
        <Routes>
          <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
          <Route path={AppRoute.Favorites} element={withStorePrivateRoute} />
        </Routes>
      </MemoryRouter>
    );

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
