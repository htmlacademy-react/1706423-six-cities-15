import { Navigate } from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
  isRevers?: boolean;
}

const PrivateRoute = ({authStatus, children, isRevers}: PrivateRouteProps): JSX.Element => (
  authStatus === (isRevers ? AuthStatus.NoAuth : AuthStatus.Auth)
    ? children
    : <Navigate to={isRevers ? AppRoutes.Main : AppRoutes.Login} />
);

export default PrivateRoute;
