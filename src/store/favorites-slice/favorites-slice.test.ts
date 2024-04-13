import {RequestStatus} from '../../const';
import {fetchFavorites, toggleFavorite} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';
import {favoritesSlice} from './favorites-slice';

describe('Favorite Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      status: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      status: RequestStatus.Idle,
    };

    const result = favoritesSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "fetchFavorites.pending"', () => {
    const expectedState = {
      offers: [],
      status: RequestStatus.Loading,
    };

    const result = favoritesSlice.reducer(undefined, fetchFavorites.pending('', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers, "status" to "RequestStatus.Success" with "fetchFavorites.fulfilled"', () => {
    const mockOffer = makeFakeOffer(true);
    const expectedState = {
      offers: [mockOffer],
      status: RequestStatus.Success,
    };

    const result = favoritesSlice.reducer(undefined, fetchFavorites.fulfilled([mockOffer], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "fetchFavorites.rejected', () => {
    const expectedState = {
      offers: [],
      status: RequestStatus.Failed,
    };

    const result = favoritesSlice.reducer(undefined, fetchFavorites.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "toggleFavorite.pending"', () => {
    const mockOffer = makeFakeOffer(false);
    const favoriteData = {
      offerId: mockOffer.id,
      status: 1,
    };
    const expectedState = {
      offers: [],
      status: RequestStatus.Loading,
    };

    const result = favoritesSlice.reducer(undefined, toggleFavorite.pending('', favoriteData));

    expect(result).toEqual(expectedState);
  });

  it('should add "offer" to array with offers, "status" to "RequestStatus.Success" with "toggleFavorite.fulfilled"', () => {
    const mockOffer = makeFakeOffer(false);
    const favoriteData = {
      offerId: mockOffer.id,
      status: 1,
    };
    const initialState = {
      offers: [],
      status: RequestStatus.Success,
    };
    const expectedState = {
      offers: [mockOffer],
      status: RequestStatus.Success,
    };

    const result = favoritesSlice.reducer(initialState, toggleFavorite.fulfilled({offer: mockOffer, status: 1}, '', favoriteData));

    expect(result).toEqual(expectedState);
  });

  it('should remove "offer" to array with offers, "status" to "RequestStatus.Success" with "toggleFavorite.fulfilled"', () => {
    const mockOffer = makeFakeOffer(true);
    const favoriteData = {
      offerId: mockOffer.id,
      status: 0,
    };
    const initialState = {
      offers: [mockOffer],
      status: RequestStatus.Success,
    };
    const expectedState = {
      offers: [],
      status: RequestStatus.Success,
    };

    const result = favoritesSlice.reducer(initialState, toggleFavorite.fulfilled({offer: mockOffer, status: 0}, '', favoriteData));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "toggleFavorite.rejected', () => {
    const mockOffer = makeFakeOffer(false);
    const favoriteData = {
      offerId: mockOffer.id,
      status: 1,
    };
    const expectedState = {
      offers: [],
      status: RequestStatus.Failed,
    };

    const result = favoritesSlice.reducer(undefined, toggleFavorite.rejected(null, '', favoriteData));

    expect(result).toEqual(expectedState);
  });
});
