import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus, CITIES_TABS} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/user-slice/user-slice';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

const PrivateRoute = ({children, isReverse}: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector(userSelectors.authStatus);

  if (isReverse && authStatus === AuthStatus.Auth) {
    return <Navigate to={`/${CITIES_TABS[0].id}`} />;
  }

  if (!isReverse && authStatus === AuthStatus.NoAuth) {
    return <Navigate to={AppRoute.Login} />;
  }

  return children;
};

export default PrivateRoute;
