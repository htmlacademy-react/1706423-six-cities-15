import {render, screen} from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';
import {withStore} from '../../../utils/mock-component';
import {makeFakeStore} from '../../../utils/mocks';
import MainContent from './main-content';
import {CITIES_TABS} from '../../../const';

describe('Component: MainContent', () => {
  it('should render correct', () => {
    const city = CITIES_TABS[0];
    const expectedTestID = 'main-content';

    const {withStoreComponent} = withStore(<MainContent city={city} />, makeFakeStore());
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(expectedTestID)).toBeInTheDocument();
  });
});
