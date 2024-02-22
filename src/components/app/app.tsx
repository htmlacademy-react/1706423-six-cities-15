import MainPage from '../../pages/main-page/main-page';
// import FavoritesPage from '../../pages/favorites-page/favorites-page';
// import OfferPage from '../../pages/offer-page/offer-page';

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
  // comments: {
  //   id: string;
  //   date: string;
  //   user: {
  //     name: string;
  //     avatarUrl: string;
  //     isPro: boolean;
  //   };
  //   text: string;
  //   rating: number;
  // }[];
}

const App = (props: AppProps): JSX.Element => (
  <MainPage {...props} />
  // <FavoritesPage offers={props.offers} />
  // <OfferPage offers={props.offers} comments={props.comments} />
);

export default App;
