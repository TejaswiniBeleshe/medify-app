import React from "react";
import styles from "./EachBookedCard.module.css";
import image from "../../../assets/hospital.png"
import { MdThumbUpAlt } from "react-icons/md";
const EachBookedCard = ({ele})=>{
    return(
        <div className={`${styles.hospi} d-flex justify-content-evenly`}>
        {/* Logo */}
       <div className={`${styles.hospLogo}`}>
           <div className={styles.logo}>
                <img src={image} alt="not found" width="60px" height="60px" />
            </div>
       </div>
        
        {/* Hospital info */}
       <div className={`${styles.hospInfo}`}>
         <h5 style={{color:" #2AA7FF"}}>{ele.h_name}</h5>
         <span style={{fontWeight:"700"}}>{ele.city}</span>
         <p>{ele.address} +1 more...</p>
         <span id={styles.likes}><MdThumbUpAlt style={{color:"#FFFFFF"}} />{ele.ratings}</span>
       </div>
       <div className={`${styles.bookBtn} d-flex  justify-content-evenly align-items-start`}>
        <span className={styles.bookedTime}>{ele.time}</span>
        <span className={styles.bookedDate}>20 April 2024</span>
       </div>
    </div>
    )
}
export default EachBookedCard;