import {STAR_WIDTH} from '../../const';

type RentalOfferCardProps = {
  className: string;
  offer: {
    id: string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  };
}

const RentalOfferCard = ({className, offer}: RentalOfferCardProps): JSX.Element => {
  const {title, type, price, isPremium, isFavorite, rating, previewImage} = offer;

  return (
    <article className={`${className}__card place-card`}>

      {isPremium
        ? <div className="place-card__mark"><span>Premium</span></div>
        : false}

      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite
                ? 'place-card__bookmark-button--active'
                : ''}`}
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default RentalOfferCard;
