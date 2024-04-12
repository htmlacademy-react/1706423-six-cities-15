import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute, ClassNameLogo} from '../../const';
import HeaderNav from '../header-nav/header-nav';
import {getClassesLayout} from '../../utils/utils';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks/use-app-selector';
import { favoritesSelectors } from '../../store/favorites-slice/favorites-slice';

const Layout = (): JSX.Element => {
  const {pathname} = useLocation();
  const favoriteOffersCount = useAppSelector(favoritesSelectors.offers).length;
  const {classNameRoot} = getClassesLayout(pathname as AppRoute, !favoriteOffersCount);

  return (
    <div className={`page ${classNameRoot}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo pathname={pathname as AppRoute} className={ClassNameLogo.Header} />
            </div>
            {pathname as AppRoute !== AppRoute.Login && <HeaderNav />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
