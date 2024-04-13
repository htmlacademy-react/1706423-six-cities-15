import {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoute, CITIES_TABS} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {checkAuth, fetchFavorites, fetchOffers} from '../../store/api-actions';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuth())
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(fetchFavorites());
        }
      });
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Navigate to={`/${CITIES_TABS[0].id}`} />} index path={AppRoute.Main} />
          {CITIES_TABS.map((city) => <Route element={<MainPage city={city} />} index key={city.id} path={`/${city.id}`} />)}
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.NotFound} element={<NotFoundPage type='page' />} />
          <Route path={AppRoute.Login} element={
            <PrivateRoute isReverse>
              <LoginPage />
            </PrivateRoute>
          }
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
};

export default App;
