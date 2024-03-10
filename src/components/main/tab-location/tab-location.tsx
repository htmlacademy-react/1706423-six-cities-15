import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../const';

type TabLocationProps = {
  name: string;
  isActive?: boolean;
};

const TabLocation = ({name, isActive = false}: TabLocationProps): JSX.Element => (
  <li className="locations__item">
    <Link className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} to={AppRoutes.Main}>
      <span>{name}</span>
    </Link>
  </li>
);

export default TabLocation;
