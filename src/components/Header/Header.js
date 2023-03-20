import styles from './Header.module.css';
import slide1Image from '../../img/slide/h1-slide1-img.png';
import slide2Image1 from '../../img/slide/h1-slide2-img1.png';
import slide2Image2 from '../../img/slide/h1-slide2-img2.png';
import slide3Image from '../../img/slide/h1-slide3-img.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';


const Header = () => {

  return (
    <div className={styles.headerContainer}>

      <div className={styles.slideContainer}>

        <Swiper modules={[Navigation, Autoplay]}
          navigation={true}
          speed={800}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // className={styles.myswiper}
        > 

          <SwiperSlide>
            <div className={styles.headerSlide1}>
              <div className={styles.headerSlide1Left}>
                <h2 className={styles.headerSlide1H2}>THINK DIFFERENT.</h2>
                <p className={styles.headerSlide1P}>Depot is a unique & captivating theme designed
                  specifically for all types of shops and online stores.
                </p>
              </div>
              <div className={styles.headerSlide1Right}>
                <img src={slide1Image} alt="slide 1 image" 
                  className={styles.headerSlide1RightImage} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.headerSlide2}>
              <div className={styles.headerSlide2Left}>
                <h2 className={styles.headerSlide2H2}>PREMIUM COMFORT.</h2>
                <p className={styles.headerSlide2P}>One-click import feature lets you iport the complete
                  Depot demo content with a single mouse click.
                </p>
              </div>
              <div className={styles.headerSlide2Right}>
                <img src={slide2Image1} alt="slide 2 image 1" 
                  className={styles.headerSlide2RightImage1} />
                <img src={slide2Image2} alt="slide 2 image 2" 
                  className={styles.headerSlide2RightImage2} />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.headerSlide3}>
              <div className={styles.headerSlide3Left}>
                <h2 className={styles.headerSlide3H2}>CONTEMPORARY DESIGN.</h2>
                <p className={styles.headerSlide3P}>A large set of beautiful & fully flexible homepage layouts 
                  lets you create your website quickly & easily.
                </p>
              </div>

              <div className={styles.headerSlide3Right}>
                <img src={slide3Image} alt="slide 3 image" 
                className={styles.headerSlide3RightImage} />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        {/* <div className={styles.headerSlide1}>

          <div className={styles.headerSlide1Left}>
            <h2 className={styles.headerSlide1H2}>THINK DIFFERENT.</h2>
            <p className={styles.headerSlide1P}>Depot is a unique & captivating theme designed
              specifically for all types of shops and online stores.
            </p>
          </div>
          <div className={styles.headerSlide1Right}>
            <img src={slide1Image} alt="slide 1 image" 
              className={styles.headerSlide1RightImage} />
          </div>
        </div> */}

        {/* <div className={styles.headerSlide2}>

          <div className={styles.headerSlide2Left}>
            <h2 className={styles.headerSlide2H2}>PREMIUM COMFORT.</h2>
            <p className={styles.headerSlide2P}>One-click import feature lets you iport the complete
              Depot demo content with a single mouse click.
            </p>
          </div>
          <div className={styles.headerSlide2Right}>
            <img src={slide2Image1} alt="slide 2 image 1" 
              className={styles.headerSlide2RightImage1} />
            <img src={slide2Image2} alt="slide 2 image 2" 
              className={styles.headerSlide2RightImage2} />
          </div>
        </div> */}

        {/* <div className={styles.headerSlide3}>

          <div className={styles.headerSlide3Left}>
            <h2 className={styles.headerSlide3H2}>CONTEMPORARY DESIGN.</h2>
            <p className={styles.headerSlide3P}>A large set of beautiful & fully flexible homepage layouts 
              lets you create your website quickly & easily.
            </p>
          </div>

          <div className={styles.headerSlide3Right}>
            <img src={slide3Image} alt="slide 3 image" 
            className={styles.headerSlide3RightImage} />
          </div>
        </div> */}

      </div>

    </div>
  );
}

export default Header;