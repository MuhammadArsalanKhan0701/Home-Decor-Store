import styles from './HomeSubMenu.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const HomeSubMenu = ({homeState}) => {
  const [arrowOne, setArrowOne] = useState(false);
  const [arrowTwo, setArrowTwo] = useState(false);
  const [arrowThree, setArrowThree] = useState(false);
  const [arrowFour, setArrowFour] = useState(false);
  const [arrowFive, setArrowFive] = useState(false);
  const [arrowSix, setArrowSix] = useState(false);
  const [arrowSeven, setArrowSeven] = useState(false);
  const [arrowEight, setArrowEight] = useState(false);
  const [arrowNine, setArrowNine] = useState(false);
  const [arrowTen, setArrowTen] = useState(false);
  const [arrowEleven, setArrowEleven] = useState(false);
  const [arrowTwelve, setArrowTwelve] = useState(false);

  return (
    <ul className={homeState ? styles.activeHomeSubMenu : styles.homeSubMenu}>

      <li>
        <p className={styles.subMenuTitle}>
          <FontAwesomeIcon icon={faArrowRight} className={styles.activeArrowRight} />
          Main Home
        </p></li>

      <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
          Minimal Home</a></li>

      <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
          Masonry Home</a></li>

      <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
          Classic Home</a></li>

      <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
          Passepartout Home</a></li>

      <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
          Left Menu Home</a></li>

      <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
          Boxed Home</a></li>

      <li onMouseEnter={() => setArrowSeven(true)} onMouseLeave={() => setArrowSeven(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowSeven ? styles.activeArrowRight : styles.arrowRight} />
          Full Screen Home</a></li>

      <li  onMouseEnter={() => setArrowEight(true)} onMouseLeave={() => setArrowEight(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowEight ? styles.activeArrowRight : styles.arrowRight} />
          Product Showcase</a></li>

      <li onMouseEnter={() => setArrowNine(true)} onMouseLeave={() => setArrowNine(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowNine ? styles.activeArrowRight : styles.arrowRight} />
          Slider Showcase</a></li>

      <li onMouseEnter={() => setArrowTen(true)} onMouseLeave={() => setArrowTen(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowTen ? styles.activeArrowRight : styles.arrowRight} />
          Simple Home</a></li>

      <li onMouseEnter={() => setArrowEleven(true)} onMouseLeave={() => setArrowEleven(false)}>
        <a href="#" className={styles.subMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowEleven ? styles.activeArrowRight : styles.arrowRight} />
          Split Showcase</a></li>

      <li onMouseEnter={() => setArrowTwelve(true)} onMouseLeave={() => setArrowTwelve(false)}>
        <a href="#" className={styles.lastSubMenuLink}>
          <FontAwesomeIcon icon={faArrowRight} className={arrowTwelve ? styles.activeArrowRight : styles.arrowRight} />
          Landing Page</a></li>

    </ul>
  );
}

export default HomeSubMenu;