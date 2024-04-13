import {render, screen} from '@testing-library/react';
import Footer from './footer';
import {BrowserRouter} from 'react-router-dom';


describe('Component: Footer', () => {
  it('should render correct', () => {
    const footerTestId = 'footer';

    render(<Footer />, {wrapper: BrowserRouter});
    const footer = screen.getByTestId(footerTestId);

    expect(footer).toBeInTheDocument();
  });
});
