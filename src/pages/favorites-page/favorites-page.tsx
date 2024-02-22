import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import RentalOfferCard from '../../components/rental-offer-card/rental-offer-card';
import {ClassNameCards} from '../../const';

type FavoritesPageProps = {
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

const FavoritesPage = ({offers}: FavoritesPageProps): JSX.Element => (
  <div className="page">
    <Header />

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.filter(({isFavorite}) => isFavorite === true)
                  .map((offer) => (
                    <RentalOfferCard
                      className={ClassNameCards.Favorites}
                      key={offer.id}
                      offer={offer}
                    />
                  ))}
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.filter(({isFavorite}) => isFavorite === true)
                  .map((offer) => (
                    <RentalOfferCard
                      className={ClassNameCards.Favorites}
                      key={offer.id}
                      offer={offer}
                    />
                  ))}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>

    <Footer />
  </div>
);

export default FavoritesPage;
