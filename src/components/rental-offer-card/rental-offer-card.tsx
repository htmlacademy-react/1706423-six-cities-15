import {Link, useLocation} from 'react-router-dom';
import {AppRoutes, FAVORITE_CARD_CLASS, STAR_WIDTH, IMG_CARD, IMG_CARD_FAVORITES} from '../../const';
import {Offer} from '../../types';

type RentalOfferCardProps = {
  className: string;
  offer: Offer;
  onMouseEnter: (offer: Offer) => void;
  onMouseLeave: () => void;
}

const RentalOfferCard = ({className, offer, onMouseEnter, onMouseLeave}: RentalOfferCardProps): JSX.Element => {
  const {id, title, type, price, isPremium, isFavorite, rating, previewImage} = offer;
  const {pathname} = useLocation();

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onMouseEnter(offer)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} alt="Place image"
            width={pathname as AppRoutes === AppRoutes.Favorites ? IMG_CARD_FAVORITES.width : IMG_CARD.width}
            height={pathname as AppRoutes === AppRoutes.Favorites ? IMG_CARD_FAVORITES.height : IMG_CARD.height}
          />
        </Link>
      </div>
      <div className={`${pathname as AppRoutes === AppRoutes.Favorites && FAVORITE_CARD_CLASS} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite && 'place-card__bookmark-button--active'}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${STAR_WIDTH * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default RentalOfferCard;
