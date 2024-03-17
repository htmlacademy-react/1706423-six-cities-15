import {ClassNames} from '../../const';
import {Offer} from '../../types';
import RentalOfferCard from '../rental-offer-card/rental-offer-card';

type RentalOffersListProps = {
  classNamesList: string;
  classNameCard: ClassNames;
  offers: Offer[];
  onOfferHover?: (offer?: Offer) => void;
}

const RentalOfferList = ({offers, onOfferHover, classNameCard, classNamesList}: RentalOffersListProps): JSX.Element => {

  const handleMouseEnter = (offer: Offer) => onOfferHover && onOfferHover(offer);
  const handleMouseLeave = () => onOfferHover && onOfferHover();

  return (
    <div className={`${classNamesList} places__list`}>
      {offers.map((offer) => (
        <RentalOfferCard
          className={classNameCard}
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
