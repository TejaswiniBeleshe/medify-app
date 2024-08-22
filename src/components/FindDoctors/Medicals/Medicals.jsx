import EachMedical from "../EachMedical/EachMedical";
import styles from "../Medicals/Medicals.module.css";
import {context} from "../FindDoctors"
import { useContext } from "react";
import image from "../../../assets/desc.png"
const Medicals = ()=>{
    const {resData} = useContext(context);
    console.log("medicak",resData)
    return(
        <div className={`${styles.medicals} d-flex`}>
            <div style={{border:"1px solid red",width:"60%",paddingTop:"3rem"}}>
                {
                    resData.length? resData.map(ele=>{
                        return <EachMedical ele={ele}/>
                    }):""
                }

               <div className={`${styles.bookingDiv}`}>
                         
                

               </div>
            </div>
            <div style={{border:"1px solid yellow",width:"30%"}}>
                <img src={image} alt="not found" width="80%" height="80%" />


            </div>
        </div>
    )
}
export default Medicals;

