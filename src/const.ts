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

export const IMG_CARD = {
  width: '260',
  height: '200',
};

export const IMG_CARD_FAVORITES = {
  width: '150',
  height: '110',
};

export const RATING = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const STAR_WIDTH = 20;
export const MAX_OFFER_PAGE_CARDS = 3;
export const MAIN_ROOT_CLASS = 'page--gray page--main';
export const LOGIN_ROOT_CLASS = 'page--gray page--login';
export const FAVORITE_CARD_CLASS = 'favorites__card-info';
export const MAX_RATING = 5;

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
