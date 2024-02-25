import {Outlet, useLocation} from 'react-router-dom';
import {AppRoutes, AuthStatus, ClassNameLogo} from '../../const';
import HeaderNav from '../header-nav/header-nav';
import {getClassesLayout} from '../../utils';
import Footer from '../footer/footer';
import Logo from '../logo/logo';

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
              <Logo pathname={pathname as AppRoutes} className={ClassNameLogo.Header} />
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
