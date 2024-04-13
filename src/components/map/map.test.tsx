import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../utils/mock-component';
import {makeFakeOffer, makeFakeStore} from '../../utils/mocks';
import Map from './map';
import {ClassName} from '../../const';

describe('Component: Map', () => {
  it('should render correct', () => {
    const mockOffers = [makeFakeOffer(false)];
    const expectedTestID = 'map';

    const {withStoreComponent} = withStore(<Map offers={mockOffers} city={mockOffers[0].city} selectedOfferId={mockOffers[0].id} className={ClassName.Main} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
