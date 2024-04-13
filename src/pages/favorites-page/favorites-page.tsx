import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks/use-app-selector';
import {favoritesSelectors} from '../../store/favorites-slice/favorites-slice';
import EmptyFavoritesComponent from '../../components/favorites/empty-favorites-component/empty-favorites-component';
import FavoritesContent from '../../components/favorites/favorites-content/favorites-content';
import {RequestStatus} from '../../const';
import Loader from '../../components/loader/loader';

const groupByCityOffers = (offers: Offer[]) => {
  const groupedOffers = offers.reduce((group: {[key: string]: Offer[]}, offer) => {
    const key = offer.city.name;

    if (!group.hasOwnProperty.call(group, key)) {
      group[key] = [];
    }

    group[key].push(offer);
    return group;
  }, {});

  return groupedOffers;
};

const FavoritesPage = (): JSX.Element => {
  const favoriteOffers = useAppSelector(favoritesSelectors.offers);
  const requestStatus = useAppSelector(favoritesSelectors.status);
  const groupedFavoriteOffers = groupByCityOffers(favoriteOffers);

  if (requestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>6 cities. Saved listing.</title>
      </Helmet>

      {requestStatus === RequestStatus.Failed && <EmptyFavoritesComponent type='error' />}
      {requestStatus === RequestStatus.Success && favoriteOffers.length === 0 && <EmptyFavoritesComponent type='empty' />}
      {requestStatus === RequestStatus.Success && favoriteOffers.length > 0 &&
        <FavoritesContent groupedOffers={groupedFavoriteOffers} />}
      <Footer />
    </>
  );
};

export default FavoritesPage;
