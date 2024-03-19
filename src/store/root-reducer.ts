import {combineReducers} from '@reduxjs/toolkit';
import {cityReducer} from './city-reducer/city-reducer';
import {offersReducer} from './offers-reducer/offers-reducer';

export const rootReducer = combineReducers({
  city: cityReducer.reducer,
  offers: offersReducer.reducer,
});
