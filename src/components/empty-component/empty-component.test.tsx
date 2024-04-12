import {render, screen} from '@testing-library/react';
import EmptyComponent from './empty-component';

describe('Component: EmptyComponent', () => {
  it('should render correct with type "reviews', () => {
    const expectedText = /There are no reviews for this offer./i;

    render(<EmptyComponent type='reviews' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct with type "offers', () => {
    const expectedText = /No places in the neighbourhood./i;

    render(<EmptyComponent type='offers' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
