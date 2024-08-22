import React from "react";
import styles from "./PatientCare.module.css"
import pc1 from "../../assets/Pcare/p1.png";
import pc2 from "../../assets/Pcare/p2.png";
import { FcApproval } from "react-icons/fc";
import fc from "../../assets/FreeCon.png"

const PatientCare = ()=>{
    return(
        <div className={`${styles.pcareDiv} d-flex justify-content-evenly flex-lg-row flex-column`}>

            <div className={`${styles.pcareImg} `}>
                <div className={styles.pc2}><img className={styles.i2} src={pc2} alt="not found" /></div>
                <div className={styles.pc1}><img className={styles.i1} src={pc1} alt="not found" /></div>
                <div className={styles.fcon}><img src={fc} alt="not found" /></div>
                

            </div>

            <div className={`${styles.pcareInfo} `}>
                <h6>HELPING PATIENTS FROM AROUND THE GLOBE!</h6>
                <h1><span style={{color:"#1B3C74"}}>Patient</span><span style={{color:"#2AA7FF"}}> Care</span></h1>
                <p className="my-3">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                
                <div className="w-100 py-1 my-2"><FcApproval size={20}  style={{marginRight:".5rem"}}/><span>Stay Updated About Your Health</span></div>
                <div className="w-100 py-1 my-2"><FcApproval size={20}  style={{marginRight:".5rem"}}/><span>Check Your Result Online</span></div>
                <div className="w-100 py-1 my-2"><FcApproval size={20}  style={{marginRight:".5rem"}}/><span>Manage your Appointent</span></div>

            </div>

        </div>
    )
}
export default PatientCare;