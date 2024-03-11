import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoutes, AuthStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import {Offer, Comment, DataOffer} from '../../types';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
  dataOffer: DataOffer;
}

const App = (props: AppProps): JSX.Element => {
  const {offers, comments, dataOffer} = props;
  const authStatus = AuthStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={
            <Layout
              authStatus={authStatus}
              favoriteOffers={offers.filter((offer) => offer.isFavorite === true).length}
            />
          }
          >
            <Route index element={
              <MainPage
                offers={offers}
              />
            }
            />
            <Route path={AppRoutes.Offer} element={
              <OfferPage
                dataOffer={dataOffer}
                offers={offers}
                comments={comments}
                authStatus={authStatus}
              />
            }
            />
            <Route path={AppRoutes.Favorites} element={
              <PrivateRoute authStatus={authStatus}>
                <FavoritesPage offers={offers} />
              </PrivateRoute>
            }
            />
            <Route path={AppRoutes.NotFound} element={<NotFoundPage />} />
            <Route path={AppRoutes.Login} element={
              <PrivateRoute authStatus={authStatus} isRevers>
                <LoginPage />
              </PrivateRoute>
            }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
