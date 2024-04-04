import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types';
import FavoriteLocation from '../../components/favorite-location/favorite-location';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks/use-app-selector';
import {offersSelectors} from '../../store/slices/offers-slice';

const groupByCityOffers = (offers: Offer[]) => {
  const groupedOffers = offers.reduce((obj: {[key: string]: Offer[]}, offer) => {
    const key = offer.city.name;

    if (!obj.hasOwnProperty.call(obj, key)) {
      obj[key] = [];
    }

    obj[key].push(offer);
    return obj;
  }, {});

  return groupedOffers;
};

const FavoritesPage = (): JSX.Element => {
  const offers = useAppSelector(offersSelectors.offers);
  const favoriteOffers = groupByCityOffers(offers.filter((offer) => offer.isFavorite));

  return (
    <>
      <Helmet>
        <title>6 cities. Saved listing.</title>
      </Helmet>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoriteOffers).map(([key, value]: [string, Offer[]]) => (
                <FavoriteLocation key={key} city={key} offers={value} />
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FavoritesPage;
