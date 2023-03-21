import styles from './FooterTop.module.css';

const FooterTop = () => {

  return (
    <div className={styles.footerTop}>
      <div className={styles.footerDiv1}>
        <h4 className={styles.footerDiv1H4}>CUSTOMER SERVICE</h4>
        <ul className={styles.footerDiv1Menu}>
          <li>
            <a href="#" className={styles.footerDiv1MenuLink}>Help & Contact Us</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv1MenuLink}>Returns & Refunds</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv1MenuLink}>Online Stores</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv1MenuLink}>Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv2}>
        <h4 className={styles.footerDiv2H4}>COMPANY</h4>
        <ul className={styles.footerDiv2Menu}>
          <li>
            <a href="#" className={styles.footerDiv2MenuLink}>What We Do</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv2MenuLink}>Available Services</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv2MenuLink}>Latest Posts</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv2MenuLink}>FAQS</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv3}>
        <h4 className={styles.footerDiv3H4}>SOCIAL MEDIA</h4>
        <ul className={styles.footerDiv3Menu}>
          <li>
            <a href="#" className={styles.footerDiv3MenuLink}>Twitter</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv3MenuLink}>Instagram</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv3MenuLink}>Tumblr</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv3MenuLink}>Pinterest</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerDiv4}>
        <h4 className={styles.footerDiv4H4}>PROFILE</h4>
        <ul className={styles.footerDiv4Menu}>
          <li>
            <a href="#" className={styles.footerDiv4MenuLink}>My Account</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv4MenuLink}>Checkout</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv4MenuLink}>Order Tracking</a>
          </li>
          <li>
            <a href="#" className={styles.footerDiv4MenuLink}>Help & Support</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;