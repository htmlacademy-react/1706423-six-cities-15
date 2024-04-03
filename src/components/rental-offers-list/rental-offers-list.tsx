import {ClassName} from '../../const';
import {Offer, SortItems} from '../../types';
import RentalOfferCard from '../rental-offer-card/rental-offer-card';
import {sortBy} from '../../utils';

type RentalOffersListProps = {
  classNamesList: string;
  classNameCard: ClassName;
  offers: Offer[];
  onOfferHover?: (offer?: Offer) => void;
  activeSortItem?: SortItems[number];
}

const RentalOfferList = ({offers, onOfferHover, classNameCard, classNamesList, activeSortItem}: RentalOffersListProps): JSX.Element => {
  const handleMouseEnter = (offer: Offer) => onOfferHover && onOfferHover(offer);
  const handleMouseLeave = () => onOfferHover && onOfferHover();

  const currentOffers = activeSortItem
    ? sortBy[activeSortItem]([...offers])
    : offers;

  return (
    <div className={`${classNamesList} places__list`}>
      {currentOffers.map((offer) => (
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
