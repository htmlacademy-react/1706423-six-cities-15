import {CityTubs} from '../../../types';

const variantsEmptyText = {
  empty: {text: 'No places to stay available'},
  error: {text: 'Failed to load offers.'},
};

type EmptyMainComponentProps = {
  city: CityTubs[number];
  type: keyof typeof variantsEmptyText;
}

const EmptyMainComponent = ({city, type}: EmptyMainComponentProps): JSX.Element => (
  <div className="cities__places-container cities__places-container--empty container">
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">{variantsEmptyText[type].text}</b>
        <p className="cities__status-description">We could not find any property available at the moment in {city.name}</p>
      </div>
    </section>
    <div className="cities__right-section"></div>
  </div>
);

export default EmptyMainComponent;
