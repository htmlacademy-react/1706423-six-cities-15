import GoodsItem from '../goods-item/goods-item';

const Goods = ({goods}: {goods: string[]}): JSX.Element => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <GoodsItem key={good} good={good} />
      ))}
    </ul>
  </div>
);

export default Goods;
