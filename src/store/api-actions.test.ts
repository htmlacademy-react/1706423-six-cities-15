import {configureMockStore} from '@jedmao/redux-mock-store';
import {createApi} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {AppThunkDispatch, extractActionsTypes, makeFakeOffer, makeFakeComment, makeFakeOfferPage} from '../utils/mocks';
import {State, AuthData} from '../types';
import {checkAuth, fetchOffers, login, logout, fetchNearestOffers, fetchComments, fetchFavorites, fetchOffer, postComment, toggleFavorite} from './api-actions';
import {ApiRoute} from '../const';
import * as tokenStorage from '../services/token';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({offers: {offers: []}});
  });

  describe('checkAuth', () => {
    it('should dispatch "checkAuth.pending" and "checkAuth.fulfilled" with thunk "checkAuth', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(200);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuth.pending" and "checkAuth.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(ApiRoute.Login).reply(400);

      await store.dispatch(checkAuth());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.rejected.type,
      ]);
    });
  });

  describe('fetchOffers', () => {
    it('should dispatch "fetchOffers.pending", "fetchOffers.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOffer(false)];
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffers.pending.type,
        fetchOffers.fulfilled.type,
      ]);

      expect(fetchOffersFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchOffers.pending", "fetchOffers.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffers());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffers.pending.type,
        fetchOffers.rejected.type,
      ]);
    });
  });

  describe('fetchOffer', () => {
    it('should dispatch "fetchOffer.pending", "fetchOffer.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOfferPage(false);
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockOffer.id}`).reply(200, mockOffer);

      await store.dispatch(fetchOffer(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffer.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffer.pending.type,
        fetchOffer.fulfilled.type,
      ]);

      expect(fetchOfferFulfilled.payload)
        .toEqual(mockOffer);
    });

    it('should dispatch "fetchOffer.pending", "fetchOffer.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOfferPage(false);
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockOffer.id}`).reply(400, null);

      await store.dispatch(fetchOffer(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffer.pending.type,
        fetchOffer.rejected.type,
      ]);
    });
  });

  describe('login', () => {
    it('should dispatch "login.pending", "login.fulfilled" when server response 200', async() => {
      const fakeUser: AuthData = {email: 'test@test.ru', password: '123456'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(login(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        login.pending.type,
        login.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUser: AuthData = {email: 'test@test.ru', password: '123456'};
      const fakeServerReplay = {token: 'secret'};
      mockAxiosAdapter.onPost(ApiRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'setToken');

      await store.dispatch(login(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('logout', () => {
    it('should dispatch "logout.pending", "logout.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);

      await store.dispatch(logout());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logout.pending.type,
        logout.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logout"', async () => {
      mockAxiosAdapter.onDelete(ApiRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'removeToken');

      await store.dispatch(logout());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });

  describe('fetchNearestOffers', () => {
    it('should dispatch "fetchNearestOffers.pending", "fetchNearestOffers.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOffer(false);
      const mockOffers = [mockOffer];
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockOffer.id}/nearby`).reply(200, mockOffers);

      await store.dispatch(fetchNearestOffers(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchNearestOffersFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearestOffers.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearestOffers.pending.type,
        fetchNearestOffers.fulfilled.type,
      ]);

      expect(fetchNearestOffersFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchNearestOffers.pending", "fetchNearestOffers.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer(false);
      mockAxiosAdapter.onGet(`${ApiRoute.Offers}/${mockOffer.id}/nearby`).reply(400, []);

      await store.dispatch(fetchNearestOffers(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchNearestOffers.pending.type,
        fetchNearestOffers.rejected.type,
      ]);
    });
  });

  describe('fetchComments', () => {
    it('should dispatch "fetchComments.pending", "fetchComments.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOffer(false);
      const mockComment = makeFakeComment();
      const mockComments = [mockComment];
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${mockOffer.id}`).reply(200, mockComments);

      await store.dispatch(fetchComments(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsFulfilled = emittedActions.at(1) as ReturnType<typeof fetchComments.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchComments.pending.type,
        fetchComments.fulfilled.type,
      ]);

      expect(fetchCommentsFulfilled.payload)
        .toEqual(mockComments);
    });

    it('should dispatch "fetchComments.pending", "fetchComments.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer(false);
      mockAxiosAdapter.onGet(`${ApiRoute.Comments}/${mockOffer.id}`).reply(400, []);

      await store.dispatch(fetchComments(mockOffer.id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchComments.pending.type,
        fetchComments.rejected.type,
      ]);
    });
  });

  describe('postComment', () => {
    it('should dispatch "postComment.pending", "postComment.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOffer(false);
      const mockComment = makeFakeComment();
      const mockCommentData = {
        id: mockOffer.id,
        review: {
          rating: mockComment.rating,
          comment: mockComment.comment,
        },
      };
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/${mockOffer.id}`).reply(200, mockComment);

      await store.dispatch(postComment(mockCommentData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postCommentFulfilled = emittedActions.at(1) as ReturnType<typeof postComment.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postComment.pending.type,
        postComment.fulfilled.type,
      ]);

      expect(postCommentFulfilled.payload)
        .toEqual(mockComment);
    });

    it('should dispatch "postComment.pending", "postComment.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer(false);
      const mockComment = makeFakeComment();
      const mockCommentData = {
        id: mockOffer.id,
        review: {
          rating: mockComment.rating,
          comment: mockComment.comment,
        },
      };
      mockAxiosAdapter.onPost(`${ApiRoute.Comments}/${mockOffer.id}`).reply(400, null);

      await store.dispatch(postComment(mockCommentData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postComment.pending.type,
        postComment.rejected.type,
      ]);
    });
  });

  describe('fetchFavorites', () => {
    it('should dispatch "fetchFavorites.pending", "fetchFavorites.fulfilled", when server response 200', async() => {
      const mockOffers = [makeFakeOffer(true)];
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(200, mockOffers);

      await store.dispatch(fetchFavorites());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoritesFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavorites.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.fulfilled.type,
      ]);

      expect(fetchFavoritesFulfilled.payload)
        .toEqual(mockOffers);
    });

    it('should dispatch "fetchFavorites.pending", "fetchFavorites.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavorites());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorites.pending.type,
        fetchFavorites.rejected.type,
      ]);
    });
  });

  describe('toggleFavorite', () => {
    it('should dispatch "toggleFavorite.pending", "toggleFavorite.fulfilled", when server response 200', async() => {
      const mockOffer = makeFakeOffer(true);
      const mockFavoriteData = {
        offerId: mockOffer.id,
        status: 1,
      };
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/${mockOffer.id}/${1}`).reply(200, mockOffer);

      await store.dispatch(toggleFavorite(mockFavoriteData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const toggleFavoriteFulfilled = emittedActions.at(1) as ReturnType<typeof toggleFavorite.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.fulfilled.type,
      ]);

      expect(toggleFavoriteFulfilled.payload)
        .toEqual({offer: mockOffer, status: 1});
    });

    it('should dispatch "toggleFavorite.pending", "toggleFavorite.rejected" when server response 400', async () => {
      const mockOffer = makeFakeOffer(false);
      const mockFavoriteData = {
        offerId: mockOffer.id,
        status: 1,
      };
      mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/${mockOffer.id}/${1}`).reply(400, null);

      await store.dispatch(toggleFavorite(mockFavoriteData));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        toggleFavorite.pending.type,
        toggleFavorite.rejected.type,
      ]);
    });
  });
});
