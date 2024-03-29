import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../const';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import {CityTubs} from '../../../types';
import {changeCity} from '../../../store/city-reducer/city-reducer';

type TabLocationProps = {
  city: CityTubs[number];
  isActive?: boolean;
};

const TabLocation = ({city, isActive = false}: TabLocationProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`}
        to={AppRoutes.Main}
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(changeCity({city: city}));
        }}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
};

export default TabLocation;
