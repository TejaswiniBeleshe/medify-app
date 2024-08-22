import React from "react";
import styles from "../LatestNews/Card.module.css"
import pill from "../../assets/pill.png"
import pic from "../../assets/detox.png"

const Card = ()=>{
    return(
        <div className={styles.card} >
            <img id={styles.image} src={pic} alt="not found"/>
            <div className={`${styles.cardInfo} p-3`} >
                <span className={styles.heading}>Medical | March 31,2024</span>
                <p>6 Tips To Protect Your Mental Health When You're Sick</p>
                <span className="w-50"><img src={pill} alt="not found" width="25px" height="25px" id={styles.pills} />Rebecca Lee</span>
            </div>
        </div>
    )
}
export default Card;