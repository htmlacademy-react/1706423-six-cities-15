import {Dispatch, MouseEventHandler, SetStateAction, memo, useState} from 'react';
import {SortItems} from '../../../types';

type SortPlacesProps = {
  sortItems: SortItems;
  activeSortItem: SortItems[number];
  setter: Dispatch<SetStateAction<SortItems[number]>>;
}

const SortPlaces = memo(({sortItems, activeSortItem, setter}: SortPlacesProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick: MouseEventHandler<HTMLElement> = (evt) => {
    if (activeSortItem !== evt.currentTarget.textContent) {
      setter(evt.currentTarget.textContent as SortItems[number]);
    }
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        {activeSortItem}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${
        isOpen ? 'places__options--opened' : ''}`}
      >
        {sortItems.map((item) => (
          <li
            className={`places__option ${activeSortItem === item ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
});

SortPlaces.displayName = 'SortPlaces';

export default SortPlaces;
