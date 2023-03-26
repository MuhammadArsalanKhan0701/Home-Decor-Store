import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './ShopSubMenu3.module.css';

const ShopSubMenu3 = () => {
  const [arrowOne, setArrowOne] = useState(false);
  const [arrowTwo, setArrowTwo] = useState(false);
  const [arrowThree, setArrowThree] = useState(false);
  const [arrowFour, setArrowFour] = useState(false);
  const [arrowFive, setArrowFive] = useState(false);
  const [arrowSix, setArrowSix] = useState(false);
  const [arrowSeven, setArrowSeven] = useState(false);

  return (
    <div className={styles.shopSubDiv3}>
      <ul className={styles.shopSubMenu3}>
        <li><p className={styles.subMenuTitle}>FEATURED</p></li>

        <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
          User Dashboard</a></li>
          
        <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
          Order Tracking</a></li>

        <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
          My Account</a></li>

        <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
          Cart</a></li>

        <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
          Checkout</a></li>

        <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
          <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
          Addresses</a></li>

        <li onMouseEnter={() => setArrowSeven(true)} onMouseLeave={() => setArrowSeven(false)}>
          <a href="#" className={styles.lastSubMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowSeven ? styles.activeArrowRight : styles.arrowRight} />
          Payment Methods</a></li>
      </ul>
    </div>
  );
}

export default ShopSubMenu3;