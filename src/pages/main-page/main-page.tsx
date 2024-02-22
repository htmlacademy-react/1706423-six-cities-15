import RentalOfferCard from '../../components/rental-offer-card/rental-offer-card';
import Header from '../../components/header/header';
import NavTabs from '../../components/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/found-places/found-places';
import Map from '../../components/map/map';
import {CITIES, SORT_ITEMS, ClassNameCards} from '../../const';
import SortPlaces from '../../components/sort-places/sort-places';

type MainPageProps = {
  rentalOffersCount: number;
  offers: {
    id: string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  }[];
}

const MainPage = ({rentalOffersCount, offers}: MainPageProps): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className ="visually-hidden">Cities</h1>
      <NavTabs cities={CITIES} />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <FoundPlaces
              count={rentalOffersCount}
              place={CITIES.filter((city) => city.isActive === true)[0].name}
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
  </div>
);

export default MainPage;
