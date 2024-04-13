import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {makeFakeOffer, makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import FavoritesPage from './favorites-page';
import {RequestStatus} from '../../const';

describe('Component: Favorites Page', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffer(false);
    const expectedText = mockOffer.title;
    const {withStoreComponent} = withStore(<FavoritesPage />, makeFakeStore({
      favorites: {
        offers: [mockOffer],
        status: RequestStatus.Success
      }
    }));

    render(
      <BrowserRouter>
        <HelmetProvider>
          {withStoreComponent}
        </HelmetProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
