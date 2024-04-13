import {Offer, Comment, DataOffer, UserData} from '../types';
import { Action } from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {createApi} from '../services/api';
import {State} from '../types';
import { AuthStatus, RequestStatus } from '../const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeOffer = (isFavorite: boolean): Offer => (
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: isFavorite,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  }
);

export const makeFakeOfferPage = (isFavorite: boolean): DataOffer => (
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: isFavorite,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4
  }
);

export const makeFakeComment = (): Comment => (
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  }
);

export const makeFakeUser = (): UserData => (
  {
    name: 'Oliver Conner',
    avatarUrl: 'https://url-to-image/image.png',
    isPro: false,
    email: 'Oliver.conner@gmail.com',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  }
);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  offers: {
    offers: [],
    status: RequestStatus.Idle,
  },
  offer: {
    offer: null,
    status: RequestStatus.Idle,
  },
  nearestOffers: {
    nearestOffers: [],
    status: RequestStatus.Idle,
  },
  favorites: {
    offers: [],
    status: RequestStatus.Idle,
  },
  comments: {
    comments: [],
    status: RequestStatus.Idle,
    postCommentStatus: RequestStatus.Idle,
  },
  user: {
    authStatus: AuthStatus.Unknown,
    userData: null,
    status: RequestStatus.Idle,
    hasErrorLogin: RequestStatus.Idle,
  },
  ...initialState ?? {},
});
