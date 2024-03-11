import TabLocation from '../tab-location/tab-location';

type NavTabsProps = {
  cities: string[];
  selectedCity: string;
}

const NavTabs = ({cities, selectedCity} : NavTabsProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <TabLocation
            key={city}
            name={city}
            isActive={city === selectedCity}
          />
        ))}
      </ul>
    </section>
  </div>
);

export default NavTabs;
