import RentalOfferCard from '../rental-offer-card/rental-offer-card';
import {AppRoutes, ClassNames} from '../../const';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';

type FavoriteLocationProps = {
  city: string;
  offers: Offer[];
}

const FavoriteLocation = ({city, offers}: FavoriteLocationProps): JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoutes.Main}>
          <span>{city}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) => (
        <RentalOfferCard
          className={ClassNames.Favorites}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  </li>
);

export default FavoriteLocation;
