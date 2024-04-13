import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {withStore} from '../../utils/mock-component';
import {extractActionsTypes, makeFakeOffer, makeFakeStore, makeFakeUser} from '../../utils/mocks';
import BookmarkButton from './bookmark-button';
import {ApiRoute, AuthStatus, BookmarkButtonClass, RequestStatus } from '../../const';
import {toggleFavorite} from '../../store/api-actions';
import {offersActions} from '../../store/offers-slice/offers-slice';
import {offerActions} from '../../store/offer-slice/offer-slice';
import {nearestOffersActions} from '../../store/nearest-offers-slice/nearest-offers-slice';

describe('Component: Bookmark Button', () => {
  const mockOffer = makeFakeOffer(false);
  const className = BookmarkButtonClass.Card;

  it('should render correct', () => {
    const expectedTestID = 'bookmark';

    const {withStoreComponent} = withStore(<BookmarkButton offerId={mockOffer.id} isFavorite={mockOffer.isFavorite} className={className} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });

  it('should dispatch "toggleFavorite" when user clicked button', async () => {
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(<BookmarkButton offerId={mockOffer.id} isFavorite={mockOffer.isFavorite} className={className} />, makeFakeStore({
      user: {
        authStatus: AuthStatus.Auth,
        userData: makeFakeUser(),
        status: RequestStatus.Success,
        hasErrorLogin: RequestStatus.Success,
      }
    }));
    mockAxiosAdapter.onPost(`${ApiRoute.Favorite}/${mockOffer.id}/1`).reply(200, mockOffer);

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByRole('button'));
    const actions = extractActionsTypes(mockStore.getActions());

    expect(actions).toEqual([
      toggleFavorite.pending.type,
      toggleFavorite.fulfilled.type,
      offerActions.changeFavorite.type,
      offersActions.changeFavoriteOffer.type,
      nearestOffersActions.changeFavoriteOffer.type,
    ]);

  });
});
