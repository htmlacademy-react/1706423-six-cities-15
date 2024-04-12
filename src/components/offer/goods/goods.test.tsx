import {render, screen} from '@testing-library/react';
import Goods from './goods';


describe('Component: Goods', () => {
  it('should render correct', () => {
    const goods = ['good', 'good'];
    const goodsTestId = 'goods';

    render(<Goods goods={goods} />,);
    const goodsContainer = screen.getByTestId(goodsTestId);

    expect(goodsContainer).toBeInTheDocument();
  });
});
