import {combineReducers} from '@reduxjs/toolkit';
import {citySlice} from './city-slice/city-slice';
import {offersSlice} from './offers-slice/offers-slice';
import {userSlice} from './user-slice/user-slice';

export const rootReducer = combineReducers({
  city: citySlice.reducer,
  offers: offersSlice.reducer,
  user: userSlice.reducer,
});
