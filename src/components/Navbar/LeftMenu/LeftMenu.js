import styles from './LeftMenu.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HomeSubMenu from './HomeSubMenu/HomeSubMenu';
import ShopSubMenu from './ShopSubMenu/ShopSubMenu';
import PagesSubMenu from './PagesSubMenu/PagesSubMenu';
import ElementsSubMenu from './ElementsSubMenu/ElementsSubMenu';

const LeftMenu = () => {
  const [homeState, setHomeState] = useState(false);
  const [shopState, setShopState] = useState(false);
  const [pagesState, setPagesState] = useState(false);
  const [elementsState, setElementsState] = useState(false);
  const [arrowState, setArrowState] = useState(false);

  const mouseEnterHome = () => {
    setHomeState(presvState => !presvState);
  }
  const mouseLeaveHome = () => {
    setHomeState(presvState => !presvState);
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
          <HomeSubMenu homeState={homeState} />
        </li>

        <li onMouseEnter={mouseEnterShop} onMouseLeave={mouseLeaveShop}>
          <a href="#" className={styles.leftMenuLink}>SHOP</a>
          <ShopSubMenu shopState={shopState} />
        </li>

        <li onMouseEnter={mouseEnterPages} onMouseLeave={mouseLeavePages}>
          <a href="#" className={styles.leftMenuLink}>PAGES</a>
          <PagesSubMenu pagesState={pagesState} />
        </li>

        <li onMouseEnter={mouseEnterElements} onMouseLeave={mouseLeaveElements}>
          <a href="#" className={styles.leftMenuLink}>ELEMENTS</a>
          <ElementsSubMenu elementsState={elementsState} />
        </li>
      </ul>
  );
}

export default LeftMenu;