import RentalOfferCard from '../../components/rental-offer-card/rental-offer-card';
import Header from '../../components/header/header';
import NavTabs from '../../components/nav-tabs/nav-tabs';
import FoundPlaces from '../../components/found-places/found-places';
import Map from '../../components/map/map';
import {CITIES, SORT_ITEMS} from '../../const';
import SortPlaces from '../../components/sort-places/sort-places';

type MainPageProps = {
  rentalOffersCount: number;
  renderedCardsCount: number;
}

const MainPage = ({rentalOffersCount, renderedCardsCount}: MainPageProps): JSX.Element => (
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
              {[...Array(renderedCardsCount).keys()].map((item: number) => (
                <RentalOfferCard className='cities' key={item} />
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