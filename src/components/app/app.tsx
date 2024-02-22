import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoutes, AuthStatus} from '../../const';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {HelmetProvider} from 'react-helmet-async';

type AppProps = {
  rentalOffersCount: number;
  offers: {
    id: string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  }[];
  comments: {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    text: string;
    rating: number;
  }[];
}

const App = (props: AppProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={
          <MainPage
            rentalOffersCount={props.rentalOffersCount}
            offers={props.offers}
          />
        }
        />
        <Route path={AppRoutes.Login} element={<LoginPage />} />
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
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
