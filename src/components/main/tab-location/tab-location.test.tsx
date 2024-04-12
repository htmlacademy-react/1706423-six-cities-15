import {render, screen} from '@testing-library/react';
import TabLocation from './tab-location';
import {CITIES_TABS} from '../../../const';
import {BrowserRouter} from 'react-router-dom';

describe('Component: TabLocation', () => {
  it('should render correct', () => {
    const city = CITIES_TABS[0];
    const tabTestId = 'tab';

    render(<TabLocation city={city} />, {wrapper: BrowserRouter});

    expect(screen.getByTestId(tabTestId)).toBeInTheDocument();
  });
});
