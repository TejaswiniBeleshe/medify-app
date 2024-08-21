import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "../../assets/slide1.png"
import s2 from "../../assets/slide2.png";
import styles from "./SlideCompo.module.css"

function SlideCompo() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={`slider-container ${styles.main}`}>
      <Slider {...settings}>
        {/* <div className={`${styles.slideDiv}`}>
            <img src={s1} alt="not found" />
        </div>
        <div className={`${styles.slideDiv}`}>
        <img src={s2} alt="not found" />
        </div>
        <div className={`${styles.slideDiv}`}>
        <img src={s1} alt="not found" />
        </div> */}
        <div>
        <img src={s1} alt="not found" />
        </div>
        <div>
        <img src={s2} alt="not found"/>
        </div>
        <div>
        <img src={s1} alt="not found"/>
        </div>
        <div>
        <img src={s2} alt="not found" />
        </div>
        <div>
        <img src={s1} alt="not found"/>
        </div>
        <div>
        <img src={s2} alt="not found" />
        </div>
       
      </Slider>
    </div>
  );
}

export default SlideCompo;
