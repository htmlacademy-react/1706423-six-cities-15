import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import RentalOfferList from './rental-offers-list';
import {makeFakeOffer, makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import {ClassName} from '../../const';

describe('Component: RentalOfferList', () => {
  it('should render correct', () => {
    const mockOffers = [makeFakeOffer(false)];
    const expectedTestId = 'places-list';
    const {withStoreComponent} = withStore(
      <RentalOfferList
        offers={mockOffers}
        classNameCard={ClassName.Offer}
        classNamesList={'near-places__list'}
      />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
