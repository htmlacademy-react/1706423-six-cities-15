import RentalOfferCard from '../../components/rental-offer-card/rental-offer-card';
import NavTabs from '../../components/main/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/found-places/found-places';
import Map from '../../components/main/map/map';
import {CITIES_TABS, SORT_ITEMS, ClassNameCards} from '../../const';
import SortPlaces from '../../components/main/sort-places/sort-places';
import {Helmet} from 'react-helmet-async';
import {Offer} from '../../types';

type MainPageProps = {
  rentalOffersCount: number;
  offers: Offer[];
}

const MainPage = ({rentalOffersCount, offers}: MainPageProps): JSX.Element => (
  <>
    <Helmet>
      <title>6 cities.</title>
    </Helmet>
    <main className="page__main page__main--index">
      <h1 className ="visually-hidden">Cities</h1>
      <NavTabs cities={CITIES_TABS} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <FoundPlaces
              count={rentalOffersCount}
              place={CITIES_TABS.filter((city) => city.isActive === true)[0].name}
            />
            <SortPlaces sortItems={SORT_ITEMS}/>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <RentalOfferCard
                  className={ClassNameCards.Main}
                  key={offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map />
          </div>
        </div>
      </div>
    </main>
  </>
);

export default MainPage;
