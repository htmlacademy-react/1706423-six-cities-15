import {memo, useCallback} from 'react';
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

const RentalOfferList = memo(({offers, onOfferHover, classNameCard, classNamesList, activeSortItem}: RentalOffersListProps): JSX.Element => {
  const handleMouseEnter = useCallback(
    (offer: Offer) => onOfferHover && onOfferHover(offer),
    [onOfferHover]
  );
  const handleMouseLeave = useCallback(
    () => onOfferHover && onOfferHover(),
    [onOfferHover]
  );

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
});

RentalOfferList.displayName = 'RentalOfferList';

export default RentalOfferList;
