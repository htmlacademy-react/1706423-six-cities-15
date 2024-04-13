import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../utils/mock-component';
import {makeFakeStore} from '../../utils/mocks';
import Layout from './layout';

describe('Component: Layout', () => {
  it('should render correct', () => {
    const expectedTestID = 'layout';

    const {withStoreComponent} = withStore(<Layout />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
