import {ClassNameLogo} from '../../const';
import Logo from '../logo/logo';

const Footer = (): JSX.Element => (
  <footer className="footer container">
    <Logo className={ClassNameLogo.Footer} />
  </footer>
);

export default Footer;
