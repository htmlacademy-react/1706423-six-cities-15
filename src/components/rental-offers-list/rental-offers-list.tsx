import {useEffect, useState} from 'react';
import {ClassNameCards} from '../../const';
import {Offer} from '../../types';
import RentalOfferCard from '../rental-offer-card/rental-offer-card';

type RentalOffersListProps = {
  offers: Offer[];
}

const RentalOfferList = ({offers}: RentalOffersListProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  useEffect(() => {

  }, [activeOffer]);

  const handleMouseEnter = (offer: Offer) => setActiveOffer(offer);
  const handleMouseLeave = () => setActiveOffer(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <RentalOfferCard
          className={ClassNameCards.Main}
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
