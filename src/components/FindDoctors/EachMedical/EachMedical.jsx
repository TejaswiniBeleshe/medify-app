import styles from "../EachMedical/Each.module.css"
import image from "../../../assets/hospital.png"
import { MdThumbUpAlt } from "react-icons/md";
const EachMedical = ({ele})=>{
    return(
       <>
        <div className={`${styles.hospi} d-flex justify-content-evenly`}>
            {/* Logo */}
           <div className={`${styles.hospLogo}`}>
               <div className={styles.logo}>
                    <img src={image} alt="not found" width="60px" height="60px" />
                </div>
           </div>
            
            {/* Hospital info */}
           <div className={`${styles.hospInfo}`}>
             <h5>{ele["Hospital Name"]} {ele["Address"]}</h5>
             <span>{ele.City} {ele.State}</span>
             <p>{ele["Hospital Type"]} +1 more</p>
             <p><span>FREE</span><span>$500</span>Consultant fee at clinic</p>
             <span id={styles.likes}><MdThumbUpAlt style={{color:"#FFFFFF"}} />{ele["Hospital overall rating"]}</span>
           </div>
           <div className={`${styles.bookBtn} d-flex flex-column justify-content-end align-items-center`}>
              <p>Available Today</p>
            <button className={styles.btn}>Bool FREE Center Visit</button>
           </div>
        </div>
       
        </>
    )
}
export default EachMedical;