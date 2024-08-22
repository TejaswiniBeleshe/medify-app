import React from "react";
import Slider from "react-slick";
import styles from "./SpecialistList.module.css"
import doctor1 from "../../assets/Doctors/d1.png";
import doctor2 from "../../assets/Doctors/d2.png";
import doctor3 from "../../assets/Doctors/d3.png"
import doctor4 from "../../assets/Doctors/d4.png"
import doctor5 from "../../assets/Doctors/d5.png"
const SpecialistList = ()=>{
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div className={`slider-container ${styles.mainDiv}`}>
            <h1>Our Medical Specialist</h1>
          <Slider {...settings}>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor1} alt="not found"/>
               </div>
              <h4>Dr. Lesley Hull</h4>
              <p>Medicin</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor5} alt="not found"/>
               </div>
              <h4>Dr. Ahmad Stevens</h4>
              <p>Neurologist</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor2} alt="not found"/>
               </div>
              <h4>Dr. Ahmad Khan</h4>
              <p>Neurologist</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor4} alt="not found"/>
               </div>
              <h4>Dr. Ankur Sharma</h4>
              <p>Medicine</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor3} alt="not found"/>
               </div>
              <h4>Dr. Heena Sachdeva</h4>
              <p>Orthopadics</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor1} alt="not found"/>
               </div>
              <h4>Dr. Lesley Hull</h4>
              <p>Medicin</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor2} alt="not found"/>
               </div>
              <h4>Dr. Ahmad Khan</h4>
              <p>Neurologist</p>
            </div>
            <div className={styles.card}>
               <div className={styles.cardImg}>
                  <img src={doctor3} alt="not found"/>
               </div>
              <h4>Dr. Heena Sachdeva</h4>
              <p>Orthopadics</p>
            </div>
          </Slider>
        </div>
      );

}
export default SpecialistList;