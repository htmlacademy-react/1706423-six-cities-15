import {memo} from 'react';
import {STAR_WIDTH} from '../../../const';
import {DataOffer} from '../../../types';
import Goods from '../goods/goods';
import HostOffer from '../host-offer/host-offer';

type OfferDescriptionProps = {
  offer: DataOffer;
}

const OfferDescription = memo(({offer}: OfferDescriptionProps): JSX.Element => {
  const {type, price, rating, host, goods, bedrooms, maxAdults, description} = offer;

  return (
    <>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: `${STAR_WIDTH * Math.round(rating)}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {type}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} Bedroom{bedrooms > 1 && 's'}
        </li>
        <li className="offer__feature offer__feature--adults">
            Max {maxAdults} adult{maxAdults > 1 && 's'}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">&euro;{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <Goods goods={goods} />
      <HostOffer host={host} description={description} />
    </>
  );
});

OfferDescription.displayName = 'OfferDescription';

export default OfferDescription;
