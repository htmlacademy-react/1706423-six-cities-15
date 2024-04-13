import {render, screen} from '@testing-library/react';
import EmptyFavoritesComponent from './empty-favorites-component';

describe('Component: EmptyFavoritesComponent', () => {
  it('should render correct with type "empty', () => {
    const expectedText = /Nothing yet saved./i;
    const onlyEmptyText = /Save properties to narrow down search or plan your future trips./i;

    render(<EmptyFavoritesComponent type='empty' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(onlyEmptyText)).toBeInTheDocument();
  });

  it('should render correct with type "error', () => {
    const expectedText = /Failed to load favorite offers./i;
    const onlyEmptyText = /Save properties to narrow down search or plan your future trips./i;

    render(<EmptyFavoritesComponent type='error' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(onlyEmptyText)).not.toBeInTheDocument();
  });
});
