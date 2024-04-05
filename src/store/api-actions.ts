import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, AuthData, DataOffer, Offer, State, UserData, Comment, PostCommentProps, PostFavoriteProps} from '../types';
import {ApiRoute} from '../const';
import {removeToken, setToken} from '../services/token';

export const fetchOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    return data;
  }
);

export const fetchOffer = createAsyncThunk<DataOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<DataOffer>(`${ApiRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearestOffers = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearestOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);
    return data;
  }
);

export const postComment = createAsyncThunk<Comment, PostCommentProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comments/postComment',
  async ({id, review}, {extra: api}) => {
    const {data} = await api.post<Comment>(`${ApiRoute.Comments}/${id}`, review);
    return data;
  }
);

export const checkAuth = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    setToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    removeToken();
  }
);

export const fetchFavorites = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorite);
    return data;
  }
);

export const toggleFavorite = createAsyncThunk<PostFavoriteProps, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/toggleFavorite',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${ApiRoute.Favorite}/${offerId}/${status}`);
    return {offer: data, status};
  }
);
