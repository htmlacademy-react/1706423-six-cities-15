import {MouseEventHandler} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import {useAppDispatch} from '../../../hooks/use-app-dispatch';
import {CityTubs} from '../../../types';
import {cityActions} from '../../../store/slices/city-slice';

type TabLocationProps = {
  city: CityTubs[number];
  isActive?: boolean;
};

const TabLocation = ({city, isActive = false}: TabLocationProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClickCity: MouseEventHandler = (evt) => {
    evt.preventDefault();
    dispatch(cityActions.changeCity({city: city}));
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`}
        to={AppRoute.Main}
        onClick={handleClickCity}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
};

export default TabLocation;
