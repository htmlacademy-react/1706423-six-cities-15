import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeComment, makeFakeStore} from '../../../utils/mocks';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  it('should render correct', () => {
    const mockComments = [makeFakeComment()];
    const expectedTestID = 'reviews-title';

    const {withStoreComponent} = withStore(<ReviewsList comments={mockComments} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
