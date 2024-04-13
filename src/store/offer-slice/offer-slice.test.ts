import {offerActions, offerSlice} from './offer-slice';
import {RequestStatus} from '../../const';
import {fetchOffer} from '../api-actions';
import {makeFakeOfferPage} from '../../utils/mocks';

describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offer: null,
      status: RequestStatus.Idle,
    };

    const result = offerSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offer: null,
      status: RequestStatus.Idle,
    };

    const result = offerSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Loading" with "fetchOffer.pending"', () => {
    const expectedState = {
      offer: null,
      status: RequestStatus.Loading,
    };

    const result = offerSlice.reducer(undefined, fetchOffer.pending('', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to state, "status" to "RequestStatus.Success" with "fetchOffer.fulfilled"', () => {
    const mockOffer = makeFakeOfferPage(false);
    const expectedState = {
      offer: mockOffer,
      status: RequestStatus.Success,
    };

    const result = offerSlice.reducer(undefined, fetchOffer.fulfilled(mockOffer, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "RequestStatus.Failed" with "fetchOffer.rejected', () => {
    const expectedState = {
      offer: null,
      status: RequestStatus.Failed,
    };

    const result = offerSlice.reducer(undefined, fetchOffer.rejected(null, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "offer.IsFavorite" to "true" with "changeFavorite", when IDs match', () => {
    const initialState = {
      offer: makeFakeOfferPage(false),
      status: RequestStatus.Success,
    };
    const expectedState = {
      offer: makeFakeOfferPage(true),
      status: RequestStatus.Success,
    };

    const result = offerSlice.reducer(
      initialState,
      offerActions.changeFavorite({id: makeFakeOfferPage(false).id, isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });

  it('should left "offers.IsFavorite" to "false" with "changeFavorite", when IDs don\'t match', () => {
    const initialState = {
      offer: makeFakeOfferPage(false),
      status: RequestStatus.Success,
    };
    const expectedState = {
      offer: makeFakeOfferPage(false),
      status: RequestStatus.Success,
    };

    const result = offerSlice.reducer(
      initialState,
      offerActions.changeFavorite({id: '1234', isFavorite: true}),
    );

    expect(result).toEqual(expectedState);
  });
});
