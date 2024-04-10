import {memo} from 'react';
import {AppRoute, AuthStatus, BookmarkButtonClass, IMAGE_SIZE, RequestStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/slices/user-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useNavigate} from 'react-router-dom';
import {toggleFavorite} from '../../store/api-actions';
import {favoritesSelectors} from '../../store/slices/favorites-slice';
import {offersActions} from '../../store/slices/offers-slice';
import {offerActions} from '../../store/slices/offer-slice';
import { nearestOffersActions } from '../../store/slices/nearestOffers-slice';

type BookmarkButtonProps = {
  isFavorite: boolean;
  offerId: string;
  className: BookmarkButtonClass;
}

const BookmarkButton = memo(({offerId, isFavorite, className}:BookmarkButtonProps): JSX.Element => {
  const authStatus = useAppSelector(userSelectors.authStatus);
  const requestStatus = useAppSelector(favoritesSelectors.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(toggleFavorite({offerId, status: Number(!isFavorite)}))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            dispatch(offerActions.changeFavorite({id: offerId, isFavorite: !isFavorite}));
            dispatch(offersActions.changeFavoriteOffer({id: offerId, isFavorite: !isFavorite}));
            dispatch(nearestOffersActions.changeFavoriteOffer({id: offerId, isFavorite: !isFavorite}));
          }
        });
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      disabled={requestStatus === RequestStatus.Loading}
      onClick={handleButtonClick}
      className={`${className}__bookmark-button button ${
        isFavorite ? `${className}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={`${className === BookmarkButtonClass.Offer ? IMAGE_SIZE.offerIcon.width : IMAGE_SIZE.cardIcon.width}`}
        height={`${className === BookmarkButtonClass.Offer ? IMAGE_SIZE.offerIcon.height : IMAGE_SIZE.cardIcon.height}`}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmarks`}</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
