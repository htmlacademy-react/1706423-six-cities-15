import {combineReducers} from '@reduxjs/toolkit';
import {offersSlice} from './offers-slice/offers-slice';
import {userSlice} from './user-slice/user-slice';
import {offerSlice} from './offer-slice/offer-slice';
import {nearestOffersSlice} from './nearest-offers-slice/nearest-offers-slice';
import {commentsSlice} from './comments-slice/comments-slice';
import {favoritesSlice} from './favorites-slice/favorites-slice';

export const rootReducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [nearestOffersSlice.name]: nearestOffersSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});
