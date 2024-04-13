import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeOfferPage, makeFakeStore} from '../../../utils/mocks';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOfferPage(false);
    const expectedTestID = 'reviews-form';

    const {withStoreComponent} = withStore(<ReviewForm id={mockOffer.id} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
