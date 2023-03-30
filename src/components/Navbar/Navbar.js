import styles from './Navbar.module.css';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import MobileMenu from './MobileMenu/MobileMenu';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      
      <LeftMenu />

      <a href="#" className={styles.logo}>DEPOT</a>

      <RightMenu />
      
      <MobileMenu />

    </div>
  );
}

export default Navbar;