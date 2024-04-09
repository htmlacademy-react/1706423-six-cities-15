import {CityTubs} from '../../../types';
import CityLink from '../../city-link/city-link';
import cn from 'classnames';

type TabLocationProps = {
  city: CityTubs[number];
  isActive?: boolean;
};

const TabLocation = ({city, isActive = false}: TabLocationProps): JSX.Element => (
  <li className="locations__item">
    <CityLink
      city={city}
      className={cn(`tabs__item ${isActive && 'tabs__item--active'}`)}
    />
  </li>
);

export default TabLocation;
