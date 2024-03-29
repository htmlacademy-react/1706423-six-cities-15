import {createSlice} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const';
import {checkAuth} from '../api-actions';

const initialState = {
  authStatus: AuthStatus.NoAuth
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
      });
  }
});
