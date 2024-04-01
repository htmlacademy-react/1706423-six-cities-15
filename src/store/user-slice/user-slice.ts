import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const';
import {checkAuth, login, logout} from '../api-actions';
import { UserData } from '../../types';

type UserState = {
  authStatus: AuthStatus;
  userData: UserData | null;
}

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});
