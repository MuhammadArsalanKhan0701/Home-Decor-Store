import styles from './FixedSideButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faArrowUp, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const FixedSideButtons = () => {
  const [arrowState, setArrowState] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

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

      <button 
        className={isVisible ? styles.goTop : undefined} 
        onClick={scrollToTop}
        onMouseEnter={() => setArrowState(prevState => !prevState)}
        onMouseLeave={() => setArrowState(prevState => !prevState)} 
      >
        <FontAwesomeIcon icon={arrowState ? faArrowUp : faAngleUp} />
      </button>
    </>
  );
}


export default FixedSideButtons;