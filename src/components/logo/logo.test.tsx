import {render, screen} from '@testing-library/react';
import Logo from './logo';
import {BrowserRouter} from 'react-router-dom';
import {AppRoute, ClassNameLogo} from '../../const';


describe('Component: Logo', () => {
  it('should render correct', () => {
    const pathname = AppRoute.Main;
    const className = ClassNameLogo.Header;
    const logoTestId = 'logo';

    render(<Logo pathname={pathname} className={className} />, {wrapper: BrowserRouter});
    const logo = screen.getByTestId(logoTestId);

    expect(logo).toBeInTheDocument();
  });
});
