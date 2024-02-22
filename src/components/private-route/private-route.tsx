import { Navigate } from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

const PrivateRoute = ({authStatus, children}: PrivateRouteProps): JSX.Element => (
  authStatus === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoutes.Login} />
);

export default PrivateRoute;
