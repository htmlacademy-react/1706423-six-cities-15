import {Link} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {logout} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {offersSelectors} from '../../store/slices/offers-slice';
import {userSelectors} from '../../store/slices/user-slice';

const HeaderNav = (): JSX.Element => {
  const offers = useAppSelector(offersSelectors.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);
  const authStatus = useAppSelector(userSelectors.authStatus);
  const dispatch = useAppDispatch();
  const email = useAppSelector(userSelectors.email);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authStatus === AuthStatus.Auth
              ?
              <>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{favoriteOffers.length}</span>
              </>
              :
              <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {authStatus === AuthStatus.Auth &&
          <li className="header__nav-item">
            <Link
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logout());
              }}
              className="header__nav-link"
              to={AppRoute.Login}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
};

export default HeaderNav;
