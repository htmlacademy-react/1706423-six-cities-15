import RentalOfferCard from '../../rental-offer-card/rental-offer-card';
import {CITIES_TABS, ClassName} from '../../../const';
import {CityTubs, Offer} from '../../../types';
import CityLink from '../../city-link/city-link';

type FavoriteLocationProps = {
  city: string;
  offers: Offer[];
}

const FavoriteLocation = ({city, offers}: FavoriteLocationProps): JSX.Element => {
  const currentCity = CITIES_TABS.find((item) => item.name === city) as CityTubs[number];

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <CityLink city={currentCity} />
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <RentalOfferCard
            className={ClassName.Favorites}
            key={offer.id}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
};

export default FavoriteLocation;
