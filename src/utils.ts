import {AppRoute, CITIES_TABS, FAVORITE_EMPTY_ROOT_CLASS, LOGIN_ROOT_CLASS, MAIN_ROOT_CLASS, SortOption} from './const';
import {CityTubs, Offer} from './types';

export const getClassesLayout = (pathname: AppRoute, isEmpty: boolean) => {
  let classNameRoot = '';

  const mainPath = CITIES_TABS.map((city) => `/${city.id}`);

  if (mainPath.includes(pathname)) {
    classNameRoot = MAIN_ROOT_CLASS;
  }

  if (pathname === AppRoute.Login) {
    classNameRoot = LOGIN_ROOT_CLASS;
  }

  if (pathname === AppRoute.Favorites && isEmpty) {
    classNameRoot = FAVORITE_EMPTY_ROOT_CLASS;
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
