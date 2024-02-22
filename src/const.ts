export const CITIES = [
  {
    name: 'Paris',
    isActive: false,
  },
  {
    name: 'Cologne',
    isActive: false,
  },
  {
    name: 'Brussels',
    isActive: true,
  },
  {
    name: 'Amsterdam',
    isActive: false,
  },
  {
    name: 'Hamburg',
    isActive: false,
  },
  {
    name: 'Dusseldorf',
    isActive: false,
  },
];

export const SORT_ITEMS = [
  {
    item: 'Popular',
    isActive: true,
  },
  {
    item: 'Price: low to high',
    isActive: false,
  },
  {
    item: 'Price: high to low',
    isActive: false,
  },
  {
    item: 'Top rated first',
    isActive: false,
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
