import {CITIES_TABS, SORT_ITEMS} from './const';
import {store} from './store';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  city: City;
  location: Location;
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  text: string;
  rating: number;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type DataOffer = {
  images: string[];
  goods: string[];
  host: Host;
  description: string;
  bedrooms: number;
  maxAdults: number;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type SortItems = typeof SORT_ITEMS;
export type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type CityTubs = typeof CITIES_TABS;
