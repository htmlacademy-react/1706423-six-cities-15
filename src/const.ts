export const CITIES_TABS = [
  {
    id: 'paris',
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    id: 'cologne',
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    id: 'brussels',
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    id: 'dusseldorf',
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
  },
] as const;

export const SORT_ITEMS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export enum SortOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  RatingHighToLow = 'Top rated first',
}

export const IMAGE_SIZE = {
  card: {
    width: '260',
    height: '200',
  },
  cardFavorites: {
    width: '150',
    height: '110',
  },
  cardIcon: {
    width: '18',
    height: '19',
  },
  offerIcon: {
    width: '31',
    height: '33',
  }
} as const;

export const RATING = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
} as const;

export const STAR_WIDTH = 20;
export const MAX_OFFER_PAGE_CARDS = 3;
export const MAX_OFFER_IMAGES = 6;
export const MAIN_ROOT_CLASS = 'page--gray page--main';
export const LOGIN_ROOT_CLASS = 'page--gray page--login';
export const FAVORITE_EMPTY_ROOT_CLASS = 'page--favorites-empty';
export const FAVORITE_CARD_CLASS = 'favorites__card-info';
export const MAX_COMMENT_SYMBOLS = 300;
export const MIN_COMMENT_SYMBOLS = 50;
export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';
export const MAX_REVIEWS = 10;

export enum ClassName {
  Main = 'cities',
  Favorites = 'favorites',
  Offer = 'near-places',
  OfferMap = 'offer',
}

export enum ClassNameLogo {
  Header = 'header',
  Footer = 'footer',
}

export enum BookmarkButtonClass {
  Card = 'place-card',
  Offer = 'offer',
}

export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:offerId',
  Login = '/login',
  NotFound = '*',
}

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RequestStatus {Idle, Loading, Success, Failed}
