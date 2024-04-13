import {Link, useLocation, useParams} from 'react-router-dom';
import {MouseEventHandler, memo} from 'react';
import {AppRoute, AuthStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchNearestOffers, fetchOffer, fetchOffers, logout} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {userSelectors} from '../../store/user-slice/user-slice';
import {favoritesSelectors} from '../../store/favorites-slice/favorites-slice';

const HeaderNav = memo((): JSX.Element => {
  const favoriteOffers = useAppSelector(favoritesSelectors.offers);
  const authStatus = useAppSelector(userSelectors.authStatus);
  const dispatch = useAppDispatch();
  const email = useAppSelector(userSelectors.email);
  const {pathname} = useLocation();
  const {offerId} = useParams();

  const handleClickLogout: MouseEventHandler = (evt) => {
    evt.preventDefault();
    dispatch(logout())
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(fetchOffers());
          if (pathname === `/offer/${offerId}`) {
            dispatch(fetchOffer(offerId as string));
            dispatch(fetchNearestOffers(offerId as string));
          }
        }
      });
  };

  return (
    <nav className="header__nav" data-testid="header-nav">
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
              onClick={handleClickLogout}
              className="header__nav-link"
              to={AppRoute.Login}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
});

HeaderNav.displayName = 'HeaderNav';

export default HeaderNav;
