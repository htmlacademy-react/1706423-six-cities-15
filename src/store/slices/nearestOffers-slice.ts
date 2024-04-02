import {createSlice} from '@reduxjs/toolkit';
import {Offer} from '../../types';
import {fetchNearestOffers} from '../api-actions';
import {RequestStatus} from '../../const';

type OffersState = {
  nearestOffers: Offer[];
  status: RequestStatus;
}

const initialState: OffersState = {
  nearestOffers: [],
  status: RequestStatus.Idle,
};

export const nearestOffersSlice = createSlice({
  name: 'nearestOffers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearestOffers.fulfilled, (state, action) => {
        state.nearestOffers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchNearestOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});
