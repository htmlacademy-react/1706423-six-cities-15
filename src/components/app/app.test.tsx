import {render, screen} from '@testing-library/react';
import {AppRoute, RequestStatus } from '../../const';
import App from './app';
import {withStore} from '../../utils/mock-component';
import {makeFakeOffer, makeFakeOfferPage, makeFakeStore} from '../../utils/mocks';
import {MemoryRouter} from 'react-router-dom';

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    const mockOffers = [makeFakeOffer(false)];
    const expectedText = mockOffers[0].title;
    const {withStoreComponent} = withStore(<App />, makeFakeStore({
      offers: {
        offers: mockOffers,
        status: RequestStatus.Success
      }
    }));

    render(
      <MemoryRouter initialEntries={[`/${mockOffers[0].city.name}`]}>
        {withStoreComponent}
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const expectedTestId = 'login-page';
    const { withStoreComponent } = withStore(<App />, makeFakeStore());
    render(
      <MemoryRouter initialEntries={[AppRoute.Login]}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offers/:id"', () => {
    const mockOffer = makeFakeOfferPage(false);
    const expectedText = mockOffer.title;
    const {withStoreComponent} = withStore(<App />, makeFakeStore({
      offer: {
        offer: mockOffer,
        status: RequestStatus.Success
      }
    }));

    render(
      <MemoryRouter initialEntries={[`/offers/${mockOffer.id}`]}>
        {withStoreComponent}
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to /* route', () => {
    const expectedText = 'Go back to the main page.';
    const {withStoreComponent} = withStore(<App />, makeFakeStore());
    render(
      <MemoryRouter initialEntries={['/*']}>
        {withStoreComponent}
      </MemoryRouter>
    );
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    const mockOffers = [makeFakeOffer(false)];
    const expectedText = mockOffers[0].title;
    const {withStoreComponent} = withStore(<App />, makeFakeStore({
      favorites: {
        offers: mockOffers,
        status: RequestStatus.Success
      }
    }));

    render(
      <MemoryRouter initialEntries={[AppRoute.Favorites]}>
        {withStoreComponent}
      </MemoryRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
