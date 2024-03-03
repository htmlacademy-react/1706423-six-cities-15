import {Link} from 'react-router-dom';
import {AppRoutes, ClassNameLogo} from '../../const';

type LogoProps = {
  pathname?: AppRoutes;
  className: ClassNameLogo;
}

const Logo = ({pathname, className}: LogoProps): JSX.Element => (
  <Link
    to={AppRoutes.Main}
    className={`${className}__logo-link ${
      pathname === AppRoutes.Main ? 'header__logo-link--active' : ''}`}
  >
    <img className={`${className}__logo`} src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
  </Link>
);

export default Logo;
