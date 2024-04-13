import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {makeFakeOffer, makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import MainPage from './main-page';
import {CITIES_TABS, RequestStatus} from '../../const';

describe('Component: Main Page', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffer(false);
    const expectedTextd = mockOffer.title;
    const {withStoreComponent} = withStore(<MainPage city={CITIES_TABS[3]} />, makeFakeStore({
      offers: {
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

    expect(screen.getByText(expectedTextd)).toBeInTheDocument();
  });
});
