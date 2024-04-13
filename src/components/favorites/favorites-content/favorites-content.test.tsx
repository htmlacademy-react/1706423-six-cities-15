import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeOffer, makeFakeStore} from '../../../utils/mocks';
import FavoritesContent from './favorites-content';

describe('Component: FavoritesContent', () => {
  it('should render correct', () => {
    const mockOffers = [makeFakeOffer(false)];
    const city = mockOffers[0].city.name;
    const groupedOffers = {
      [city]: mockOffers
    };
    const expectedTestID = 'favorites-content';

    const {withStoreComponent} = withStore(<FavoritesContent groupedOffers={groupedOffers} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
