import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeStore} from '../../../utils/mocks';
import SortPlaces from './sort-places';
import {SORT_ITEMS} from '../../../const';

describe('Component: SortPlaces', () => {
  const mockHandleChange = vi.fn();

  it('should render correct', () => {
    const expectedText = 'Sort by';

    const {withStoreComponent} = withStore(
      <SortPlaces
        sortItems={SORT_ITEMS}
        activeSortItem={SORT_ITEMS[0]}
        setter={mockHandleChange}
      />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
