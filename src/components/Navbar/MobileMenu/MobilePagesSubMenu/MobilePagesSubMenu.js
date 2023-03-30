import styles from './MobilePagesSubMenu.module.css';


const MobilePagesSubMenu = ({pagesState}) => {
  return (
    <ul className={pagesState ? styles.activePagesSubMenu : styles.pagesSubMenu}>
      <li><a href="#" className={styles.subMenuLink}>About Us</a></li>
      <li><a href="#" className={styles.subMenuLink}> What We Do</a></li>
      <li><a href="#" className={styles.subMenuLink}>Our Team</a></li>
      <li><a href="#" className={styles.subMenuLink}>Meet The Crew</a></li>
      <li><a href="#" className={styles.subMenuLink}>Team Member</a></li>
      <li><a href="#" className={styles.subMenuLink}>Our Services</a></li>
      <li><a href="#" className={styles.subMenuLink}>Pricing Plans</a></li>
      <li><a href="#" className={styles.subMenuLink}>Payment</a></li>
      <li><a href="#" className={styles.subMenuLink}>Testimonials</a></li>
      <li><a href="#" className={styles.subMenuLink}>Gift Cards</a></li>
      <li><a href="#" className={styles.subMenuLink}>Terms and Conditions</a></li>
      <li><a href="#" className={styles.subMenuLink}>Contact Us</a></li>
      <li><a href="#" className={styles.subMenuLink}>Leave Us A Note</a></li>
      <li><a href="#" className={styles.subMenuLink}>FAQ</a></li>
      <li><a href="#" className={styles.lastSubMenuLink}>Coming Soon</a></li>
    </ul>
  );
}


export default MobilePagesSubMenu;