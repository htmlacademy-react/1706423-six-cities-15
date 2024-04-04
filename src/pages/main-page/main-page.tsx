import {Helmet} from 'react-helmet-async';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import {RequestStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import Loader from '../../components/loader/loader';
import {citySelectors} from '../../store/slices/city-slice';
import {offersSelectors} from '../../store/slices/offers-slice';
import MainContent from '../../components/main/main-content/main-content';

const MainPage = (): JSX.Element => {
  const city = useAppSelector(citySelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const status = useAppSelector(offersSelectors.status);

  const offersBySelectedCity = offers.filter((offer) => offer.city.name === city.name);

  if (status === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>6 cities.</title>
      </Helmet>
      <main className={`page__main page__main--index ${
        offersBySelectedCity.length === 0 ? 'page__main--index-empty' : ''}`}
      >
        <h1 className ="visually-hidden">Cities</h1>
        <NavTabs />
        <MainContent />
      </main>
    </>
  );
};

export default MainPage;
