import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const';
import {checkAuth, loginUser, logoutUser} from '../api-actions';

const initialState = {
  authStatus: AuthStatus.Unknown,
  email: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.fulfilled, (state) => {
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authStatus = AuthStatus.Auth;
        state.email = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
      });
  }
});
