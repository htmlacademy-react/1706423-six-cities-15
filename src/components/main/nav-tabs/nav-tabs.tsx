import {CITIES_TABS} from '../../../const';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {citySelectors} from '../../../store/slices/city-slice';
import TabLocation from '../tab-location/tab-location';

const NavTabs = (): JSX.Element => {
  const selectedCity = useAppSelector(citySelectors.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES_TABS.map((city) => (
            <TabLocation
              key={city.name}
              city={city}
              isActive={city.name === selectedCity.name}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavTabs;
