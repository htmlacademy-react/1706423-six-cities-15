import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks/use-app-selector';
import {favoritesSelectors} from '../../store/slices/favorites-slice';
import EmptyFavoritesComponent from '../../components/favorites/empty-favorites-component/empty-favorites-component';
import FavoritesContent from '../../components/favorites/favorites-content/favorites-content';
import {RequestStatus} from '../../const';
import Loader from '../../components/loader/loader';

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
  const offers = useAppSelector(favoritesSelectors.offers);
  const status = useAppSelector(favoritesSelectors.status);
  const groupedOffers = groupByCityOffers(offers);

  if (status === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>6 cities. Saved listing.</title>
      </Helmet>

      {offers.length === 0 && <EmptyFavoritesComponent />}
      {offers.length > 0 && <FavoritesContent groupedOffers={groupedOffers} />}
      <Footer />
    </>
  );
};

export default FavoritesPage;
