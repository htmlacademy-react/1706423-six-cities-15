import {render, screen} from '@testing-library/react';
import ErrorMessage from './error-message';

describe('Component: ErrorMessage', () => {
  it('should render correct with type "login', () => {
    const expectedText = /Authorization request error. Try again./i;

    render(<ErrorMessage type='login' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct with type "review', () => {
    const expectedText = /Error sending review. Try again./i;

    render(<ErrorMessage type='review' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct with type "reviews', () => {
    const expectedText = /Failed to load reviews./i;

    render(<ErrorMessage type='reviews' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct with type "offers', () => {
    const expectedText = /Failed to load places in the neighbourhood./i;

    render(<ErrorMessage type='offers' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
