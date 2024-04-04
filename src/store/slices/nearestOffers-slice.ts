import {createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types';
import {fetchNearestOffers} from '../api-actions';
import {RequestStatus} from '../../const';

type NearestOffersState = {
  nearestOffers: Offer[];
  status: RequestStatus;
}

const initialState: NearestOffersState = {
  nearestOffers: [],
  status: RequestStatus.Idle,
};

const nearestOffersSlice = createSlice({
  name: 'nearestOffers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearestOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearestOffers.fulfilled, (state, action) => {
        state.nearestOffers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchNearestOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    nearestOffers: (state: NearestOffersState) => state.nearestOffers,
    status: (state: NearestOffersState) => state.status,
  }
});

const nearestOffersSelectors = nearestOffersSlice.selectors;

export {nearestOffersSlice, nearestOffersSelectors};
