import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import RentalOfferCard from './rental-offer-card';
import {makeFakeOffer, makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import {ClassName} from '../../const';

describe('Component: RentalOfferCard', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffer(false);
    const expectedText = mockOffer.title;
    const {withStoreComponent} = withStore(<RentalOfferCard offer={mockOffer} className={ClassName.Offer} />, makeFakeStore());

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
