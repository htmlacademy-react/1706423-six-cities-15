import {Navigate} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: JSX.Element;
  isRevers?: boolean;
}

const PrivateRoute = ({children, isRevers}: PrivateRouteProps): JSX.Element => {
  const authStatus = useAppSelector((state) => state.user.authStatus);

  return (
    authStatus === (isRevers ? AuthStatus.NoAuth : AuthStatus.Auth)
      ? children
      : <Navigate to={isRevers ? AppRoute.Main : AppRoute.Login} />
  );
};

export default PrivateRoute;
