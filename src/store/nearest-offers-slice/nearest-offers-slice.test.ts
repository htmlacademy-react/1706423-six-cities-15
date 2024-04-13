import {RequestStatus} from '../../const';
import {fetchNearestOffers} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';
import {nearestOffersActions, nearestOffersSlice} from './nearest-offers-slice';

describe('Nearest Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      nearestOffers: [],
      status: RequestStatus.Idle,
    };

    const result = nearestOffersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      nearestOffers: [],
      status: RequestStatus.Idle,
    };

    const result = nearestOffersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "fetchNearestOffers.pending"', () => {
    const expectedState = {
      nearestOffers: [],
      status: RequestStatus.Loading,
    };

    const result = nearestOffersSlice.reducer(undefined, fetchNearestOffers.pending('', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with "nearestOffers", "status" to "RequestStatus.Success" with "fetchNearestOffers.fulfilled"', () => {
    const mockOffer = makeFakeOffer(false);
    const expectedState = {
      nearestOffers: [mockOffer],
      status: RequestStatus.Success,
    };

    const result = nearestOffersSlice.reducer(undefined, fetchNearestOffers.fulfilled([mockOffer], '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "fetchNearestOffers.rejected', () => {
    const expectedState = {
      nearestOffers: [],
      status: RequestStatus.Failed,
    };

    const result = nearestOffersSlice.reducer(undefined, fetchNearestOffers.rejected(null, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "nearestOffers[0].IsFavorite" to "true" with "changeFavoriteOffer", when IDs match', () => {
    const initialState = {
      nearestOffers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };
    const expectedState = {
      nearestOffers: [makeFakeOffer(true)],
      status: RequestStatus.Success,
    };

    const result = nearestOffersSlice.reducer(
      initialState,
      nearestOffersActions.changeFavoriteOffer({id: makeFakeOffer(false).id, isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });

  it('should left "nearestOffers[0].IsFavorite" to "false" with "changeFavoriteOffer", when IDs don\'t match', () => {
    const initialState = {
      nearestOffers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };
    const expectedState = {
      nearestOffers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };

    const result = nearestOffersSlice.reducer(
      initialState,
      nearestOffersActions.changeFavoriteOffer({id: '1234', isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });
});
