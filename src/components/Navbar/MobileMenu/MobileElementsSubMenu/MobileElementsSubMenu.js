import styles from './MobileElementsSubMenu.module.css';


const MobileElementsSubMenu = ({ elementsState }) => {
  return (
    <div className={elementsState ? styles.activeElementsSubMenuDiv : styles.elementsSubMenuDiv}>
      <ul className={styles.elementsSubMenu1}>
        <li><p className={styles.subMenuTitle}>SHOP SHORTCODES</p></li>
        <li><a href="#" className={styles.subMenuLink}>Product List</a></li>
        <li><a href="#" className={styles.subMenuLink}>Product List - Carousel</a></li>
        <li><a href="#" className={styles.subMenuLink}>Product List - Simple</a></li>
        <li><a href="#" className={styles.subMenuLink}>On Sale Products</a></li>
        <li><a href="#" className={styles.subMenuLink}>Top Rated Products</a></li>
        <li><a href="#" className={styles.subMenuLink}>Best Selling Products</a></li>
        <li><a href="#" className={styles.subMenuLink}>Products by Attribute</a></li>
        <li><a href="#" className={styles.subMenuLink}>Single Category List</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Order Tracking</a></li>
      </ul>
      <ul className={styles.elementsSubMenu2}>
        <li><p className={styles.subMenuTitle}>CLASSIC</p></li>
        <li><a href="#" className={styles.subMenuLink}>Accordions & Toggles</a></li>
        <li><a href="#" className={styles.subMenuLink}>Tabs</a></li>
        <li><a href="#" className={styles.subMenuLink}>Buttons</a></li>
        <li><a href="#" className={styles.subMenuLink}>Call To Action</a></li>
        <li><a href="#" className={styles.subMenuLink}>Separators</a></li>
        <li><a href="#" className={styles.subMenuLink}>Contact Form</a></li>
        <li><a href="#" className={styles.subMenuLink}>Icon With Text</a></li>
        <li><a href="#" className={styles.subMenuLink}>Message Boxes</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}> Typography</a></li>
      </ul>
      <ul className={styles.elementsSubMenu3}>
        <li><p className={styles.subMenuTitle}>INFOGRAPHIC</p></li>
        <li><a href="#" className={styles.subMenuLink}>Pricing Tables</a></li>
        <li><a href="#" className={styles.subMenuLink}>Progress Bar</a></li>
        <li><a href="#" className={styles.subMenuLink}>Process</a></li>
        <li><a href="#" className={styles.subMenuLink}>Google Map</a></li>
        <li><a href="#" className={styles.subMenuLink}>Counters</a></li>
        <li><a href="#" className={styles.subMenuLink}>Countdown</a></li>
        <li><a href="#" className={styles.subMenuLink}>Pie Chart</a></li>
        <li><a href="#" className={styles.subMenuLink}>Video Button</a></li>
        <li><a href="#" className={styles.lastSubMenuLink}>Image Gallery</a></li>
      </ul>
      <ul className={styles.elementsSubMenu4}>
          <li><p className={styles.subMenuTitle}>PRESENTATION</p></li>
          <li><a href="#" className={styles.subMenuLink}>Depot Banner</a></li>
          <li><a href="#" className={styles.subMenuLink}>Portfolio List</a></li>
          <li><a href="#" className={styles.subMenuLink}>Blog List</a></li>
          <li><a href="#" className={styles.subMenuLink}>Item Showcase</a></li>
          <li><a href="#" className={styles.subMenuLink}>Clients</a></li>
          <li><a href="#" className={styles.subMenuLink}>Testimonials Slider</a></li>
          <li><a href="#" className={styles.subMenuLink}>Team List</a></li>
          <li><a href="#" className={styles.subMenuLink}>Team Slider</a></li>
          <li><a href="#" className={styles.lastSubMenuLink}>Team Member</a></li>
        </ul>
    </div>
  );
}


export default MobileElementsSubMenu;