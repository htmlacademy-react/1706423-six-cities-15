import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {userSelectors} from '../../store/slices/user-slice';

type PrivateRouteProps = {
  children: JSX.Element;
  isRevers?: boolean;
}

const PrivateRoute = ({children, isRevers}: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector(userSelectors.authStatus);

  return (
    authStatus === (isRevers ? AuthStatus.NoAuth : AuthStatus.Auth)
      ? children
      : <Navigate to={isRevers ? AppRoute.Main : AppRoute.Login} />
  );
};

export default PrivateRoute;
