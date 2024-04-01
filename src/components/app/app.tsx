import {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {AppRoutes} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import {Comment, DataOffer} from '../../types';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {checkAuth, fetchOffers} from '../../store/api-actions';

type AppProps = {
  comments: Comment[];
  dataOffer: DataOffer;
}

const App = (props: AppProps): JSX.Element => {
  const {comments, dataOffer} = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={
            <Layout />
          }
          >
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.Offer} element={
              <OfferPage
                dataOffer={dataOffer}
                comments={comments}
              />
            }
            />
            <Route path={AppRoutes.Favorites} element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
            />
            <Route path={AppRoutes.NotFound} element={<NotFoundPage />} />
            <Route path={AppRoutes.Login} element={
              <PrivateRoute isRevers>
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
