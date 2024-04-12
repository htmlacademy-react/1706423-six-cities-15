import {AuthStatus, RequestStatus} from '../../const';
import {checkAuth, login, logout} from '../api-actions';
import {makeFakeUser} from '../../utils/mocks';
import {userSlice} from './user-slice';

describe('User Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userData: null,
      status: RequestStatus.Idle,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userData: null,
      status: RequestStatus.Idle,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "checkAuth.pending"', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userData: null,
      status: RequestStatus.Loading,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, checkAuth.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuth.fulfilled" action', () => {
    const user = makeFakeUser();
    const expectedState = {
      authStatus: AuthStatus.Auth,
      userData: user,
      status: RequestStatus.Success,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, checkAuth.fulfilled(user, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "checkAuth.rejected', () => {
    const expectedState = {
      authStatus: AuthStatus.NoAuth,
      userData: null,
      status: RequestStatus.Failed,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(undefined, checkAuth.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" and "hasErrorLogin" to "RequestStatus.Loading" with "login.pending"', () => {
    const expectedState = {
      authStatus: AuthStatus.Unknown,
      userData: null,
      status: RequestStatus.Loading,
      hasErrorLogin: RequestStatus.Loading,
    };

    const result = userSlice.reducer(undefined, login.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "login.fulfilled" action', () => {
    const user = makeFakeUser();
    const userData = {email: user.email, password: 'w2'};
    const expectedState = {
      authStatus: AuthStatus.Auth,
      userData: user,
      status: RequestStatus.Success,
      hasErrorLogin: RequestStatus.Success,
    };

    const result = userSlice.reducer(undefined, login.fulfilled(user, '', userData));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "login.rejected" action', () => {
    const expectedState = {
      authStatus: AuthStatus.NoAuth,
      userData: null,
      status: RequestStatus.Failed,
      hasErrorLogin: RequestStatus.Failed,
    };

    const result = userSlice.reducer(undefined, login.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logout.fulfilled" action', () => {
    const user = makeFakeUser();
    const initialState = {
      authStatus: AuthStatus.Auth,
      userData: user,
      status: RequestStatus.Idle,
      hasErrorLogin: RequestStatus.Idle,
    };
    const expectedState = {
      authStatus: AuthStatus.NoAuth,
      userData: null,
      status: RequestStatus.Success,
      hasErrorLogin: RequestStatus.Idle,
    };

    const result = userSlice.reducer(initialState, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
