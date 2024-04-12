import {PayloadAction, createSlice} from '@reduxjs/toolkit';
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

type PayloadOfferProps = {
  id: string;
  isFavorite: boolean;
}

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    changeFavorite: (state, action: PayloadAction<PayloadOfferProps>) => {
      if (state.offer?.id === action.payload.id) {
        state.offer.isFavorite = action.payload.isFavorite;
      }
    },
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
const offerActions = offerSlice.actions;

export {offerSlice, offerSelectors, offerActions};
