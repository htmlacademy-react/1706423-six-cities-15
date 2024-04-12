import {render, screen} from '@testing-library/react';
import FoundPlaces from './found-places';
import {CITIES_TABS} from '../../../const';


describe('Component: FoundPlaces', () => {
  it('should render correct count = 1', () => {
    const count = 1;
    const place = `${CITIES_TABS[0].name}`;
    const expectedText = `${count} place to stay in ${place}`;

    render(<FoundPlaces count={count} place={place} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct count = 10', () => {
    const count = 10;
    const place = `${CITIES_TABS[3].name}`;
    const expectedText = `${count} places to stay in ${place}`;

    render(<FoundPlaces count={count} place={place} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
