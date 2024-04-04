import {createSlice} from '@reduxjs/toolkit';
import {DataOffer} from '../../types';
import {fetchOffer} from '../api-actions';
import {RequestStatus} from '../../const';

type OfferState = {
  offer: DataOffer | null;
  status: RequestStatus;
}

const initialState: OfferState = {
  offer: null,
  status: RequestStatus.Idle,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    offer: (state: OfferState) => state.offer,
    status: (state: OfferState) => state.status,
  }
});

const offerSelectors = offerSlice.selectors;

export {offerSlice, offerSelectors};
