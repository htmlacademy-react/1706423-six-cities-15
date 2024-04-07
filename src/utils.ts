import {AppRoute, LOGIN_ROOT_CLASS, MAIN_ROOT_CLASS, SortOption} from './const';
import {CityTubs, Offer} from './types';

export const getClassesLayout = (pathname: AppRoute) => {
  let classNameRoot = '';

  if (pathname === AppRoute.Main) {
    classNameRoot = MAIN_ROOT_CLASS;
  }

  if (pathname === AppRoute.Login) {
    classNameRoot = LOGIN_ROOT_CLASS;
  }

  return {classNameRoot};
};

export const sortBy = {
  [SortOption.Popular]: (offers: Offer[]) => offers,
  [SortOption.PriceLowToHigh]: (offers: Offer[]) => offers.sort((a, b) => a.price - b.price),
  [SortOption.PriceHighToLow]: (offers: Offer[]) => offers.sort((a, b) => b.price - a.price),
  [SortOption.RatingHighToLow]: (offers: Offer[]) => offers.sort((a, b) => b.rating - a.rating),
};

export const getRandomCity = (cities: CityTubs) => cities[Math.floor(Math.random() * cities.length)];
