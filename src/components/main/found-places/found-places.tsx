type FoundPlacesProps = {
  count: number;
  place: string;
}

const FoundPlaces = ({count, place}: FoundPlacesProps): JSX.Element => (
  <b className="places__found">{count} place{count > 1 && 's'} to stay in {place}</b>
);

export default FoundPlaces;
