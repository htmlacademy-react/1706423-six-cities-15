import {combineReducers} from '@reduxjs/toolkit';
import {citySlice} from './slices/city-slice';
import {offersSlice} from './slices/offers-slice';
import {userSlice} from './slices/user-slice';
import {offerSlice} from './slices/offer-slice';
import {nearestOffersSlice} from './slices/nearestOffers-slice';
import {commentsSlice} from './slices/comments-slice';

export const rootReducer = combineReducers({
  city: citySlice.reducer,
  offers: offersSlice.reducer,
  user: userSlice.reducer,
  offer: offerSlice.reducer,
  nearestOffers: nearestOffersSlice.reducer,
  comments: commentsSlice.reducer,
});
