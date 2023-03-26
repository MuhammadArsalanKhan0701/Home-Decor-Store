import { useState } from "react";
import styles from './PagesSubMenu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PagesSubMenu = ({pagesState}) => {
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
  const [arrowThirteen, setArrowThirteen] = useState(false);
  const [arrowFourteen, setArrowFourteen] = useState(false);
  const [arrowFifteen, setArrowFifteen] = useState(false);

  return (
    <ul className={pagesState ? styles.activePagesSubMenu : styles.pagesSubMenu}>

      <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
        About Us</a></li>

      <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
        What We Do</a></li>

      <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
        Our Team</a></li>

      <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
        Meet The Crew</a></li>

      <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
        Team Member</a></li>

      <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
        Our Services</a></li>

      <li onMouseEnter={() => setArrowSeven(true)} onMouseLeave={() => setArrowSeven(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowSeven ? styles.activeArrowRight : styles.arrowRight} />
        Pricing Plans</a></li>

      <li onMouseEnter={() => setArrowEight(true)} onMouseLeave={() => setArrowEight(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowEight ? styles.activeArrowRight : styles.arrowRight} />
        Payment</a></li>

      <li onMouseEnter={() => setArrowNine(true)} onMouseLeave={() => setArrowNine(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowNine ? styles.activeArrowRight : styles.arrowRight} />
        Testimonials</a></li>

      <li onMouseEnter={() => setArrowTen(true)} onMouseLeave={() => setArrowTen(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowTen ? styles.activeArrowRight : styles.arrowRight} />
        Gift Cards</a></li>

      <li onMouseEnter={() => setArrowEleven(true)} onMouseLeave={() => setArrowEleven(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowEleven ? styles.activeArrowRight : styles.arrowRight} />
        Terms and Conditions</a></li>

      <li onMouseEnter={() => setArrowTwelve(true)} onMouseLeave={() => setArrowTwelve(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowTwelve ? styles.activeArrowRight : styles.arrowRight} />
        Contact Us</a></li>

      <li onMouseEnter={() => setArrowThirteen(true)} onMouseLeave={() => setArrowThirteen(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowThirteen ? styles.activeArrowRight : styles.arrowRight} />
        Leave Us A Note</a></li>

      <li onMouseEnter={() => setArrowFourteen(true)} onMouseLeave={() => setArrowFourteen(false)}>
        <a href="#" className={styles.subMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowFourteen ? styles.activeArrowRight : styles.arrowRight} />
        FAQ</a></li>

      <li onMouseEnter={() => setArrowFifteen(true)} onMouseLeave={() => setArrowFifteen(false)}>
        <a href="#" className={styles.lastSubMenuLink}>
        <FontAwesomeIcon icon={faArrowRight} className={arrowFifteen ? styles.activeArrowRight : styles.arrowRight} />
        Coming Soon</a></li>

    </ul>
  );
}

export default PagesSubMenu;