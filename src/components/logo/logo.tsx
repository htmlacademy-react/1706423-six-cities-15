import {Link} from 'react-router-dom';
import {AppRoute, ClassNameLogo} from '../../const';

type LogoProps = {
  pathname?: AppRoute;
  className: ClassNameLogo;
}

const Logo = ({pathname, className}: LogoProps): JSX.Element => (
  <Link
    to={AppRoute.Main}
    className={`${className}__logo-link ${
      pathname === AppRoute.Main ? 'header__logo-link--active' : ''}`}
  >
    <img className={`${className}__logo`} src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
  </Link>
);

export default Logo;
