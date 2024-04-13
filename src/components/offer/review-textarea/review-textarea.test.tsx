import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeStore} from '../../../utils/mocks';
import ReviewTextarea from './review-textarea';

describe('Component: ReviewTextarea', () => {
  const mockHandleChange = vi.fn();

  it('should render correct', () => {
    const comment = 'comment';
    const expectedTestID = 'textarea';

    const {withStoreComponent} = withStore(
      <ReviewTextarea
        comment={comment}
        onChange={mockHandleChange}
        disabled={false}
      />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
