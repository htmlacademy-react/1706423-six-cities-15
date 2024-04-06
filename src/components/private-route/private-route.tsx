import {Navigate, useLocation, Location} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/slices/user-slice';

type PrivateRouteProps = {
  children: JSX.Element;
  onlyNoAuth?: boolean;
}

type FromState = {
  from?: Location;
}

const PrivateRoute = ({children, onlyNoAuth}: PrivateRouteProps): JSX.Element => {
  const location: Location<FromState> = useLocation() as Location<FromState>;
  const user = useAppSelector(userSelectors.user);

  if (onlyNoAuth && user) {
    const from = location.state?.from || {pathname: AppRoute.Main};
    return <Navigate to={from} />;
  }

  if (!onlyNoAuth && !user) {
    return <Navigate state={{from: location}} to={AppRoute.Login} />;
  }

  return children;
};

export default PrivateRoute;
