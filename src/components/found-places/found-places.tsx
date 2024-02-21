type FoundPlacesProps = {
  count: number;
  place: string;
}

const FoundPlaces = ({count, place}: FoundPlacesProps): JSX.Element => (
  <b className="places__found">{count} places to stay in {place}</b>
);

export default FoundPlaces;
