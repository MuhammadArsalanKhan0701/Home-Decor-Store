import styles from './Navbar.module.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import RightMenu from '../RightMenu/RightMenu';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      
      <LeftMenu />

      <a href="#" className={styles.logo}>DEPOT</a>

      <RightMenu />
      
    </div>
  );
}

export default Navbar;