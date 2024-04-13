import {render, screen} from '@testing-library/react';
import Loader from './loader';


describe('Component: Loader', () => {
  it('should render correct', () => {
    const loaderSectionTestId = 'loader';

    render(<Loader />);
    const loaderSection = screen.getByTestId(loaderSectionTestId);

    expect(loaderSection).toBeInTheDocument();
  });
});
