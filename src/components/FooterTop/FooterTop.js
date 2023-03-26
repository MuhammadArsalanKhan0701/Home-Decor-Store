import styles from './FooterTop.module.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FooterTop = () => {
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
  const [arrowSixteen, setArrowSixteen] = useState(false);

  return (
    <div className={styles.footerTop}>
      <div className={styles.footerDiv1}>
        <h4 className={styles.footerDiv1H4}>CUSTOMER SERVICE</h4>
        <ul className={styles.footerDiv1Menu}>
          <li onMouseEnter={() => setArrowOne(true)} onMouseLeave={() => setArrowOne(false)}>
            <a href="#" className={styles.footerDiv1MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowOne ? styles.activeArrowRight : styles.arrowRight} />
              Help & Contact Us</a>
          </li>
          <li onMouseEnter={() => setArrowTwo(true)} onMouseLeave={() => setArrowTwo(false)}>
            <a href="#" className={styles.footerDiv1MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowTwo ? styles.activeArrowRight : styles.arrowRight} />
              Returns & Refunds</a>
          </li>
          <li onMouseEnter={() => setArrowThree(true)} onMouseLeave={() => setArrowThree(false)}>
            <a href="#" className={styles.footerDiv1MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowThree ? styles.activeArrowRight : styles.arrowRight} />
              Online Stores</a>
          </li>
          <li onMouseEnter={() => setArrowFour(true)} onMouseLeave={() => setArrowFour(false)}>
            <a href="#" className={styles.footerDiv1MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFour ? styles.activeArrowRight : styles.arrowRight} />
            Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv2}>
        <h4 className={styles.footerDiv2H4}>COMPANY</h4>
        <ul className={styles.footerDiv2Menu}>
          <li onMouseEnter={() => setArrowFive(true)} onMouseLeave={() => setArrowFive(false)}>
            <a href="#" className={styles.footerDiv2MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFive ? styles.activeArrowRight : styles.arrowRight} />
            What We Do</a>
          </li>
          <li onMouseEnter={() => setArrowSix(true)} onMouseLeave={() => setArrowSix(false)}>
            <a href="#" className={styles.footerDiv2MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSix ? styles.activeArrowRight : styles.arrowRight} />
            Available Services</a>
          </li>
          <li onMouseEnter={() => setArrowSeven(true)} onMouseLeave={() => setArrowSeven(false)}>
            <a href="#" className={styles.footerDiv2MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSeven ? styles.activeArrowRight : styles.arrowRight} />
            Latest Posts</a>
          </li>
          <li onMouseEnter={() => setArrowEight(true)} onMouseLeave={() => setArrowEight(false)}>
            <a href="#" className={styles.footerDiv2MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowEight ? styles.activeArrowRight : styles.arrowRight} />
            FAQS</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv3}>
        <h4 className={styles.footerDiv3H4}>SOCIAL MEDIA</h4>
        <ul className={styles.footerDiv3Menu}>
          <li onMouseEnter={() => setArrowNine(true)} onMouseLeave={() => setArrowNine(false)}>
            <a href="#" className={styles.footerDiv3MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowNine ? styles.activeArrowRight : styles.arrowRight} />
            Twitter</a>
          </li>
          <li onMouseEnter={() => setArrowTen(true)} onMouseLeave={() => setArrowTen(false)}>
            <a href="#" className={styles.footerDiv3MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowTen ? styles.activeArrowRight : styles.arrowRight} />
            Instagram</a>
          </li>
          <li onMouseEnter={() => setArrowEleven(true)} onMouseLeave={() => setArrowEleven(false)}>
            <a href="#" className={styles.footerDiv3MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowEleven ? styles.activeArrowRight : styles.arrowRight} />
            Tumblr</a>
          </li>
          <li onMouseEnter={() => setArrowTwelve(true)} onMouseLeave={() => setArrowTwelve(false)}>
            <a href="#" className={styles.footerDiv3MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowTwelve ? styles.activeArrowRight : styles.arrowRight} />
            Pinterest</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv4}>
        <h4 className={styles.footerDiv4H4}>PROFILE</h4>
        <ul className={styles.footerDiv4Menu}>
          <li onMouseEnter={() => setArrowThirteen(true)} onMouseLeave={() => setArrowThirteen(false)}>
            <a href="#" className={styles.footerDiv4MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowThirteen ? styles.activeArrowRight : styles.arrowRight} />
            My Account</a>
          </li>
          <li onMouseEnter={() => setArrowFourteen(true)} onMouseLeave={() => setArrowFourteen(false)}>
            <a href="#" className={styles.footerDiv4MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFourteen ? styles.activeArrowRight : styles.arrowRight} />
            Checkout</a>
          </li>
          <li onMouseEnter={() => setArrowFifteen(true)} onMouseLeave={() => setArrowFifteen(false)}>
            <a href="#" className={styles.footerDiv4MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowFifteen ? styles.activeArrowRight : styles.arrowRight} />
            Order Tracking</a>
          </li>
          <li onMouseEnter={() => setArrowSixteen(true)} onMouseLeave={() => setArrowSixteen(false)}>
            <a href="#" className={styles.footerDiv4MenuLink}>
            <FontAwesomeIcon icon={faArrowRight} className={arrowSixteen ? styles.activeArrowRight : styles.arrowRight} />
            Help & Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;