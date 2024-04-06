import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus, RequestStatus} from '../../const';
import {checkAuth, login, logout} from '../api-actions';
import {UserData} from '../../types';

type UserState = {
  authStatus: AuthStatus;
  userData: UserData | null;
  status: RequestStatus;
}

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  userData: null,
  status: RequestStatus.Idle,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.status = RequestStatus.Failed;
      })
      .addCase(login.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.status = RequestStatus.Failed;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userData = null;
        state.status = RequestStatus.Success;
      });
  },
  selectors: {
    user: (state: UserState) => state.userData,
    authStatus: (state: UserState) => state.authStatus,
    email: (state: UserState) => state.userData?.email,
    status: (state: UserState) => state.status,
  }
});

const userSelectors = userSlice.selectors;

export {userSlice, userSelectors};
