import {CityTubs} from '../../../types';
import TabLocation from '../tab-location/tab-location';

type NavTabsProps = {
  cities: CityTubs;
  selectedCity: string;
}

const NavTabs = ({cities, selectedCity} : NavTabsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <TabLocation
            key={city.name}
            city={city}
            isActive={city.name === selectedCity}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default NavTabs;
