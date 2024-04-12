import {render, screen} from '@testing-library/react';
import GoodsItem from './goods-item';


describe('Component: GoodsItem', () => {
  it('should render correct', () => {
    const good = 'good';
    const goodTestId = 'good';

    render(<GoodsItem good={good} />,);
    const goodItem = screen.getByTestId(goodTestId);

    expect(goodItem).toBeInTheDocument();
  });
});
