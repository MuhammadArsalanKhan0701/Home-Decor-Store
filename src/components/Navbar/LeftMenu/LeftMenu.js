import styles from './LeftMenu.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LeftMenu = () => {
  const [homeState, setHomeState] = useState(false);
  const [shopState, setShopState] = useState(false);
  const [pagesState, setPagesState] = useState(false);
  const [elementsState, setElementsState] = useState(false);
  const [arrowState, setArrowState] = useState(false);

  const mouseEnterHome = () => {
    setHomeState(true);
  }
  const mouseLeaveHome = () => {
    setHomeState(false);
  }
  const mouseEnterPages = () => {
    setPagesState(true);
  }
  const mouseLeavePages = () => {
    setPagesState(false);
  }
  const mouseEnterShop = () => {
    setShopState(true);
  }
  const mouseLeaveShop = () => {
    setShopState(false);
  }
  const mouseEnterElements = () => {
    setElementsState(true);
  }
  const mouseLeaveElements = () => {
    setElementsState(false);
  }

  return (
    <ul className={styles.leftMenu}>
        <li onMouseEnter={mouseEnterHome} onMouseLeave={mouseLeaveHome}>
          <a href="#" className={styles.leftMenuLink}>HOME</a>
          <ul className={homeState ? styles.activeHomeSubMenu : styles.homeSubMenu}>
            <li>
              <p className={styles.subMenuTitle}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.activeArrowRight} />
              Main Home
              </p></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Minimal Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Masonry Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Classic Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Passepartout Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Left Menu Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Boxed Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Full Screen Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Product Showcase</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Slider Showcase</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Simple Home</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Split Showcase</a></li>
            <li onMouseEnter={()=>setArrowState(true)} onMouseLeave={()=>setArrowState(false)}>
              <a href="#" className={styles.lastSubMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={arrowState ? styles.activeArrowRight : styles.arrowRight} />
              Landing Page</a></li>
          </ul>
        </li>

        <li onMouseEnter={mouseEnterShop} onMouseLeave={mouseLeaveShop}>
          <a href="#" className={styles.leftMenuLink}>SHOP</a>
          <div className={shopState ? styles.activeShopSubMenuDiv : styles.shopSubMenuDiv}>
            <div className="shopSubMenuDiv1">
              <ul className={styles.shopSubMenu1}>
                <li><p className={styles.subMenuTitle}>SHOP TYPES</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Left Sidebar</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  With Filter</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Masonry - Grid</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Masonry - Wide</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Shop Carousel</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Shop Boxed</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Single Category</a></li>
              </ul>
            </div>
            <div className="shopSubMenuDiv2">
              <ul className={styles.shopSubMenu2}>
                <li><p className={styles.subMenuTitle}>PRODUCT TYPES</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Standard Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Grouped Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Variable Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Downloadable Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Virtual Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  External Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  New! Product</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  On Sale Product</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Out of stock Product</a></li>
            </ul>
            </div>
            <div className="shopSubMenuDiv3">
              <ul className={styles.shopSubMenu3}>
                <li><p className={styles.subMenuTitle}>FEATURED</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  User Dashboard</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Order Tracking</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  My Account</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Cart</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Checkout</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Addresses</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Payment Methods</a></li>
              </ul>
            </div>
            <div className="shopSubMenuDiv4">
              <ul className={styles.shopSubMenu4}>
                <li><p className={styles.subMenuTitle}>LAYOUTS</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Two Columns Grid</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Three Columns Grid</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Four Columns Grid</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Four Columns Wide</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Five Columns Wide</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Six Columns Wide</a></li>
              </ul>
            </div>
          </div>
        </li>

        <li onMouseEnter={mouseEnterPages} onMouseLeave={mouseLeavePages}>
          <a href="#" className={styles.leftMenuLink}>PAGES</a>
          <ul className={pagesState ? styles.activePagesSubMenu : styles.pagesSubMenu}>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              About Us</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              What We Do</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Our Team</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Meet The Crew</a></li>  
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Team Member</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Our Services</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Pricing Plans</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Payment</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Testimonials</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Gift Cards</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Terms and Conditions</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Contact Us</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Leave Us A Note</a></li>
            <li><a href="#" className={styles.subMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              FAQ</a></li>
            <li><a href="#" className={styles.lastSubMenuLink}>
              <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
              Coming Soon</a></li>
          </ul>
        </li>

        <li onMouseEnter={mouseEnterElements} onMouseLeave={mouseLeaveElements}>
          <a href="#" className={styles.leftMenuLink}>ELEMENTS</a>
          <div className={elementsState ? styles.activeElementsSubMenuDiv : styles.elementsSubMenuDiv}>
            <div className="elementsSubMenuDiv1">
              <ul className={styles.elementsSubMenu1}>
                <li><p className={styles.subMenuTitle}>SHOP SHORTCODES</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Product List</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Product List - Carousel</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Product List - Simple</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  On Sale Products</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Top Rated Products</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Best Selling Products</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Products by Attribute</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Single Category List</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Order Tracking</a></li>
              </ul>
            </div>
            <div className="elementsSubMenuDiv2">
              <ul className={styles.elementsSubMenu2}>
                <li><p className={styles.subMenuTitle}>CLASSIC</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Accordions & Toggles</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Tabs</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Buttons</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Call To Action</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Separators</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Contact Form</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Icon With Text</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Message Boxes</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Typography</a></li>
              </ul>
            </div>
            <div className="elementsSubMenuDiv3">
              <ul className={styles.elementsSubMenu3}>
                <li><p className={styles.subMenuTitle}>INFOGRAPHIC</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Pricing Tables</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Progress Bar</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Process</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Google Map</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Counters</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Countdown</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Pie Chart</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Video Button</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Image Gallery</a></li>
              </ul>
            </div>
            <div className="elementsSubMenuDiv4">
              <ul className={styles.elementsSubMenu4}>
                <li><p className={styles.subMenuTitle}>PRESENTATION</p></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Depot Banner</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Portfolio List</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Blog List</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Item Showcase</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Clients</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Testimonials Slider</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Team List</a></li>
                <li><a href="#" className={styles.subMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Team Slider</a></li>
                <li><a href="#" className={styles.lastSubMenuLink}>
                  <FontAwesomeIcon icon={ faArrowRight } className={styles.arrowRight} />
                  Team Member</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
  );
}

export default LeftMenu;