import {createSlice} from '@reduxjs/toolkit';
import {DataOffer} from '../../types';
import {fetchOffer} from '../api-actions';

type OfferState = {
  offer: DataOffer | null;
  isOfferLoading: boolean;
  hasError: boolean;
}

const initialState: OfferState = {
  offer: null,
  isOfferLoading: false,
  hasError: false,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferLoading = false;
        state.hasError = true;
      });
  }
});
