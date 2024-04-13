import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeOffer, makeFakeStore} from '../../../utils/mocks';
import FavoriteLocation from './favorite-location';
import { CITIES_TABS } from '../../../const';

describe('Component: FavoriteLocation', () => {
  it('should render correct', () => {
    const mockOffers = [makeFakeOffer(false)];
    const city = CITIES_TABS[0].name;
    const expectedTestID = 'favorites-location';

    const {withStoreComponent} = withStore(<FavoriteLocation offers={mockOffers} city={city} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
