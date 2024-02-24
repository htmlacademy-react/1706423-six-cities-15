export const CITIES_TABS = [
  {
    name: 'Paris',
  },
  {
    name: 'Cologne',
    isActive: true,
  },
  {
    name: 'Brussels',
  },
  {
    name: 'Amsterdam',
  },
  {
    name: 'Hamburg',
  },
  {
    name: 'Dusseldorf',
  },
];

export const SORT_ITEMS = [
  {
    item: 'Popular',
    isActive: true,
  },
  {
    item: 'Price: low to high',
  },
  {
    item: 'Price: high to low',
  },
  {
    item: 'Top rated first',
  },
];

export const STAR_WIDTH = 20;

export const MAX_OFFER_PAGE_CARDS = 3;

export enum ClassNameCards {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
}

export enum AppRoutes {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Login = '/login',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}