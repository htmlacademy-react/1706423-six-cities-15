import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES_TABS} from '../../const';
import {CityTubs} from '../../types';

type CityState = {
  city: CityTubs[number];
}

const initialState: CityState = {
  city: CITIES_TABS[0],
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityState>) => {
      state.city = action.payload.city;
    },
  },
});

export const {changeCity} = citySlice.actions;
