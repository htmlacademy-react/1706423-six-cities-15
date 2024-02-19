import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOffersCount: number;
  renderedCardsCount: number;
}

const App = (props: AppProps): JSX.Element => (
  <MainPage {...props} />
);

export default App;
