import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/main/found-places/found-places';
import Map from '../../components/map/map';
import {CITIES_TABS, ClassNames, SORT_ITEMS} from '../../const';
import SortPlaces from '../../components/main/sort-places/sort-places';
import {Offer} from '../../types';
import RentalOffersList from '../../components/rental-offers-list/rental-offers-list';
import cn from 'classnames';
import {useAppSelector} from '../../hooks/use-app-selector';
import EmptyMainComponent from '../../components/main/empty-main-component/empty-main-component';

const MainPage = ({offers}: {offers: Offer[]}): JSX.Element => {
  const city = useAppSelector((state) => state.city.city);
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  const handleOfferHover = (offer?: Offer) => {
    let activeOffer: Offer | undefined;
    if (offer) {
      activeOffer = offers.find((item) => item.id === offer.id);
    }
    setSelectedOfferId(activeOffer ? activeOffer.id : null);
  };

  const offersBySelectedCity = offers.filter((offer) => offer.city.name === city.name);

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
          {offersBySelectedCity.length === 0 && <EmptyMainComponent city={city} />}
          {offersBySelectedCity.length > 0 &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <FoundPlaces
                  count={offersBySelectedCity.length}
                  place={city.name}
                />
                <SortPlaces sortItems={SORT_ITEMS}/>
                <RentalOffersList
                  classNamesList={cn('cities__places-list', 'tabs__content')}
                  classNameCard={ClassNames.Main}
                  offers={offersBySelectedCity}
                  onOfferHover={handleOfferHover}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  offers={offersBySelectedCity}
                  city={city}
                  selectedOfferId={selectedOfferId}
                  className={ClassNames.Main}
                />
              </div>
            </div> }
        </div>
      </main>
    </>
  );
};

export default MainPage;
