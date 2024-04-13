import {memo} from 'react';

const GoodsItem = memo(({good}: {good: string}): JSX.Element => (
  <li className="offer__inside-item" data-testid="good">
    {good}
  </li>
));

GoodsItem.displayName = 'GoodsItem';

export default GoodsItem;
