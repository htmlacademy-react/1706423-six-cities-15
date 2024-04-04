import {memo} from 'react';

type FoundPlacesProps = {
  count: number;
  place: string;
}

const FoundPlaces = memo(({count, place}: FoundPlacesProps): JSX.Element => (
  <b className="places__found">{count} place{count > 1 && 's'} to stay in {place}</b>
));

FoundPlaces.displayName = 'FoundPlaces';

export default FoundPlaces;
