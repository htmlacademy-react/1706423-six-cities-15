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

export type DataOffer = Omit<Offer, 'previewImage'> & {
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

export type SortItem = {
  item: string;
  isActive?: boolean;
}

export type CityTab = {
  name: string;
  isActive?: boolean;
};

export type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
