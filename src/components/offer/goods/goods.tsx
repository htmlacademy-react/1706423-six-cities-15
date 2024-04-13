import {memo} from 'react';
import GoodsItem from '../goods-item/goods-item';

const Goods = memo(({goods}: {goods: string[]}): JSX.Element => (
  <div className="offer__inside" data-testid="goods">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <GoodsItem key={good} good={good} />
      ))}
    </ul>
  </div>
));

Goods.displayName = 'Goods';

export default Goods;
