import EachMedical from "../EachMedical/EachMedical";
import styles from "../Medicals/Medicals.module.css";
import {context} from "../FindDoctors"
import { useContext, useEffect,useId } from "react";
import image from "../../../assets/desc.png"
const Medicals = ()=>{
    const {resData} = useContext(context);
 
    
    
    useEffect(()=>{
      let check = localStorage.hasOwnProperty('bookings')
      if(!check){
        localStorage.setItem('bookings',JSON.stringify([]));
      }
    },[])
    const handleBook=(e,ele)=>{
        let val = e.target.textContent;
        let resObj = {};
        resObj.pId = Date.now();
        resObj.h_name = ele["Hospital Name"];
        resObj.address = ele["Address"];
        resObj.city = ele["City"];
        resObj.rating = ele["Hospital overall rating"]
        resObj.time = val+"";
        console.log('text of time',resObj)
        let getArr = JSON.parse(localStorage.getItem('bookings'));
        getArr.push(resObj);
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
            <div className={`${styles.addDiv} d-none d-lg-block`} >
                <img src={image} alt="not found" width="80%" height="200px" />
            </div>
        </div>
    )
}
export default Medicals;

