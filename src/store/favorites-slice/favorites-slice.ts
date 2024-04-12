import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus} from '../../const';
import {fetchFavorites, toggleFavorite} from '../api-actions';
import {Offer} from '../../types';

type FavoritesState = {
  offers: Offer[];
  status: RequestStatus;
}

const initialState: FavoritesState = {
  offers: [],
  status: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload.status) {
          state.offers.push(action.payload.offer);
        } else {
          state.offers = state.offers.filter((offer) => offer.id !== action.payload.offer.id);
        }
        state.status = RequestStatus.Success;
      })
      .addCase(toggleFavorite.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
  selectors: {
    offers: (state: FavoritesState) => state.offers,
    status: (state: FavoritesState) => state.status,
  }
});

const favoritesSelectors = favoritesSlice.selectors;

export {favoritesSlice, favoritesSelectors};
