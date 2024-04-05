import {Offer} from '../../../types';
import FavoriteLocation from '../favorite-location/favorite-location';

type FavoritesContentProps = {
  groupedOffers: {
    [key: string]: Offer[];
  };
};

const FavoritesContent = ({groupedOffers}: FavoritesContentProps): JSX.Element => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.entries(groupedOffers).map(([key, value]: [string, Offer[]]) => (
            <FavoriteLocation key={key} city={key} offers={value} />
          ))}
        </ul>
      </section>
    </div>
  </main>
);

export default FavoritesContent;
