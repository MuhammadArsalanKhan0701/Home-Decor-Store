import styles from './Item1.module.css';
import img1 from '../../img/products/item2/img1.png';
import img2 from '../../img/products/item2/img2.png';
import img3 from '../../img/products/item2/img3.png';
import img4 from '../../img/products/item2/img4.png';
import img5 from '../../img/products/item2/img5.png';
import img6 from '../../img/products/item1/relatedProducts/img6.png';
import img7 from '../../img/products/item1/relatedProducts/img7.png';
import img8 from '../../img/products/item1/relatedProducts/img8.png';
import img9 from '../../img/products/item1/relatedProducts/img9.png';
import Olivia from '../../img/products/item2/olivia.png';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSol, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Item2 = () => {
  const [descriptionLinkState, setDescriptionLinkState] = useState(true);
  const [infoLinkState, setInfoLinkState] = useState(false);
  const [reviewLinkState, setReviewLinkState] = useState(false);

  const onDescription = () => {
    setDescriptionLinkState(true);
    setInfoLinkState(false);
    setReviewLinkState(false);
  }
  const onInfo = () => {
    setDescriptionLinkState(false);
    setInfoLinkState(true);
    setReviewLinkState(false);
  }
  const onReview = () => {
    setDescriptionLinkState(false);
    setInfoLinkState(false);
    setReviewLinkState(true);
  }

  return (
    <>
      <div className={styles.itemHeader}>
        <div className={styles.leftHeader}>
          <div className={styles.imageColumn}>
            <img src={img1} alt="one" className={styles.img1} />
            <img src={img2} alt="two" className={styles.img2} />
            <img src={img3} alt="three" className={styles.img3} />
            <img src={img4} alt="four" className={styles.img4} />
          </div>
          <div className={styles.mainColumn}>
            <img src={img5} alt="five" className={styles.mainImage} />
          </div>
        </div>

        <div className={styles.rightHeader}>
          <h3 className={styles.rightHeaderh3}>
            FLOWER VASE
          </h3>
          <p className={styles.rightHeaderPrice}>
            <s style={{fontSize:'1rem', color:'gray', paddingRight:'10px'}}>$210</s> 
            $170
          </p>
          <p className={styles.rightHeaderRating}>
            <span className={styles.starRegspan}>
              <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
              <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
              <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
              <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
              <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
            </span>
            <span>(1 CUSTOMER REVIEW)</span>
          </p>
          <p className={styles.rightHeaderDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. In ut ullamcorper leo, eget euismod orci. 
           Cum sociis natoque penatibus et magnis dis parturient
            montes nascetur ridiculus mus. Vestibulum ultricies 
            aliquam convallis.
          </p>
          <form className={styles.quantityForm}>
            <div className={styles.quantityDiv}>
              <span className={styles.quantityDivspan}>Quantity</span>
              <input type="number" id='quantityInput' name='quantityInput'
                min={1} max={100} step={1} autoComplete='off' 
                className={styles.quantityInput}/>
            </div>
            <button type='submit' name='addToCart'
              className={styles.addToCartButton}
              onClick={(event) => event.preventDefault()}>
              Add to cart
            </button>
          </form>
          <a href="#" onClick={(event) => event.preventDefault()}
            className={styles.wishLink}>
              <FontAwesomeIcon icon={faHeart} 
                className={styles.wishLinkHeart}/>
              BROWSE WISHLIST
          </a>
          <p className={styles.SKU}>SKU:008</p>
          <p className={styles.categories}>Categories:
            <span className={styles.categoriesSpan}>
              Decoration, Home, Decor
            </span>
          </p>
          <p className={styles.tags}>Tags:
            <span className={styles.tagSpan}>Black, Modern</span>
          </p>
          
        </div>
      </div>

      <div className={styles.infoSection}>
        {/* =========MENU============ */}
        <ul className={styles.infoUL}>
          <li><a href="#" className={`${styles.infoULLink} ${descriptionLinkState && styles.activeLink}`}
            onClick={(event) => {
              event.preventDefault();
              onDescription();
            }}>
            DESCRIPTION</a></li>
          <li><a href="#" className={`${styles.infoULLink} ${infoLinkState && styles.activeLink}`}
            onClick={(event) => {
              event.preventDefault();
              onInfo();
            }}>
            ADDITIONAL INFORMATION</a></li>
          <li><a href="#" className={`${styles.infoULLink} ${reviewLinkState && styles.activeLink}`}
            onClick={(event) => {
              event.preventDefault();
              onReview();
            }}>
            REVIEWS (1)</a></li>
        </ul>
        <hr className={styles.hrule} />

        {/* =========DESCRIPTION======= */}
        <div className={descriptionLinkState ? styles.description : styles.hiddenDiv}>
          <h2 className={styles.descriptionTitle}>DESCRIPTION</h2>
          <p className={styles.descriptionParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
            et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
            ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt,
            lectus eu volutpat mattis, ante metus lacinia tellus, vitae
            condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum
            nec venenatis id, pretium sit amet purus. Interdum et malesuada fames.
          </p>
        </div>

        {/* ==========INFORMATION====== */}
        <div className={infoLinkState ? styles.information : styles.hiddenDiv}>
          <h2 className={styles.informationTitle}>ADDITIONAL INFORMATION</h2>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>Weight</th>
                <td className={styles.infoTD}>2 kg</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td className={styles.infoTD}>10 x 10 x 15 cm</td>
              </tr>
              <tr>
                <th>Color</th>
                <td className={styles.infoTD}>Beige, Black</td>
              </tr>
              <tr>
                <th>Material</th>
                <td className={styles.infoTD}>Metal, Wood</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* =========REVIEWS======= */}
        <div className={reviewLinkState ? styles.reviews : styles.hiddenDiv}>
          <h2 className={styles.reviewTitle}>
            1 REVIEW FOR BASKET WITH HANDLES
          </h2>
          <div className={styles.commentDiv}>
            <img src={Olivia} alt="Olivia" />
            <div className={styles.commentContent}>
              <p className={styles.starSolP}>
                <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
                <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
                <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
                <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
                <FontAwesomeIcon icon={faStarSol} className={styles.startSolIcon} />
              </p>
              <p className={styles.commentName}>Olivia Schmidt - 08.02.2023</p>
              <p className={styles.commentText}>Amazing!</p>
            </div>
          </div>
          <div className={styles.addReview}>
            <h3 className={styles.addReviewH3}>ADD A REVIEW</h3>
            <p className={styles.addReviewP}>Your email address will not be published.
              Requied fields are marked*</p>
            <form action="">
              <label htmlFor="rating" className={styles.rating}>Your rating <sup>*</sup></label>
              <p className={styles.starRegP}>
                <FontAwesomeIcon icon={faStarReg} className={styles.starRegIcon} />
                <FontAwesomeIcon icon={faStarReg} className={styles.starRegIcon} />
                <FontAwesomeIcon icon={faStarReg} className={styles.starRegIcon} />
                <FontAwesomeIcon icon={faStarReg} className={styles.starRegIcon} />
                <FontAwesomeIcon icon={faStarReg} className={styles.starRegIcon} />
              </p>
              <div>
                <label className={styles.commentLabel} htmlFor="comment">Your review <sup>*</sup></label>
                <textarea className={styles.commentArea} name="comment" id="comment" required>
                </textarea>
              </div>
              <div>
                <label className={styles.authorLabel} htmlFor="author">Name <sup>*</sup></label>
                <input className={styles.authorInput} type="text" id='author' name='author' size={30} required />
              </div>
              <div>
                <label className={styles.emailLabel} htmlFor="email">Email <sup>*</sup></label>
                <input className={styles.emailInput} type="email" id='email' name='email' required />
              </div>
              <p className={styles.saveName}>
                <input id='consentCheck' name='consentCheck'
                  type="checkbox" />
                <label className={styles.saveNameLabel} htmlFor=" consentCheck">Save my name, email and website in this
                  browser for the next time I comment.</label>
              </p>
              <button className={styles.submitButton} type='submit'>SUBMIT</button>

            </form>
          </div>
        </div>

        <hr className={styles.hrule} />
      </div>

      <div className={styles.relatedProducts}>
        <p className={styles.sectionTitle}>RELATED PRODUTS</p>
        <div className={styles.itemContainer}>
          <div className={styles.item1}>
            <a href="#">
              <img src={img6} alt="product 6" className={styles.img6} />
            </a>
            <a href="#" className={styles.itemTitle}>DECO ACCESSORY</a>
            <p></p>
            <a href="#" className={styles.itemPrice}>$15</a>
          </div>
          <div className={styles.item1}>
            <a href="#">
              <img src={img7} alt="product 7" className={styles.img6} />
            </a>
            <a href="#" className={styles.itemTitle}>ELEGANT PENDANT</a>
            <p></p>
            <a href="#" className={styles.itemPrice}>$290</a>
          </div>
          <div className={styles.item1}>
            <a href="#">
              <img src={img8} alt="product 8" className={styles.img6} />
            </a>
            <a href="#" className={styles.itemTitle}>WHITE CLOCK</a>
            <p></p>
            <a href="#" className={styles.itemPrice}>
              <s>$120</s> $90</a>
          </div>
          <div className={styles.item1}>
            <a href="#">
              <img src={img9} alt="product 9" className={styles.img6} />
            </a>
            <a href="#" className={styles.itemTitle}>POTTERY VASE</a>
            <p></p>
            <a href="#" className={styles.itemPrice}>$60</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item2;