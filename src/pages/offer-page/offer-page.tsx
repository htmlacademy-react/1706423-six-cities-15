import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import ReviewsList from '../../components/offer/reviews-list/reviews-list';
import {AuthStatus, ClassNames, MAX_OFFER_PAGE_CARDS, STAR_WIDTH} from '../../const';
import {Comment, DataOffer} from '../../types';
import ReviewForm from '../../components/offer/review-form/review-form';
import HostOffer from '../../components/offer/host-offer/host-offer';
import Gallery from '../../components/offer/gallery/gallery';
import Goods from '../../components/offer/goods/goods';
import Map from '../../components/map/map';
import RentalOfferList from '../../components/rental-offers-list/rental-offers-list';
import {useAppSelector} from '../../hooks/use-app-selector';

type OfferPageProps = {
  comments: Comment[];
  dataOffer: DataOffer;
}

const OfferPage = ({comments, dataOffer}: OfferPageProps): JSX.Element => {
  const {offerId} = useParams();
  const offers = useAppSelector((state) => state.offers.offers);
  const authStatus = useAppSelector((state) => state.user.authStatus);
  const currentOffer = offers.find((offer) => offer.id === offerId) ?? offers[0];
  const {id, title, type, price, isPremium, isFavorite, rating, city} = currentOffer;
  const {host, images, goods, bedrooms, maxAdults, description} = dataOffer;

  const nearestOffers = offers.filter((offer) => offer.city.name === city.name && offer.id !== id)
    .slice(0, MAX_OFFER_PAGE_CARDS);

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
          <Map
            offers={[currentOffer, ...nearestOffers]}
            city={city}
            selectedOfferId={id}
            className={ClassNames.OfferMap}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <RentalOfferList
              classNamesList={'near-places__list'}
              classNameCard={ClassNames.Offer}
              offers={nearestOffers}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default OfferPage;
