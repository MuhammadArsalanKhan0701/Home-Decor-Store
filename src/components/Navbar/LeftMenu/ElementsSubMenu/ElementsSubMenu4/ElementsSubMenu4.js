import styles from './ElementsSubMenu4.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ElementsSubMenu4 = () => {
  const [arrowOne, setArrowOne] = useState(false);
  const [arrowTwo, setArrowTwo] = useState(false);
  const [arrowThree, setArrowThree] = useState(false);
  const [arrowFour, setArrowFour] = useState(false);
  const [arrowFive, setArrowFive] = useState(false);
  const [arrowSix, setArrowSix] = useState(false);
  const [arrowSeven, setArrowSeven] = useState(false);
  const [arrowEight, setArrowEight] = useState(false);
  const [arrowNine, setArrowNine] = useState(false);

  return (
    <div className={styles.elementsSubDiv4}>
        <ul className={styles.elementsSubMenu4}>
          <li><p className={styles.subMenuTitle}>PRESENTATION</p></li>

          <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
            Depot Banner</a></li>

          <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
            Portfolio List</a></li>

          <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
            Blog List</a></li>

          <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
            Item Showcase</a></li>

          <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
            Clients</a></li>

          <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
            Testimonials Slider</a></li>

          <li onMouseEnter={() => setArrowSeven(true)} onMouseLeave={() => setArrowSeven(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSeven ? styles.activeArrowRight : styles.arrowRight} />
            Team List</a></li>

          <li onMouseEnter={() => setArrowEight(true)} onMouseLeave={() => setArrowEight(false)}>
            <a href="#" className={styles.subMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowEight ? styles.activeArrowRight : styles.arrowRight} />
            Team Slider</a></li>

          <li onMouseEnter={() => setArrowNine(true)} onMouseLeave={() => setArrowNine(false)}><a href="#" className={styles.lastSubMenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowNine ? styles.activeArrowRight : styles.arrowRight} />
            Team Member</a></li>
        </ul>
      </div>
  );
}

export default ElementsSubMenu4;