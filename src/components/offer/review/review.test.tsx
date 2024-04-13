import {render, screen} from '@testing-library/react';
import Review from './review';
import {makeFakeComment} from '../../../utils/mocks';

describe('Component: Review', () => {
  it('should render correct', () => {
    const mockReview = makeFakeComment();
    const reviewTestId = 'review-container';

    render(<Review review={mockReview} />);

    expect(screen.getByTestId(reviewTestId)).toBeInTheDocument();
  });
});
