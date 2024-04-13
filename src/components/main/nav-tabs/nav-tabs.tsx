import {CITIES_TABS} from '../../../const';
import TabLocation from '../tab-location/tab-location';

type NavTabsProps = {
  selectedCity: string;
};

const NavTabs = ({selectedCity}: NavTabsProps): JSX.Element =>(
  <div className="tabs" data-testid="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_TABS.map((city) => (
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
