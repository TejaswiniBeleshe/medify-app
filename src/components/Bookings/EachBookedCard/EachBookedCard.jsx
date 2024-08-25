import React from "react";
import styles from "./EachBookedCard.module.css";
import image from "../../../assets/hospital.png"
import { MdThumbUpAlt } from "react-icons/md";
const EachBookedCard = ()=>{
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
         <h5 style={{color:" #2AA7FF"}}>drfgthjkl</h5>
         <span style={{fontWeight:"700"}}>Banglore karnataka</span>
         <p>Balakrishna nimbalkar colony akol road Nipani+1 more</p>
         <span id={styles.likes}><MdThumbUpAlt style={{color:"#FFFFFF"}} />5</span>
       </div>
       <div className={`${styles.bookBtn} d-flex  justify-content-evenly align-items-start`}>
        <span className={styles.bookedTime}>11:50</span>
        <span className={styles.bookedDate}>20 April 2024</span>
       </div>
    </div>
    )
}
export default EachBookedCard;