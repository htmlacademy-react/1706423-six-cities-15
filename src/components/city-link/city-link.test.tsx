import {render, screen} from '@testing-library/react';
import CityLink from './city-link';
import {CITIES_TABS} from '../../const';
import {BrowserRouter} from 'react-router-dom';


describe('Component: CityLink', () => {
  it('should render correct', () => {
    const city = CITIES_TABS[0];
    const cityName = `${city.name}`;

    render(<CityLink city={city} />, {wrapper: BrowserRouter});

    expect(screen.getByText(cityName)).toBeInTheDocument();
  });
});
