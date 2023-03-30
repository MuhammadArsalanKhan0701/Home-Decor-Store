import styles from './MobileMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import MobileHomeSubMenu from './MobileHomeSubMenu/MobileHomeSubMenu';
import MobilePagesSubMenu from './MobilePagesSubMenu/MobilePagesSubMenu';
import MobileShopSubMenu from './MobileShopSubMenu/MobileShopSubMenu';
import MobileElementsSubMenu from './MobileElementsSubMenu/MobileElementsSubMenu';


const MobileMenu = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [homeState, setHomeState] = useState(false);
  const [pagesState, setPagesState] = useState(false);
  const [shopState, setShopState] = useState(false);
  const [elementsState, setElementsState] = useState(false);

  const menuIconClickHandler = () => {
    setMobileMenuState((prevState) => !prevState);
  }

  return (
    <div className={styles.mobileMenuContainer}>
      <FontAwesomeIcon icon={faBars}
        className={styles.barsIcon}
        onClick={menuIconClickHandler}
      />

      <ul className={mobileMenuState ? styles.mobileMenu : styles.inactiveMenu}>
        <FontAwesomeIcon icon={faX}
          className={styles.crossIcon}
          onClick={() => setMobileMenuState(false)}
        />
        <li>
          <a href="#" className={styles.mobileMenuLink}
            onClick={() => setHomeState(prevState => !prevState)}>
            HOME</a>
          <MobileHomeSubMenu homeState={homeState} />
        </li>

        <li>
          <a href="#" className={styles.mobileMenuLink}
            onClick={() => setShopState(prevState => !prevState)}>
            SHOP</a>
          <MobileShopSubMenu shopState={shopState} />
        </li>

        <li>
          <a href="#" className={styles.mobileMenuLink}
            onClick={() => setPagesState(prevState => !prevState)}>
            PAGES</a>
          <MobilePagesSubMenu pagesState={pagesState} />
        </li>

        <li>
          <a href="#" className={styles.mobileMenuLink}
            onClick={() => setElementsState(prevState => !prevState)}>
            ELEMENTS</a>
          <MobileElementsSubMenu elementsState={elementsState} />
        </li>
      </ul>

    </div>
  );
}

export default MobileMenu;