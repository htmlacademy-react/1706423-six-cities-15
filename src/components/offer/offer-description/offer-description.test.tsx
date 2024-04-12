import {render, screen} from '@testing-library/react';
import OfferDescription from './offer-description';
import {makeFakeOfferPage} from '../../../utils/mocks';

describe('Component: OfferDescription', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOfferPage(false);
    const ratingTestId = 'offer-rating';
    const featuresTestId = 'offer-features';
    const priceTestId = 'offer-price';

    render(<OfferDescription offer={mockOffer} />);

    expect(screen.getByTestId(ratingTestId)).toBeInTheDocument();
    expect(screen.getByTestId(featuresTestId)).toBeInTheDocument();
    expect(screen.getByTestId(priceTestId)).toBeInTheDocument();
  });
});
