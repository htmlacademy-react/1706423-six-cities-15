import {Link, Outlet, useLocation} from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';
import HeaderNav from '../header-nav/header-nav';
import {getClassesLayout} from '../../utils';

type LayoutProps = {
  authStatus: AuthStatus;
}

const Layout = ({authStatus}: LayoutProps): JSX.Element => {
  const {pathname} = useLocation();
  const {classNameLink, classNameRoot} = getClassesLayout(pathname as AppRoutes);

  return (
    <div className={`page ${classNameRoot}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to={AppRoutes.Main}
                className={`header__logo-link ${classNameLink}`}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {pathname as AppRoutes !== AppRoutes.Login
              ?
              <HeaderNav authStatus={authStatus} />
              :
              null}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
