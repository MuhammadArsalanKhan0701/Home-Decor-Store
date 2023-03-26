import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './ShopSubMenu4.module.css';

const ShopSubMenu4 = () => {
  const [arrowOne, setArrowOne] = useState(false);
  const [arrowTwo, setArrowTwo] = useState(false);
  const [arrowThree, setArrowThree] = useState(false);
  const [arrowFour, setArrowFour] = useState(false);
  const [arrowFive, setArrowFive] = useState(false);
  const [arrowSix, setArrowSix] = useState(false);

  return (
    <div className={styles.shopSubDiv4}>
      <ul className={styles.shopSubMenu4}>
        <li><p className={styles.subMenuTitle}>LAYOUTS</p></li>

        <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
          <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
            Two Columns Grid</a></li>

        <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
          <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
            Three Columns Grid</a></li>

        <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
          <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
            Four Columns Grid</a></li>

        <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
          <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
            Four Columns Wide</a></li>

        <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
          <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
            Five Columns Wide</a></li>

        <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
          <a href="#" className={styles.lastSubMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
            Six Columns Wide</a></li>
      </ul>
    </div>
  );
}

export default ShopSubMenu4;