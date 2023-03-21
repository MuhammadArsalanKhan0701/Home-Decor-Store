import styles from './FooterBottom.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const FooterBottom = () => {

  return (
    <div className={styles.footerBottom}>
      <p className={styles.footerBottomP}>
        © 2021 Qode Interactive, All Rights Reserved
      </p>
      <div>
        <span className={styles.footerBottomSpan}>Follow Us</span>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.footerBottomTwitter} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.footerBottomInstagram} />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon
            icon={faFacebookF}
            className={styles.footerBottomFacebook} />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;