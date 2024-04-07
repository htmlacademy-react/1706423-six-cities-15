import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types';
import {fetchOffers} from '../api-actions';
import {RequestStatus} from '../../const';

type OffersState = {
  offers: Offer[];
  status: RequestStatus;
}

const initialState: OffersState = {
  offers: [],
  status: RequestStatus.Idle,
};

type PayloadProps = {
  id: string;
  isFavorite: boolean;
}

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeFavoriteOffer: (state, action: PayloadAction<PayloadProps>) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers[index].isFavorite = action.payload.isFavorite;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    offers: (state: OffersState) => state.offers,
    status: (state: OffersState) => state.status,
  }
});

const offersSelectors = offersSlice.selectors;
const offersActions = offersSlice.actions;

export {offersSlice, offersSelectors, offersActions};
