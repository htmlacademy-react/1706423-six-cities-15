import {memo} from 'react';
import {ClassNameLogo} from '../../const';
import Logo from '../logo/logo';


const Footer = memo((): JSX.Element => (
  <footer className="footer container">
    <Logo className={ClassNameLogo.Footer} />
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
