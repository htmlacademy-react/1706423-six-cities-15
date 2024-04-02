import {createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types';
import {fetchOffers} from '../api-actions';

type OffersState = {
  offers: Offer[];
  isOffersLoading: boolean;
  hasError: boolean;
}

const initialState: OffersState = {
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      });
  }
});
