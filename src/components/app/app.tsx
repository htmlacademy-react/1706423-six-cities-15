import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoutes, AuthStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';
import Layout from '../layout/layout';
import {Offer, Comment} from '../../types';

type AppProps = {
  rentalOffersCount: number;
  offers: Offer[];
  comments: Comment[];
}

const App = (props: AppProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Layout authStatus={AuthStatus.NoAuth} />}>
          <Route index element={
            <MainPage
              rentalOffersCount={props.rentalOffersCount}
              offers={props.offers}
            />
          }
          />
          <Route path={AppRoutes.Offer} element={
            <OfferPage
              offers={props.offers}
              comments={props.comments}
            />
          }
          />
          <Route path={AppRoutes.Favorites} element={
            <PrivateRoute authStatus={AuthStatus.NoAuth}>
              <FavoritesPage offers={props.offers} />
            </PrivateRoute>
          }
          />
          <Route path={AppRoutes.NotFound} element={<NotFoundPage />} />
          <Route path={AppRoutes.Login} element={
            <PrivateRoute authStatus={AuthStatus.NoAuth} isRevers>
              <LoginPage />
            </PrivateRoute>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
