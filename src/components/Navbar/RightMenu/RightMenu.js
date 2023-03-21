import styles from './RightMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import sidebarImage1 from '../../../img/side/sideimg1.png';
import sidebarImage2 from '../../../img/side/sideimg2.png';
import sidebarImage3 from '../../../img/side/sideimg3.png';
import sidebarImage4 from '../../../img/side/sideimg4.png';
import sidebarImage5 from '../../../img/side/sideimg5.png';
import sidebarImage6 from '../../../img/side/sideimg6.png';
import sidebarImage7 from '../../../img/side/sideimg7.png';
import sidebarImage8 from '../../../img/side/sideimg8.png';

const RightMenu = () => {
  const [cartState, setCartState] = useState(false);
  const [sideMenuState, setSideMenuState] = useState(false);

  const mouseEnterCart = () => {
    setCartState(true);
  }
  const mouseLeaveCart = () => {
    setCartState(false);
  }

  const sideMenuClickHandler = () => {
    setSideMenuState(true);
  }

  return (
    <ul className={styles.rightMenu}>

      <li onMouseEnter={mouseEnterCart} onMouseLeave={mouseLeaveCart}>
        <a href="#" className={styles.rightMenuLink}>CART ($0) </a>
        <div className={cartState ? styles.activeCartSubDiv : styles.cartSubDiv}>
          No products in the cart.
        </div>
      </li>

      <li><a href="#" className={styles.rightMenuLink}>
        <FontAwesomeIcon icon={faHeart} /> (0)
      </a></li>

      <li><a href="#" className={styles.rightMenuLink}>
        <FontAwesomeIcon icon={faUser} /> LOGIN
      </a></li>

      <li>
        <a href="#" className={styles.rightMenuLink}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
      </li>

      <li>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.sideMenuIcon}
          onClick={sideMenuClickHandler}
        />
        <div className={sideMenuState ? styles.activeSideMenu : styles.sideMenu}>

          <h6 className={styles.sideMenuH6}>WELCOME</h6>

          <p className={styles.sideMenuP}>Advertising is the way great brands get to
            be great brands.
          </p>

          <div className={styles.sideMenuImgGrid}>
            <img className={styles.sideMenuImgGridItem} src={sidebarImage1} alt="side bar 1" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage2} alt="side bar 2" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage3} alt="side bar 3" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage4} alt="side bar 4" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage5} alt="side bar 5" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage6} alt="side bar 6" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage7} alt="side bar 7" />
            <img className={styles.sideMenuImgGridItem} src={sidebarImage8} alt="side bar 8" />
          </div>

          <div className={styles.sideMenuFooter}>

            <p className={styles.sideMenuFooterP}>WE ARE AWESOME FOLLOW US</p>

            <div>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.sideMenuFooterSocialIcons} />
              </a>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.sideMenuFooterSocialIcons} />
              </a>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className={styles.sideMenuFooterSocialIcons} />
              </a>
            </div>

          </div>

          <FontAwesomeIcon icon={faX} className={styles.sideMenuXicon}
            onClick={() => { setSideMenuState(false) }} />

        </div>
      </li>
    </ul>
  );
}

export default RightMenu;