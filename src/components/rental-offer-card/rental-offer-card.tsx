import {Link, useLocation} from 'react-router-dom';
import {memo} from 'react';
import {AppRoute, FAVORITE_CARD_CLASS, STAR_WIDTH, BookmarkButtonClass, IMAGE_SIZE} from '../../const';
import {Offer} from '../../types';
import BookmarkButton from '../bookmark-button/bookmark-button';

type RentalOfferCardProps = {
  className: string;
  offer: Offer;
  onMouseEnter?: (offer: Offer) => void;
  onMouseLeave?: () => void;
}

const RentalOfferCard = memo(({className, offer, onMouseEnter, onMouseLeave}: RentalOfferCardProps): JSX.Element => {
  const {id, title, type, price, isPremium, isFavorite, rating, previewImage} = offer;
  const {pathname} = useLocation();

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onMouseEnter && onMouseEnter(offer)}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} alt="Place image"
            width={pathname as AppRoute === AppRoute.Favorites ? IMAGE_SIZE.cardFavorites.width : IMAGE_SIZE.card.width}
            height={pathname as AppRoute === AppRoute.Favorites ? IMAGE_SIZE.cardFavorites.height : IMAGE_SIZE.card.height}
          />
        </Link>
      </div>
      <div className={`${pathname as AppRoute === AppRoute.Favorites && FAVORITE_CARD_CLASS} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            isFavorite={isFavorite}
            className={BookmarkButtonClass.Card}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${STAR_WIDTH * Math.round(rating)}%`}}></span>
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
});

RentalOfferCard.displayName = 'RentalOfferCard';

export default RentalOfferCard;
