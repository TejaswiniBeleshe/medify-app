import React,{useState} from "react";
import styles from "../EachMedical/Each.module.css"
import image from "../../../assets/hospital.png"
import { MdThumbUpAlt } from "react-icons/md";
import Tabcompo from "../Tab/Tab";
const EachMedical = ({ele,handleBook})=>{
  const [show,setShow] = useState(false);
  console.log(ele)
    return(
     
      <div className={`${styles.hospi}`} style={{border:"1px solid purple"}}>
        <div className={` d-flex justify-content-evenly`}>
            {/* Logo */}
           <div className={`${styles.hospLogo}`}>
               <div className={styles.logo}>
                    <img src={image} alt="not found" width="60px" height="60px" />
                </div>
           </div>
            
            {/* Hospital info */}
           <div className={`${styles.hospInfo}`}>
             <h5>{ele["Hospital Name"]}</h5>
             <span>{ele["City"]} {ele["State"]}</span>
             <p>{ele["Address"]}</p>
             <p><span>FREE</span><span>$500</span>Consultant fee at clinic</p>
             <span id={styles.likes}><MdThumbUpAlt style={{color:"#FFFFFF"}} />{ele["Hospital overall rating"]}</span>
           </div>
           <div className={`${styles.bookBtn} d-flex flex-column justify-content-end align-items-center`}>
              <p>Available Today</p>
            <button className={styles.btn} onClick={()=>setShow(!show)}>{show ?"Hide Booking Tab":"Book Free Center Visit"}</button>
           </div>
        </div>
        {
          show?
        <div className="w-100">
          <Tabcompo handleBook={handleBook} ele={ele}/>
        </div>:""
        }
        </div>
    )
}
export default EachMedical;