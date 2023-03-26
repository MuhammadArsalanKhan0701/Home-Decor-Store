import styles from './ElementsSubMenu.module.css';
import ElementsSubMenu1 from './ElementsSubMenu1/ElementsSubMenu1';
import ElementsSubMenu2 from './ElementsSubMenu2/ElementsSubMenu2';
import ElementsSubMenu3 from './ElementsSubMenu3/ElementsSubMenu3';
import ElementsSubMenu4 from './ElementsSubMenu4/ElementsSubMenu4';

const ElementsSubMenu = ({elementsState}) => {
  return (
    <div className={elementsState ? styles.activeElementsSubMenuDiv : styles.elementsSubMenuDiv}>
      <ElementsSubMenu1 />
      <ElementsSubMenu2 />
      <ElementsSubMenu3 />
      <ElementsSubMenu4 />
    </div>
  );
}

export default ElementsSubMenu;