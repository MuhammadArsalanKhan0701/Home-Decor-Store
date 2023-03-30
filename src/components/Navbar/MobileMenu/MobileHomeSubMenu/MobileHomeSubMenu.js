import styles from './MobileHomeSubMenu.module.css';


const MobileHomeSubMenu = ({ homeState }) => {
  return (
    <ul className={homeState ? styles.activeHomeSubMenu : styles.homeSubMenu} >
      <li><p className={styles.subMenuTitle}> Main Home</p></li>
      <li><a href="#" className={styles.subMenuLink}>Minimal Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Masonry Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Classic Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Passepartout Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Left Menu Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Boxed Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Full Screen Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Product Showcase</a></li>
      <li><a href="#" className={styles.subMenuLink}>Slider Showcase</a></li>
      <li><a href="#" className={styles.subMenuLink}>Simple Home</a></li>
      <li><a href="#" className={styles.subMenuLink}>Split Showcase</a></li>
      <li><a href="#" className={styles.lastSubMenuLink}>Landing Page</a></li>
    </ul>
  );
}

export default MobileHomeSubMenu;