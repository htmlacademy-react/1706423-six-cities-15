import {render, screen} from '@testing-library/react';
import NavTabs from './nav-tabs';
import {CITIES_TABS} from '../../../const';
import {BrowserRouter} from 'react-router-dom';

describe('Component: NavTabs', () => {
  it('should render correct', () => {
    const selectedCity = CITIES_TABS[0].name;
    const tabsTestId = 'tabs';

    render(<NavTabs selectedCity={selectedCity} />, {wrapper: BrowserRouter});

    expect(screen.getByTestId(tabsTestId)).toBeInTheDocument();
  });
});
