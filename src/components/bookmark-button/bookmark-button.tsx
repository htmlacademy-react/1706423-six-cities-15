import {memo, useState} from 'react';
import {AppRoute, AuthStatus, BookmarkButtonClass, IMAGE_SIZE, RequestStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/slices/user-slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useNavigate} from 'react-router-dom';
import {toggleFavorite} from '../../store/api-actions';
import {favoritesSelectors} from '../../store/slices/favorites-slice';

type BookmarkButtonProps = {
  isFavorite: boolean;
  offerId: string;
  className: BookmarkButtonClass;
}

const BookmarkButton = memo(({offerId, isFavorite, className}:BookmarkButtonProps): JSX.Element => {
  const authStatus = useAppSelector(userSelectors.authStatus);
  const status = useAppSelector(favoritesSelectors.status);
  const [isFavoriteOffer, setIsFavoriteOffer] = useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (authStatus === AuthStatus.Auth) {
      const value = !isFavoriteOffer;
      setIsFavoriteOffer(value);
      dispatch(toggleFavorite({offerId, status: Number(value)}));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      disabled={status === RequestStatus.Loading}
      onClick={handleClick}
      className={`${className}__bookmark-button button ${
        isFavoriteOffer ? `${className}__bookmark-button--active` : ''}`}
      type="button"
    >
      <svg
        className={`${className}__bookmark-icon`}
        width={`${className === BookmarkButtonClass.Offer ? IMAGE_SIZE.offerIcon.width : IMAGE_SIZE.cardIcon.width}`}
        height={`${className === BookmarkButtonClass.Offer ? IMAGE_SIZE.offerIcon.height : IMAGE_SIZE.cardIcon.height}`}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavoriteOffer ? 'In' : 'To'} bookmarks`}</span>
    </button>
  );
});

BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
