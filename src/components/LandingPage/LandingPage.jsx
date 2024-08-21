import React from "react";
import landing from "../../assets/landing.png"
import styles from "./LandingPage.module.css"
const LandingPage = ()=>{
    return(
        <div className={`${styles.landingpage} w-100 d-flex justify-content-evenly flex-column-reverse flex-md-row`}>
            <div className={`${styles.landingInfo}`}>
                <h4>Skip the travel! Find Online</h4>
                <h1>Medical <span style={{color:"#2AA7FF"}}>Center</span></h1>
                <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <button className={`btn ${styles.btn}`}>Find Centers</button>

            </div>
            <div className={`${styles.landingimg}`}>
                <img src={landing} alt="not found"  />
            </div>
        </div>
    )
}
export default LandingPage;