import styles from './ShopSubMenu.module.css';
import ShopSubMenu1 from './ShopSubMenu1/ShopSubMenu1';
import ShopSubMenu2 from './ShopSubMenu2/ShopSubMenu2';
import ShopSubMenu3 from './ShopSubMenu3/ShopSubMenu3';
import ShopSubMenu4 from './ShopSubMenu4/ShopSubMenu4';


const ShopSubMenu = ({shopState}) => {
  return (
    <div className={shopState ? styles.activeShopSubMenuDiv : styles.shopSubMenuDiv}>

      <ShopSubMenu1 />
      
      <ShopSubMenu2 />

      <ShopSubMenu3 />

      <ShopSubMenu4 />

    </div>
  );
}

export default ShopSubMenu;