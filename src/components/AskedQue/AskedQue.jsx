import React from "react";
import styles from "./AskedQue.module.css"
import pic from "../../assets/askedque.png"
import { FaPlus } from "react-icons/fa";
import hp from "../../assets/happy.png";
const AskedQue =()=>{
    return(
        <div className={`${styles.askedqueDiv}`}>
            <h6 className="text-center">Get Your Answers</h6>
            <h1 className="text-center">Frequently Asked Questions</h1>

            <div className={`${styles.askedqueData} w-100 d-flex flex-column flex-lg-row justify-content-evenly align-items-center py-4`}>
                <div className={styles.faqImg}>
                    <img src={pic} alt="Not Found"/>
                    <div className={styles.hpDiv}>
                            <img src={hp} alt="not found"/>
                        </div>
                </div> 


                <div className={styles.queDiv}>
                    <div className="w-100 px-2 py-4 d-flex"><div className={styles.que}>Why choose our medical for your family?</div><FaPlus style={{color:"#2AA7FF",marginTop:".3rem",marginLeft:"1rem"}}/></div>
                    <div className="w-100 px-2 py-4 d-flex"><div className={styles.que}>Why we are different from others? </div><FaPlus style={{color:"#2AA7FF",marginTop:".3rem",marginLeft:"1rem"}}/></div>
                    <div className="w-100 px-2 py-4 d-flex"><div className={styles.que}>Trusted & experince senior care & love </div><FaPlus style={{color:"#2AA7FF",marginTop:".3rem",marginLeft:"1rem"}}/></div>
                    <div className="w-100 px-2 py-4 d-flex"><div className={styles.que}>How to get appointment for emergency case </div><FaPlus style={{color:"#2AA7FF",marginTop:".3rem",marginLeft:"1rem"}}/></div>
              
                </div>
            </div>

        </div>
    )
}

export default AskedQue;
