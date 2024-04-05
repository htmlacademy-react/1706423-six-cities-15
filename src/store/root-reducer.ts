import {combineReducers} from '@reduxjs/toolkit';
import {citySlice} from './slices/city-slice';
import {offersSlice} from './slices/offers-slice';
import {userSlice} from './slices/user-slice';
import {offerSlice} from './slices/offer-slice';
import {nearestOffersSlice} from './slices/nearestOffers-slice';
import {commentsSlice} from './slices/comments-slice';
import {favoritesSlice} from './slices/favorites-slice';

export const rootReducer = combineReducers({
  [citySlice.name]: citySlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [nearestOffersSlice.name]: nearestOffersSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});
