import {createSlice} from '@reduxjs/toolkit';
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

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
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
  }
});
