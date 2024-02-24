export type City = {
  name: string;
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
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  text: string;
  rating: number;
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
