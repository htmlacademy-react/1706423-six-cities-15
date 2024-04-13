import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {userEvent} from '@testing-library/user-event';
import {withStore} from '../../utils/mock-component';
import {extractActionsTypes, makeFakeStore, makeFakeUser} from '../../utils/mocks';
import HeaderNav from './header-nav';
import {ApiRoute, AuthStatus, RequestStatus} from '../../const';
import {fetchOffers, logout} from '../../store/api-actions';

describe('Component: HeaderNav', () => {
  it('should render correct', () => {
    const expectedTestID = 'header-nav';

    const {withStoreComponent} = withStore(<HeaderNav />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });

  it('should dispatch "logout" when user clicked "sign out"', async () => {
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(<HeaderNav />, makeFakeStore({
      user: {
        authStatus: AuthStatus.Auth,
        userData: makeFakeUser(),
        status: RequestStatus.Success,
        hasErrorLogin: RequestStatus.Success,
      },
    }));
    mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByText('Sign out'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      logout.pending.type,
      logout.fulfilled.type,
      fetchOffers.pending.type,
      fetchOffers.rejected.type,
    ]);
  });
});
