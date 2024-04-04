import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/main/found-places/found-places';
import Map from '../../components/map/map';
import {CITIES_TABS, ClassName, RequestStatus, SORT_ITEMS} from '../../const';
import SortPlaces from '../../components/main/sort-places/sort-places';
import {Offer, SortItems} from '../../types';
import RentalOffersList from '../../components/rental-offers-list/rental-offers-list';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/use-app-selector';
import EmptyMainComponent from '../../components/main/empty-main-component/empty-main-component';
import Loader from '../../components/loader/loader';
import {citySelectors} from '../../store/slices/city-slice';
import {offersSelectors} from '../../store/slices/offers-slice';

const MainPage = (): JSX.Element => {
  const city = useAppSelector(citySelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const status = useAppSelector(offersSelectors.status);

  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [activeSortItem, setActiveSortItem] = useState<SortItems[number]>(SORT_ITEMS[0]);

  const handleOfferHover = (offer?: Offer) => {
    let activeOffer: Offer | undefined;
    if (offer) {
      activeOffer = offers.find((item) => item.id === offer.id);
    }
    setSelectedOfferId(activeOffer ? activeOffer.id : null);
  };

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
        <NavTabs
          cities={CITIES_TABS}
          selectedCity={city.name}
        />
        <div className="cities">
          {status === RequestStatus.Failed && <EmptyMainComponent city={city} />}
          {status === RequestStatus.Success && offersBySelectedCity.length === 0 && <EmptyMainComponent city={city} />}
          {status === RequestStatus.Success && offersBySelectedCity.length > 0 &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <FoundPlaces
                  count={offersBySelectedCity.length}
                  place={city.name}
                />
                <SortPlaces
                  sortItems={SORT_ITEMS}
                  activeSortItem={activeSortItem}
                  setter={setActiveSortItem}
                />
                <RentalOffersList
                  classNamesList={cn('cities__places-list', 'tabs__content')}
                  classNameCard={ClassName.Main}
                  offers={offersBySelectedCity}
                  onOfferHover={handleOfferHover}
                  activeSortItem={activeSortItem}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offersBySelectedCity}
                  city={city}
                  selectedOfferId={selectedOfferId}
                  className={ClassName.Main}
                />
              </div>
            </div> }
        </div>
      </main>
    </>
  );
};

export default MainPage;
