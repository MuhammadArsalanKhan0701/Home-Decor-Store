import styles from './Navbar.module.css';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import MobileMenu from './MobileMenu/MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      
      <LeftMenu />

      <Link to='/' className={styles.logo}>DEPOT</Link>

      <RightMenu />
      
      <MobileMenu />

    </div>
  );
}

export default Navbar;