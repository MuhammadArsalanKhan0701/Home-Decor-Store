import styles from './MobileShopSubMenu.module.css';


const MobileShopSubMenu = ({ shopState }) => {
  return (
    <div className={shopState ? styles.activeShopSubMenuDiv : styles.shopSubMenuDiv}>
      <ul className={styles.shopSubMenu1}>
        <li><p className={styles.subMenuTitle}>SHOP TYPES</p></li>
        <li><a href="#" className={styles.subMenuLink}>Left Sidebar</a></li>
        <li><a href="#" className={styles.subMenuLink}>With Filter</a></li>
        <li><a href="#" className={styles.subMenuLink}>Masonry - Grid</a></li>
        <li><a href="#" className={styles.subMenuLink}>Masonry - Wide</a></li>
        <li><a href="#" className={styles.subMenuLink}>Shop Carousel</a></li>
        <li><a href="#" className={styles.subMenuLink}>Shop Boxed</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Single Category</a></li>
      </ul>
      <ul className={styles.shopSubMenu2}>
        <li><p className={styles.subMenuTitle}>PRODUCT TYPES</p></li>
        <li><a href="#" className={styles.subMenuLink}>Standard Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>Grouped Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>Variable Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>Downloadable Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>Virtual Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>External Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>New! Product</a></li>
        <li><a href="#" className={styles.subMenuLink}>On Sale Product</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Out of stock Product</a></li>
      </ul>
      <ul className={styles.shopSubMenu3}>
        <li><p className={styles.subMenuTitle}>FEATURED</p></li>
        <li><a href="#" className={styles.subMenuLink}>User Dashboard</a></li>
        <li><a href="#" className={styles.subMenuLink}>Order Tracking</a></li>
        <li><a href="#" className={styles.subMenuLink}>My Account</a></li>
        <li><a href="#" className={styles.subMenuLink}>Cart</a></li>
        <li><a href="#" className={styles.subMenuLink}>Checkout</a></li>
        <li><a href="#" className={styles.subMenuLink}>Addresses</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Payment Methods</a></li>
      </ul>
      <ul className={styles.shopSubMenu4}>
        <li><p className={styles.subMenuTitle}>LAYOUTS</p></li>
        <li><a href="#" className={styles.subMenuLink}> Two Columns Grid</a></li>
        <li><a href="#" className={styles.subMenuLink}>Three Columns Grid</a></li>
        <li><a href="#" className={styles.subMenuLink}>Four Columns Grid</a></li>
        <li><a href="#" className={styles.subMenuLink}> Four Columns Wide</a></li>
        <li><a href="#" className={styles.subMenuLink}>Five Columns Wide</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Six Columns Wide</a></li>
      </ul>
    </div>
  );
}


export default MobileShopSubMenu;