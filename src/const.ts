export const CITIES_TABS = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
  },
] as const;

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
export const MAX_COMMENT_SYMBOLS = 300;
export const MIN_COMMENT_SYMBOLS = 50;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';
export const MAX_REVIEWS = 10;

export enum ClassNames {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
  OfferMap = 'offer',
}

export enum ClassNameLogo {
  Header = 'header',
  Footer = 'footer',
}

export enum AppRoutes {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Login = '/login',
  NotFound = '*',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
