import {AppRoutes, LOGIN_ROOT_CLASS, MAIN_ROOT_CLASS, SortOptions} from './const';
import {Offer} from './types';

export const getClassesLayout = (pathname: AppRoutes) => {
  let classNameRoot = '';

  if (pathname === AppRoutes.Main) {
    classNameRoot = MAIN_ROOT_CLASS;
  }

  if (pathname === AppRoutes.Login) {
    classNameRoot = LOGIN_ROOT_CLASS;
  }

  return {classNameRoot};
};

export const sortBy = {
  [SortOptions.Popular]: (offers: Offer[]) => offers,
  [SortOptions.PriceLowToHigh]: (offers: Offer[]) => offers.sort((a, b) => a.price - b.price),
  [SortOptions.PriceHighToLow]: (offers: Offer[]) => offers.sort((a, b) => b.price - a.price),
  [SortOptions.RatingHighToLow]: (offers: Offer[]) => offers.sort((a, b) => b.rating - a.rating),
};
