import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {makeFakeStore} from '../../utils/mocks';
import {withStore} from '../../utils/mock-component';
import NotFoundPage from './not-found-page';

describe('Component: Not Found Page', () => {
  it('should render correct', () => {
    const expectedText = 'Go back to the main page.';
    const {withStoreComponent} = withStore(<NotFoundPage type='page' />, makeFakeStore());

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
