import {offersActions, offersSlice} from './offers-slice';
import {RequestStatus} from '../../const';
import {fetchOffers} from '../api-actions';
import {makeFakeOffer} from '../../utils/mocks';

describe('Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      status: RequestStatus.Idle,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: [],
      status: RequestStatus.Idle,
    };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "fetchOffers.pending"', () => {
    const expectedState = {
      offers: [],
      status: RequestStatus.Loading,
    };

    const result = offersSlice.reducer(undefined, fetchOffers.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers, "status" to "RequestStatus.Success" with "fetchOffers.fulfilled"', () => {
    const mockOffer = makeFakeOffer(false);
    const expectedState = {
      offers: [mockOffer],
      status: RequestStatus.Success,
    };

    const result = offersSlice.reducer(undefined, fetchOffers.fulfilled([mockOffer], '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "fetchOffers.rejected', () => {
    const expectedState = {
      offers: [],
      status: RequestStatus.Failed,
    };

    const result = offersSlice.reducer(undefined, fetchOffers.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "offers[0].IsFavorite" to "true" with "changeFavoriteOffer", when IDs match', () => {
    const initialState = {
      offers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };
    const expectedState = {
      offers: [makeFakeOffer(true)],
      status: RequestStatus.Success,
    };

    const result = offersSlice.reducer(
      initialState,
      offersActions.changeFavoriteOffer({id: makeFakeOffer(false).id, isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });

  it('should left "offers[0].IsFavorite" to "false" with "changeFavoriteOffer", when IDs don\'t match', () => {
    const initialState = {
      offers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };
    const expectedState = {
      offers: [makeFakeOffer(false)],
      status: RequestStatus.Success,
    };

    const result = offersSlice.reducer(
      initialState,
      offersActions.changeFavoriteOffer({id: '1234', isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });
});
