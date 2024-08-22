import React from "react";
import styles from "./OurFamily.module.css"
import i1 from "../../assets/of1.png";
import i2 from "../../assets/of2.png";
import i3 from "../../assets/of3.png";
import i4 from "../../assets/of4.png"
const OurFamily = ()=>{
    return(
        <div className={`${styles.ofDiv} d-flex flex-column flex-lg-row align-items-center justify-content-evenly`}>

            <div className={`${styles.ofInfo}`}>
                <h6>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY</h6>
                <h1>Our Families</h1>
                 <p>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>

            </div>

            <div className={`${styles.ofImgs} d-flex justify-content-evenly`}>

                <div className={`${styles.imgDiv1} d-flex flex-column`}>
                    <img src={i1} alt="not found" />
                    <img src={i2} alt=" not found"/>

                </div>

                <div className={`${styles.imgDiv2} d-flex flex-column`}>
                <img src={i3} alt="not found" />
                <img src={i4} alt=" not found"/>

                </div>

            </div>

        </div>

    )
}
export default OurFamily;