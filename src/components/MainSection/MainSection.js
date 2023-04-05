import styles from './MainSection.module.css';
import img1 from '../../img/main/img1.png';
import img2 from '../../img/main/img2.png';
import img3 from '../../img/main/img3.png';
import img4 from '../../img/main/img4.png';
import img5 from '../../img/main/img5.png';
import img6 from '../../img/main/img6.png';
import img7 from '../../img/main/img7.png';
import img8 from '../../img/main/img8.png';
import { useState } from 'react';
import { Link } from "react-router-dom";

const MainSection = () => {
  const [mainGridState, setMainGridState] = useState(true);
  const [lightingGridState, setLightingGridState] = useState(false);
  const [decorationGridState, setDecorationGridState] = useState(false);
  const [vasesGridState, setVasesGridState] = useState(false);
  const [basicsGridState, setBasicsGridState] = useState(false);

  const showMainGrid = () => {
    setMainGridState(true);
    setLightingGridState(false);
    setDecorationGridState(false);
    setVasesGridState(false);
    setBasicsGridState(false);
  }

  const showLightingGrid = () => {
    setMainGridState(false);
    setLightingGridState(true);
    setDecorationGridState(false);
    setVasesGridState(false);
    setBasicsGridState(false);
  }
  const showDecoGrid = () => {
    setMainGridState(false);
    setLightingGridState(false);
    setDecorationGridState(true);
    setVasesGridState(false);
    setBasicsGridState(false);
  }
  const showVasesGrid = () => {
    setMainGridState(false);
    setLightingGridState(false);
    setDecorationGridState(false);
    setVasesGridState(true);
    setBasicsGridState(false);
  }

  const showBasicsGrid = () => {
    setMainGridState(false);
    setLightingGridState(false);
    setDecorationGridState(false);
    setVasesGridState(false);
    setBasicsGridState(true);
  }

  return (
    <div className={styles.mainSection}>

      <div className={styles.menuDiv}>
        <ul className={styles.menuUL}>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showMainGrid();
              }}
            >
              ALL</a></li>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showMainGrid();
              }}
            >HOME DECOR</a></li>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showLightingGrid();
              }}
            >
              LIGHTING</a></li>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showDecoGrid();
              }}
            >DECORATION</a></li>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showVasesGrid();
              }}
            >VASES</a></li>
          <li>
            <a className={styles.menuLink} href="#"
              onClick={(event) => {
                event.preventDefault();
                showBasicsGrid();
              }}
            >BASICS</a></li>
        </ul>
      </div>

      <div className={mainGridState ? styles.mainGrid : styles.hiddenGrid}>
        <div className={styles.item1}>
          <Link to='/item1' target='_blank'>
            <img src={img1} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item1' target='_blank' 
            className={styles.itemTitle}>BASKET WITH HANDLES</Link>
          <Link to='/item1' target='_blank' 
            className={styles.itemPrice}>$160</Link>
        </div>
        <div className={styles.item2}>
          <Link to='/item2' target='_blank'>
            <img src={img2} alt="img2" className={styles.img1} />
          </Link>
          <Link to='/item2' target='_blank'
            className={styles.itemTitle}>FLOWER VASE</Link>
          <Link to='/item2' target='_blank'
            className={styles.itemPrice}><s>$210</s> $170</Link>
        </div>
        <div className={styles.item3}>
          <Link to='/item3' target='_blank'>
            <img src={img3} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item3' target='_blank'
            className={styles.itemTitle}>DECO ACCESSORY</Link>
          <Link to='/item3' target='_blank'
            className={styles.itemPrice}>$15</Link>
        </div>
        <div className={styles.item4}>
          <Link to='/item4' target='_blank'>
            <img src={img4} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item4' target='_blank'
            className={styles.itemTitle}>WALL CLOCK</Link>
          <Link to='/item4' target='_blank'
            className={styles.itemPrice}>$110</Link>
        </div>
        <div className={styles.item5}>
          <Link to='/item5' target='_blank'>
            <img src={img5} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item5' target='_blank'
            className={styles.itemTitle}>NEWSPAPER STORAGE</Link>
          <Link to='/item5' target='_blank'
            className={styles.itemPrice}>$90</Link>
        </div>
        <div className={styles.item6}>
          <Link to='/item6' target='_blank'>
            <img src={img6} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item6' target='_blank'
            className={styles.itemTitle}>POTTERY VASE</Link>
          <Link to='/item6' target='_blank'
            className={styles.itemPrice}>$60</Link>
        </div>
        <div className={styles.item7}>
          <Link to='/item7' target='_blank'>
            <img src={img7} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item7' target='_blank'
            className={styles.itemTitle}>ROSE HOLDBACK</Link>
          <Link to='/item7' target='_blank'
            className={styles.itemPrice}><s>$30</s> $24</Link>
        </div>
        <div className={styles.item8}>
          <Link to='/item8' target='_blank'>
            <img src={img8} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item8' target='_blank'
            className={styles.itemTitle}>TABLE LAMP</Link>
          <Link to='/item8' target='_blank'
            className={styles.itemPrice}>$240</Link>
        </div>
      </div>

      <div className={lightingGridState ? styles.lightingGrid : styles.hiddenGrid}>
        <div className={styles.item8}>
          <Link to='/item8' target='_blank'>
            <img src={img8} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item8' target='_blank'
            className={styles.itemTitle}>TABLE LAMP</Link>
          <Link to='/item8' target='_blank'
            className={styles.itemPrice}>$240</Link>
        </div>
      </div>

      <div className={decorationGridState ? styles.decorationGrid : styles.hiddenGrid}>
        <div className={styles.item1}>
          <Link to='/item1' target='_blank'>
            <img src={img1} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item1' target='_blank'
            className={styles.itemTitle}>BASKET WITH HANDLES</Link>
          <Link to='/item1' target='_blank'
            className={styles.itemPrice}>$160</Link>
        </div>
        <div className={styles.item7}>
          <Link to='/item7' target='_blank'>
            <img src={img7} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item7' target='_blank'
            className={styles.itemTitle}>ROSE HOLDBACK</Link>
          <Link to='/item7' target='_blank'
            className={styles.itemPrice}><s>$30</s> $24</Link>
        </div>
      </div>

      <div className={vasesGridState ? styles.vasesGrid : styles.hiddenGrid}>
        <div className={styles.item2}>
          <Link to='/item2' target='_blank'>
            <img src={img2} alt="img2" className={styles.img1} />
          </Link>
          <Link to='/item2' target='_blank'
            className={styles.itemTitle}>FLOWER VASE</Link>
          <Link to='/item2' target='_blank'
            className={styles.itemPrice}><s>$210</s> $170</Link>
        </div>
        <div className={styles.item6}>
          <Link to='/item6' target='_blank'>
            <img src={img6} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item6' target='_blank'
            className={styles.itemTitle}>POTTERY VASE</Link>
          <Link to='/item6' target='_blank'
            className={styles.itemPrice}>$60</Link>
        </div>
      </div>

      <div className={basicsGridState ? styles.basicsGrid : styles.hiddenGrid}>
        <div className={styles.item3}>
          <Link to='/item3' target='_blank'>
            <img src={img3} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item3' target='_blank'
            className={styles.itemTitle}>DECO ACCESSORY</Link>
          <Link to='/item3' target='_blank'
            className={styles.itemPrice}>$15</Link>
        </div>
        <div className={styles.item4}>
          <Link to='/item4' target='_blank'>
            <img src={img4} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item4' target='_blank'
            className={styles.itemTitle}>WALL CLOCK</Link>
          <Link to='/item4' target='_blank'
            className={styles.itemPrice}>$110</Link>
        </div>
        <div className={styles.item5}>
          <Link to='/item5' target='_blank'>
            <img src={img5} alt="img1" className={styles.img1} />
          </Link>
          <Link to='/item5' target='_blank'
            className={styles.itemTitle}>NEWSPAPER STORAGE</Link>
          <Link to='/item5' target='_blank'
            className={styles.itemPrice}>$90</Link>
        </div>
      </div>


    </div>
  );
}

export default MainSection;