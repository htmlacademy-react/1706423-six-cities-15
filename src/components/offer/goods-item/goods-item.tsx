const GoodsItem = ({good}: {good: string}): JSX.Element => (
  <li className="offer__inside-item">
    {good}
  </li>
);

export default GoodsItem;
