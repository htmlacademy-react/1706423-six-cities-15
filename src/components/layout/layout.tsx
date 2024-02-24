import {Link, Outlet, useLocation} from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';
import HeaderNav from '../header-nav/header-nav';
import {getClassesLayout} from '../../utils';
import Footer from '../footer/footer';

type LayoutProps = {
  authStatus: AuthStatus;
  favoriteOffers: number;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const {pathname} = useLocation();
  const {classNameRoot} = getClassesLayout(pathname as AppRoutes);

  return (
    <div className={`page ${classNameRoot}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                to={AppRoutes.Main}
                className={`header__logo-link ${
                  pathname as AppRoutes === AppRoutes.Main && 'header__logo-link--active'}`}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {pathname as AppRoutes !== AppRoutes.Login && <HeaderNav {...props} />}
          </div>
        </div>
      </header>
      <Outlet />
      {pathname as AppRoutes === AppRoutes.Favorites && <Footer />}
    </div>
  );
};

export default Layout;
