type SortPlacesProps = {
  sortItems: {
    item: string;
    isActive: boolean;
  }[];
}

const SortPlaces = ({sortItems}: SortPlacesProps): JSX.Element => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      {sortItems.filter((item) => item.isActive === true)[0].item}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {sortItems.map(({item, isActive}) => (
        <li
          className={`places__option ${isActive && 'places__option--active'}`}
          tabIndex={0}
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </form>
);

export default SortPlaces;
