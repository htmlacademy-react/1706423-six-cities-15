import {Outlet, useLocation} from 'react-router-dom';
import {AppRoutes, ClassNameLogo} from '../../const';
import HeaderNav from '../header-nav/header-nav';
import {getClassesLayout} from '../../utils';
import Logo from '../logo/logo';

const Layout = (): JSX.Element => {
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
            {pathname as AppRoutes !== AppRoutes.Login && <HeaderNav />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
