import {render, screen} from '@testing-library/react';
import EmptyMainComponent from './empty-main-component';
import {CITIES_TABS} from '../../../const';

describe('Component: EmptyMainComponent', () => {
  it('should render correct with type "empty', () => {
    const city = CITIES_TABS[0];
    const expectedText = /No places to stay available/i;
    const textWithCity = `We could not find any property available at the moment in ${CITIES_TABS[0].name}`;

    render(<EmptyMainComponent city={city} type='empty' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(textWithCity)).toBeInTheDocument();
  });

  it('should render correct with type "error', () => {
    const city = CITIES_TABS[3];
    const expectedText = /Failed to load offers./i;
    const textWithCity = `We could not find any property available at the moment in ${CITIES_TABS[3].name}`;

    render(<EmptyMainComponent city={city} type='error' />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(textWithCity)).toBeInTheDocument();
  });
});
