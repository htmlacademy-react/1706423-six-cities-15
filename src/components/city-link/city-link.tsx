import {Link} from 'react-router-dom';
import {CityTubs} from '../../types';

type CityLinkProps = {
  city: CityTubs[number];
  className?: string;
};

const CityLink = ({city, className}: CityLinkProps): JSX.Element => (
  <Link
    className={`locations__item-link ${className}`}
    to={`/${city.id}`}
  >
    <span>{city.name}</span>
  </Link>
);

export default CityLink;
