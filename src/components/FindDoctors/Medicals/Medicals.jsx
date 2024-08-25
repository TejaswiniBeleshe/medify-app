import EachMedical from "../EachMedical/EachMedical";
import styles from "../Medicals/Medicals.module.css";
import {context} from "../FindDoctors"
import { useContext, useEffect } from "react";
import image from "../../../assets/desc.png"
const Medicals = ()=>{
    const {resData} = useContext(context);
    
    
    useEffect(()=>{
      let check = localStorage.hasOwnProperty('bookings')
      if(!check){
        localStorage.setItem('bookings',JSON.stringify([]));
      }
    },[])
    const handleBook=(e)=>{
        let val = e.target.textContent;
        console.log('text of time',val)
        let getArr = JSON.parse(localStorage.getItem('bookings'));
        getArr.push(val);
        localStorage.setItem('bookings',JSON.stringify([...getArr]))
    }
    // useEffect(()=>{

    // })
    return(
        <div className={`${styles.medicals} d-flex`}>
            <div className={styles.medCards}>
                {
                    resData.length? resData.map(ele=>{
                        return <EachMedical ele={ele} handleBook = {handleBook}/>
                    }):""
                }

            </div>
            <div className={`${styles.addDiv} d-none d-lg-block`} style={{border:"1px solid yellow"}}>
                <img src={image} alt="not found" width="80%" height="200px" />
            </div>
        </div>
    )
}
export default Medicals;

