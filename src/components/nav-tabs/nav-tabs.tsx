import TabLocation from '../tab-location/tab-location';
import {CityTab} from '../../types';

type NavTabsProps = {
  cities: CityTab[];
}

const NavTabs = ({cities} : NavTabsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map(({name, isActive}) => (
          <TabLocation
            key={name}
            name={name}
            isActive={isActive}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default NavTabs;
