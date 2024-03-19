import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types';

type OffersState = {
  offers: Offer[];
}

const initialState: OffersState = {
  offers: [],
};

export const offersReducer = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    getOffers: (state, action: PayloadAction<{offers: Offer[]}>) => {
      state.offers = action.payload.offers;
    }
  }
});

export const {getOffers} = offersReducer.actions;
