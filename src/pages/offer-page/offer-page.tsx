import {Helmet} from 'react-helmet-async';
import ReviewsList from '../../components/offer/reviews-list/reviews-list';
import RentalOfferCard from '../../components/rental-offer-card/rental-offer-card';
import {AuthStatus, ClassNameCards, MAX_OFFER_PAGE_CARDS, STAR_WIDTH} from '../../const';
import {Offer, Comment, DataOffer} from '../../types';
import ReviewForm from '../../components/offer/review-form/review-form';
import HostOffer from '../../components/offer/host-offer/host-offer';
import Gallery from '../../components/offer/gallery/gallery';
import Goods from '../../components/offer/goods/goods';

type OfferPageProps = {
  offers: Offer[];
  comments: Comment[];
  dataOffer: DataOffer;
  authStatus: AuthStatus;
}

const OfferPage = ({offers, comments, dataOffer, authStatus}: OfferPageProps): JSX.Element => {
  const {
    title,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    host,
    images,
    goods,
    bedrooms,
    maxAdults,
    description,
  } = dataOffer;

  return (
    <>
      <Helmet>
        <title>6 cities. Rental offer.</title>
      </Helmet>

      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={`offer__bookmark-button button ${
                    isFavorite && 'offer__bookmark-button--active'}`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${STAR_WIDTH * Math.round(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <Goods goods={goods} />
              <HostOffer host={host} description={description} />
              <section className="offer__reviews reviews">
                <ReviewsList comments={comments} />
                {authStatus === AuthStatus.Auth && <ReviewForm />}
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_OFFER_PAGE_CARDS).map((offer) => (
                <RentalOfferCard
                  className={ClassNameCards.Offer}
                  key={offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default OfferPage;
