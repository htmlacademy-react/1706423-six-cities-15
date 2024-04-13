import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeStore} from '../../../utils/mocks';
import RatingFormField from './rating-form-field';
import { RATING } from '../../../const';

describe('Component: RatingFormField', () => {
  const mockHandleChange = vi.fn();

  it('should render correct', () => {
    const rating = '3';
    const expectedTestID = 'rating-input';

    const {withStoreComponent} = withStore(
      <RatingFormField
        rating={rating}
        title={RATING[rating]}
        onChange={mockHandleChange}
        ratingValue={rating}
        disabled={false}
      />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
