import styles from './FixedSideButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const FixedSideButtons = () => {
  return (
    <>
    <a href="#" className={styles.related}>
      <FontAwesomeIcon icon={faChrome} className={styles.chromeIcon} />
      <span className={styles.relatedSpan}>RELATED</span>
    </a>

    <a href="#" className={styles.buyNow}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
      <span className={styles.cartSpan}>BUY NOW</span>
    </a>
    </>
  );
}


export default FixedSideButtons;