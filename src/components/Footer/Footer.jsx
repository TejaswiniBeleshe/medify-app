import styles from "../Footer/Footer.module.css";
import logo from "../../assets/logo.png";
// import { FaGreaterThan } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";



const Footer = ()=>{
    return(
        <footer className={`${styles.footerBody} `}>
            <div className="d-flex justify-content-between w-100">
            <div className={`${styles.icons}`}>
            <span id={`${styles.vector}`}><img src={logo} alt="not found" height="13px"/></span><span id={styles.logoName}>Medifty</span>
              
             <div className={`${styles.listIcons} d-flex justify-content-evenly my-4`}>
                <span className={styles.iconDiv}><GrFacebookOption size={20} style={{color:"#2AA8FF"}}/></span>
                <span className={styles.iconDiv}>< AiOutlineTwitter size={20} style={{color:"#2AA8FF"}}/></span>
                <span className={styles.iconDiv}>< FaYoutube size={20} style={{color:"#2AA8FF"}}/></span>
                <span className={styles.iconDiv}><FaPinterest size={20} style={{color:"#2AA8FF"}}/></span>
                
            </div> 

            </div>
            <div className={`${styles.info} container `}>
            <div className="row row-cols-sm-2 row-cols-md-4 ">
                    <div className="col">About Us</div>
                    <div className="col">Orthology</div>
                    <div className="col">Our Pricing</div>
                    <div className="col">Neurology</div>
                    <div className="col">Our Gallery</div>
                    <div className="col">Dental Care</div>
                    <div className="col">Appointment</div>
                    <div className="col">Opthalmology</div>
                    <div className="col">Privacy Policy</div>
                    <div className="col">Cardiology</div>
                </div>
            </div>
            </div>
            <hr />
            <div className="text-center">
                Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </div>

        </footer>
    )
}
export default Footer;