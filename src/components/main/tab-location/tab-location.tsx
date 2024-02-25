type TabLocationProps = {
  name: string;
  isActive?: boolean;
};

const TabLocation = ({name, isActive = false}: TabLocationProps): JSX.Element => (
  <li className="locations__item">
    <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`} href="#">
      <span>{name}</span>
    </a>
  </li>
);

export default TabLocation;
