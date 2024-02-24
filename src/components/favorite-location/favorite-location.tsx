import RentalOfferCard from '../rental-offer-card/rental-offer-card';
import {ClassNameCards} from '../../const';
import {Offer} from '../../types';

type FavoriteLocationProps = {
  city: string;
  offers: Offer[];
}

const FavoriteLocation = ({city, offers}: FavoriteLocationProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => (
        <RentalOfferCard
          className={ClassNameCards.Favorites}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  </li>
);

export default FavoriteLocation;
