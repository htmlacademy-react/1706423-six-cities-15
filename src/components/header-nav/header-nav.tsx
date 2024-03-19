import {Link} from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';

type HeaderNavProps = {
  authStatus: AuthStatus;
}

const HeaderNav = ({authStatus}: HeaderNavProps): JSX.Element => {
  const offers = useAppSelector((state) => state.offers.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authStatus === AuthStatus.Auth
              ?
              <>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">{favoriteOffers.length}</span>
              </>
              :
              <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {authStatus === AuthStatus.Auth &&
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoutes.Main}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
};

export default HeaderNav;
