import {useState} from 'react';
import cn from 'classnames';
import {ClassName, RequestStatus, SORT_ITEMS} from '../../../const';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {offersSelectors} from '../../../store/offers-slice/offers-slice';
import {CityTubs, Offer, SortItems} from '../../../types';
import EmptyMainComponent from '../empty-main-component/empty-main-component';
import FoundPlaces from '../found-places/found-places';
import SortPlaces from '../sort-places/sort-places';
import RentalOffersList from '../../rental-offers-list/rental-offers-list';
import Map from '../../map/map';

type MainContentProps = {
  city: CityTubs[number];
};

const MainContent = ({city}: MainContentProps): JSX.Element => {
  const offers = useAppSelector(offersSelectors.offers);
  const requestStatus = useAppSelector(offersSelectors.status);
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [activeSortItem, setActiveSortItem] = useState<SortItems[number]>(SORT_ITEMS[0]);

  const handleOfferHover = (offer?: Offer) => setSelectedOfferId(offer ? offer.id : null);

  const offersBySelectedCity = offers.filter((offer) => offer.city.name === city.name);

  return(
    <div className="cities" data-testid="main-content">
      {requestStatus === RequestStatus.Failed && <EmptyMainComponent city={city} type='error' />}
      {requestStatus === RequestStatus.Success && offersBySelectedCity.length === 0 && <EmptyMainComponent city={city} type='empty' />}
      {requestStatus === RequestStatus.Success && offersBySelectedCity.length > 0 &&
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <FoundPlaces
              count={offersBySelectedCity.length}
              place={city.name}
            />
            <SortPlaces
              sortItems={SORT_ITEMS}
              activeSortItem={activeSortItem}
              setter={setActiveSortItem}
            />
            <RentalOffersList
              classNamesList={cn('cities__places-list', 'tabs__content')}
              classNameCard={ClassName.Main}
              offers={offersBySelectedCity}
              onOfferHover={handleOfferHover}
              activeSortItem={activeSortItem}
            />
          </section>
          <div className="cities__right-section">
            <Map
              offers={offersBySelectedCity}
              city={city}
              selectedOfferId={selectedOfferId}
              className={ClassName.Main}
            />
          </div>
        </div> }
    </div>
  );
};

export default MainContent;
