import {ClassNames} from '../../const';
import {Offer} from '../../types';
import RentalOfferCard from '../rental-offer-card/rental-offer-card';

type RentalOffersListProps = {
  offers: Offer[];
  onOfferHover: (offer?: Offer) => void;
}

const RentalOfferList = ({offers, onOfferHover}: RentalOffersListProps): JSX.Element => {

  const handleMouseEnter = (offer: Offer) => {
    onOfferHover(offer);
  };
  const handleMouseLeave = () => {
    onOfferHover();
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <RentalOfferCard
          className={ClassNames.Main}
          key={offer.id}
          offer={offer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default RentalOfferList;
