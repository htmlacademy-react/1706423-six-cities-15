import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {makeFakeOfferPage, makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import OfferPage from './offer-page';
import {RequestStatus} from '../../const';

describe('Component: Offer Page', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOfferPage(false);
    const expectedText = mockOffer.title;
    const {withStoreComponent} = withStore(<OfferPage />, makeFakeStore({
      offer: {
        offer: mockOffer,
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
