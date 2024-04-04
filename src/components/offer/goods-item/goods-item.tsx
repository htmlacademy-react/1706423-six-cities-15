import {memo} from 'react';

const GoodsItem = memo(({good}: {good: string}): JSX.Element => (
  <li className="offer__inside-item">
    {good}
  </li>
));

GoodsItem.displayName = 'GoodsItem';

export default GoodsItem;
