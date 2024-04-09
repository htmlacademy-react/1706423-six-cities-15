import {Helmet} from 'react-helmet-async';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import {RequestStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import Loader from '../../components/loader/loader';
import {offersSelectors} from '../../store/slices/offers-slice';
import MainContent from '../../components/main/main-content/main-content';
import {CityTubs} from '../../types';

type MainPageProps = {
  city: CityTubs[number];
};

const MainPage = ({city}: MainPageProps): JSX.Element => {
  const offers = useAppSelector(offersSelectors.offers);
  const requestStatus = useAppSelector(offersSelectors.status);

  const offersBySelectedCity = offers.filter((offer) => offer.city.name === city.name);

  if (requestStatus === RequestStatus.Loading) {
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
        <NavTabs selectedCity={city.name} />
        <MainContent city={city} />
      </main>
    </>
  );
};

export default MainPage;
