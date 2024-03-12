import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/main/found-places/found-places';
import Map from '../../components/map/map';
import {CITIES_TABS, ClassNames, SORT_ITEMS} from '../../const';
import SortPlaces from '../../components/main/sort-places/sort-places';
import {Offer} from '../../types';
import RentalOffersList from '../../components/rental-offers-list/rental-offers-list';

type MainPageProps = {
  offers: Offer[];
}

const MainPage = ({offers}: MainPageProps): JSX.Element => {
  const defaultCity = 'Amsterdam';

  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const offersBySelectedCity = offers.filter((offer) => offer.city.name === defaultCity);

  const handleOfferHover = (offer?: Offer) => {
    let activeOffer: Offer | undefined;
    if (offer) {
      activeOffer = offers.find((item) => item.id === offer.id);
    }
    setSelectedOfferId(activeOffer ? activeOffer.id : null);
  };

  return (
    <>
      <Helmet>
        <title>6 cities.</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className ="visually-hidden">Cities</h1>
        <NavTabs
          cities={CITIES_TABS}
          selectedCity={defaultCity}
        />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <FoundPlaces
                count={offersBySelectedCity.length}
                place={defaultCity}
              />
              <SortPlaces sortItems={SORT_ITEMS}/>
              <RentalOffersList
                offers={offersBySelectedCity}
                onOfferHover={handleOfferHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offersBySelectedCity}
                city={offersBySelectedCity[0].city}
                selectedOfferId={selectedOfferId}
                className={ClassNames.Main}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;
